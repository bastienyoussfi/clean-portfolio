import React, { useEffect, useState } from 'react';
import { NotionRenderer as ReactNotionRenderer } from 'react-notion-x';
import { ExtendedRecordMap } from 'notion-types';
import { fetchNotionPage, getPageIdFromNotionUrl } from '../../services/notionService';

// Note: You may need to manually include these styles in your main CSS file
// or create a separate CSS file for Notion styling

interface NotionRendererProps {
  notionUrl: string;
}

const NotionRenderer: React.FC<NotionRendererProps> = ({ notionUrl }) => {
  const [recordMap, setRecordMap] = useState<ExtendedRecordMap | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [fallbackToIframe, setFallbackToIframe] = useState<boolean>(false);

  useEffect(() => {
    const loadNotionContent = async () => {
      if (!notionUrl) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const pageId = getPageIdFromNotionUrl(notionUrl);
        const notionData = await fetchNotionPage(pageId);
        setRecordMap(notionData);
        setError(null);
      } catch (err) {
        console.error('Error loading Notion content:', err);
        setError('Failed to load Notion content. Falling back to iframe embed.');
        setFallbackToIframe(true);
      } finally {
        setLoading(false);
      }
    };

    loadNotionContent();
  }, [notionUrl]);

  // Extract Notion page ID for iframe fallback
  const getNotionPageIdForIframe = () => {
    if (!notionUrl) return '';
    
    const urlParts = notionUrl.split('/');
    const lastPart = urlParts[urlParts.length - 1];
    
    // If the last part contains a dash, it's likely in the format "Page-Title-123456789abcdef"
    if (lastPart.includes('-')) {
      const pageId = lastPart.split('-').pop();
      return pageId || '';
    }
    
    // Otherwise, the last part might be just the ID
    return lastPart;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 dark:border-neutral-200"></div>
      </div>
    );
  }

  // If we need to fall back to iframe
  if (fallbackToIframe) {
    const pageId = getNotionPageIdForIframe();
    return (
      <div className="w-full aspect-auto min-h-[70vh]">
        <iframe
          src={`https://notion.so/${pageId}?embed=true`}
          className="w-full h-full border-0 rounded-lg"
          title="Notion content"
          sandbox="allow-scripts allow-popups allow-top-navigation-by-user-activation allow-forms allow-same-origin"
          loading="lazy"
          style={{ minHeight: '70vh' }}
        />
      </div>
    );
  }

  if (error && !fallbackToIframe) {
    return (
      <div className="py-10 text-center">
        <p className="text-red-500 dark:text-red-400">{error}</p>
        <p className="mt-4 text-gray-600 dark:text-neutral-400">
          You can still view the content directly on{' '}
          <a 
            href={notionUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Notion
          </a>
        </p>
      </div>
    );
  }

  if (!recordMap) {
    return (
      <div className="py-10 text-center">
        <p className="text-gray-600 dark:text-neutral-400">No content available</p>
      </div>
    );
  }

  return (
    <div className="notion-content">
      <ReactNotionRenderer
        recordMap={recordMap}
        fullPage={false}
        darkMode={document.documentElement.classList.contains('dark')}
        disableHeader={true}
      />
    </div>
  );
};

export default NotionRenderer; 