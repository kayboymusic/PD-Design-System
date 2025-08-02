// Figma Plugin: AI Avatar Generator (Flat Style)

figma.showUI(__html__, { width: 320, height: 420 });

// Default message structure for prompt generation
function generatePrompt({ gender, expression, hair, outfitColor, bgColor }) {
  return `Flat-style illustrated avatar of a ${gender} character, ${expression} expression, soft facial features, clean pastel gradients, minimalistic vector design, round face with no outlines, smooth shading, simple ${hair} hairstyle and ${outfitColor} outfit, ${bgColor} background, flat vector style, high quality, 1:1 aspect ratio`;
}

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'generate-avatar') {
    const prompt = generatePrompt(msg.options);

    // Call your AI generation API here (e.g. DALL·E, Replicate, etc.)
    // Simulated response:
    const avatarImageUrl = 'https://your-ai-avatar-api.com/generated-avatar.png'; // Placeholder URL

    // Download image and insert into Figma
    try {
      const imageBytes = await fetch(avatarImageUrl).then(res => res.arrayBuffer());
      const image = figma.createImage(new Uint8Array(imageBytes));
      const rect = figma.createRectangle();
      rect.resize(512, 512);
      rect.fills = [{ type: 'IMAGE', scaleMode: 'FILL', imageHash: image.hash }];
      figma.currentPage.appendChild(rect);
      figma.viewport.scrollAndZoomIntoView([rect]);

      figma.closePlugin('Avatar generated and added to canvas.');
    } catch (error) {
      figma.closePlugin('Error generating avatar: ' + error.message);
    }
  }
}