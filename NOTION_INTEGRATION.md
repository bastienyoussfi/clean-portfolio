# Notion Integration for Portfolio Articles

This portfolio supports displaying articles directly from Notion, allowing you to write and format your content in Notion and have it automatically displayed in your portfolio with the same styling.

## Setup Options

There are two ways to integrate your Notion articles:

### Option 1: Simple Embed (No API Key Required)

This method works for public Notion pages:

1. Make your Notion page public by clicking "Share" and enabling "Share to web"
2. Copy the Notion page URL (e.g., `https://www.notion.so/myworkspace/My-Article-123456789abcdef`)
3. Add the URL to the `notionUrl` field in your article data in `src/data/articles.ts`:

```typescript
{
  id: 1,
  title: "My Article Title",
  description: "Article description",
  date: "2024",
  readTime: "5 min read",
  link: "/articles/1",
  notionUrl: "https://www.notion.so/myworkspace/My-Article-123456789abcdef"
}
```

### Option 2: Notion API Integration (For Private Pages)

For more control and to access private pages:

1. Create a Notion integration at https://www.notion.so/my-integrations
2. Get your API key from the integration settings
3. Create a `.env` file in your project root and add:

```
REACT_APP_NOTION_API_KEY=your_api_key_here
```

4. Share your Notion page with your integration (click "Share" and add your integration)
5. Add the Notion page URL to your article data as in Option 1

## Styling

The integration preserves most Notion styling, including:

- Headings
- Text formatting (bold, italic, etc.)
- Lists (bulleted and numbered)
- Code blocks
- Images
- Tables
- Callouts
- Quotes

You can customize the Notion styling by editing `src/styles/notion.css`.

## Troubleshooting

If your Notion content doesn't appear:

1. Make sure the page is public or shared with your integration
2. Check that the Notion URL is correct
3. Look for errors in the browser console
4. Try using the direct Notion URL as a fallback

## Dependencies

This integration uses:

- `@notionhq/client` - Official Notion API client
- `notion-client` - Unofficial client for public pages
- `react-notion-x` - React renderer for Notion content
- `notion-types` - TypeScript types for Notion data

## Additional Resources

- [Notion API Documentation](https://developers.notion.com/)
- [react-notion-x Documentation](https://github.com/NotionX/react-notion-x) 