import { Client } from '@notionhq/client';
import { NotionAPI } from 'notion-client';
import { ExtendedRecordMap } from 'notion-types';

// For public pages, we can use the unofficial client
const notionX = new NotionAPI();

// For private pages, we need to use the official client with an API key
// You'll need to create an integration in Notion and get an API key
// https://developers.notion.com/docs/getting-started
let notionClient: Client | null = null;

// Define a type for the window with env property
interface WindowWithEnv extends Window {
  env?: {
    REACT_APP_NOTION_API_KEY?: string;
  };
}

// Initialize the official Notion client if API key is available
// In browser environments, we need to access environment variables through window
const NOTION_API_KEY = typeof window !== 'undefined' 
  ? (window as WindowWithEnv).env?.REACT_APP_NOTION_API_KEY 
  : process?.env?.REACT_APP_NOTION_API_KEY;

if (NOTION_API_KEY) {
  notionClient = new Client({
    auth: NOTION_API_KEY,
  });
}

/**
 * Extract the Notion page ID from a Notion URL
 */
export const getPageIdFromNotionUrl = (notionUrl: string): string => {
  if (!notionUrl) return '';
  
  // Handle URLs like https://www.notion.so/myworkspace/My-Page-123456789abcdef
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

/**
 * Fetch a Notion page using the unofficial client (for public pages)
 */
export const fetchNotionPage = async (pageId: string): Promise<ExtendedRecordMap> => {
  try {
    return await notionX.getPage(pageId);
  } catch (error) {
    console.error('Error fetching Notion page:', error);
    throw error;
  }
};

/**
 * Fetch a Notion page using the official client (for private pages)
 * Requires an API key and the page to be shared with the integration
 */
export const fetchNotionPageWithAuth = async (pageId: string) => {
  if (!notionClient) {
    throw new Error('Notion API key not configured');
  }

  try {
    const response = await notionClient.blocks.children.list({
      block_id: pageId,
    });
    
    return response.results;
  } catch (error) {
    console.error('Error fetching Notion page with auth:', error);
    throw error;
  }
};

export default {
  getPageIdFromNotionUrl,
  fetchNotionPage,
  fetchNotionPageWithAuth,
}; 