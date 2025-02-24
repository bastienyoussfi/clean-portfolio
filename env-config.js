// This script injects environment variables into the window object
// It should be included in your HTML before your app bundle

window.env = {
  // You can manually set environment variables here for development
  // In production, these would be replaced by a build script or server
  REACT_APP_NOTION_API_KEY: '',
}; 