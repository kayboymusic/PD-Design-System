# AI Avatar Generator - Figma Plugin

A beautiful Figma plugin that generates flat-style AI avatars with customizable options.

## Features

- 🎨 Generate flat-style illustrated avatars
- 👤 Customizable gender, expression, and hair styles
- 🎨 Color picker for outfit and background
- 📱 Beautiful, modern UI interface
- ⚡ Real-time prompt preview
- 🖼️ Automatically adds generated avatars to your Figma canvas

## Installation

### Method 1: Install from Plugin Files

1. **Download the plugin files**
   - Ensure you have `manifest.json`, `code.js`, and `ui.html` in a folder

2. **Open Figma Desktop App**
   - Go to `Plugins` → `Development` → `Import plugin from manifest...`
   - Select the `manifest.json` file from your plugin folder
   - The plugin will be added to your development plugins

3. **Run the plugin**
   - Go to `Plugins` → `Development` → `AI Avatar Generator`
   - The plugin interface will open

### Method 2: Development Setup

1. **Clone or download this repository**
2. **Open Figma Desktop**
3. **Import the plugin**:
   ```
   Plugins → Development → Import plugin from manifest...
   ```
4. **Select the `manifest.json` file**
5. **The plugin is now available in your Development plugins**

## Usage

1. **Open the plugin** from `Plugins` → `Development` → `AI Avatar Generator`

2. **Configure your avatar**:
   - Choose gender (Male, Female, Non-binary)
   - Select expression (Happy, Neutral, Serious, etc.)
   - Pick hair style (Short, Long, Curly, etc.)
   - Choose outfit color using the color picker
   - Set background color

3. **Preview the AI prompt** in the preview section

4. **Click "Generate Avatar"** to create and add the avatar to your canvas

## Customization

### Adding AI Integration

The plugin currently uses a placeholder URL for demonstration. To integrate with a real AI service:

1. **Replace the placeholder URL** in `code.js`:
   ```javascript
   // Replace this line:
   const avatarImageUrl = 'https://your-ai-avatar-api.com/generated-avatar.png';
   
   // With your actual API call:
   const response = await fetch('https://api.openai.com/v1/images/generations', {
     method: 'POST',
     headers: {
       'Authorization': 'Bearer YOUR_API_KEY',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       prompt: prompt,
       n: 1,
       size: "512x512"
     })
   });
   const data = await response.json();
   const avatarImageUrl = data.data[0].url;
   ```

2. **Update the manifest.json** to include your API domain in `networkAccess.allowedDomains`

### Supported AI Services

- **OpenAI DALL-E 2/3**
- **Replicate**
- **Midjourney API**
- **Stability AI**
- **Any API that accepts text prompts and returns image URLs**

## File Structure

```
ai-avatar-generator/
├── manifest.json     # Plugin configuration
├── code.js          # Main plugin logic
├── ui.html          # User interface
└── README.md        # This file
```

## Development

### Making Changes

1. **Edit the files** as needed
2. **Reload the plugin** in Figma: `Plugins` → `Development` → `Reload plugin`
3. **Test your changes**

### Plugin API

The plugin uses Figma's Plugin API:
- `figma.showUI()` - Display the interface
- `figma.ui.onmessage` - Handle messages from UI
- `figma.createImage()` - Create image from bytes
- `figma.createRectangle()` - Create shape for avatar

## Troubleshooting

### Common Issues

1. **Plugin doesn't load**
   - Make sure all files are in the same directory
   - Check that `manifest.json` is valid JSON

2. **Network errors**
   - Ensure your AI API domain is in `networkAccess.allowedDomains`
   - Check API keys and endpoints

3. **Image doesn't appear**
   - Verify the image URL is accessible
   - Check that the image format is supported (PNG, JPG, etc.)

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the [MIT License](LICENSE).