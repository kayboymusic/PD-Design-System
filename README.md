# AI Avatar Generator - Figma Plugin

A powerful Figma plugin that generates flat-style illustrated avatars using AI. Create beautiful, customizable avatars with various options for gender, expression, hairstyle, outfit colors, and backgrounds.

## Features

- **Flat Style Design**: Generates modern, minimalistic vector-style avatars
- **Customizable Options**: Choose from various genders, expressions, hairstyles, and colors
- **AI-Powered**: Uses AI image generation for unique, high-quality results
- **Figma Integration**: Seamlessly adds generated avatars directly to your Figma canvas
- **User-Friendly Interface**: Clean, intuitive UI with real-time previews

## Installation

### Option 1: Install from Figma Community (Recommended)
1. Open Figma
2. Go to Community → Plugins
3. Search for "AI Avatar Generator"
4. Click "Install"

### Option 2: Manual Installation (Development)
1. Clone this repository
2. Open Figma
3. Go to Plugins → Development → Import plugin from manifest
4. Select the `manifest.json` file from this project

## Setup

### AI API Integration

This plugin requires an AI image generation API. You can use:

- **OpenAI DALL-E**
- **Replicate**
- **Stability AI**
- **Midjourney API**
- **Custom AI service**

#### Setting up with OpenAI DALL-E

1. Get an API key from [OpenAI](https://platform.openai.com/api-keys)
2. Update the `code.js` file, replace the placeholder API call:

```javascript
// Replace this section in code.js
const response = await fetch('https://api.openai.com/v1/images/generations', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_OPENAI_API_KEY'
  },
  body: JSON.stringify({
    prompt: prompt,
    n: 1,
    size: "512x512",
    response_format: "url"
  })
});

const data = await response.json();
const avatarImageUrl = data.data[0].url;
```

#### Setting up with Replicate

1. Get an API key from [Replicate](https://replicate.com)
2. Update the API call in `code.js`:

```javascript
const response = await fetch('https://api.replicate.com/v1/predictions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Token YOUR_REPLICATE_TOKEN'
  },
  body: JSON.stringify({
    version: "MODEL_VERSION_ID",
    input: { prompt: prompt }
  })
});
```

## Usage

1. **Open the Plugin**: In Figma, go to Plugins → AI Avatar Generator
2. **Customize Your Avatar**:
   - Choose gender (Person, Male, Female, Non-binary)
   - Select expression (Friendly, Happy, Calm, etc.)
   - Pick hairstyle (Short, Long, Curly, etc.)
   - Choose outfit color from the color palette
   - Select background color
3. **Generate**: Click "Generate Avatar"
4. **Wait**: The plugin will generate and add the avatar to your canvas

## Customization Options

### Gender Options
- Person (neutral)
- Male
- Female
- Non-binary

### Expressions
- Friendly
- Happy
- Calm
- Confident
- Cheerful
- Peaceful

### Hairstyles
- Short
- Long
- Curly
- Straight
- Wavy
- Pixie
- Bob
- Bald

### Colors
- 8 outfit color options
- 8 background color options
- Easy-to-use color picker interface

## Technical Details

### Files Structure
```
├── manifest.json          # Plugin configuration
├── code.js                # Main plugin logic
├── ui.html               # User interface
└── README.md             # Documentation
```

### Generated Prompt Template
The plugin generates prompts in this format:
```
Flat-style illustrated avatar of a [gender] character, [expression] expression, soft facial features, clean pastel gradients, minimalistic vector design, round face with no outlines, smooth shading, simple [hair] hairstyle and [outfit color] outfit, [background color] background, flat vector style, high quality, 1:1 aspect ratio
```

### API Requirements
- Network access enabled in manifest
- CORS-compatible image generation service
- Image URLs that return valid image data

## Development

### Local Development
1. Clone the repository
2. Make your changes
3. Test in Figma using "Import plugin from manifest"

### Building for Production
1. Ensure all API endpoints are configured
2. Test thoroughly with your chosen AI service
3. Update manifest version number
4. Submit to Figma Community

## Troubleshooting

### Common Issues

**"Failed to generate avatar"**
- Check your API key is valid
- Ensure the AI service is accessible
- Verify network permissions in manifest

**Images not loading**
- Check image URL format
- Ensure the AI service returns accessible URLs
- Verify CORS settings

**Plugin not installing**
- Check manifest.json syntax
- Ensure all required files are present
- Verify Figma version compatibility

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For support, please open an issue on GitHub or contact [your-email@example.com]

## Changelog

### v1.0.0
- Initial release
- Basic avatar generation
- Customizable options
- Figma canvas integration