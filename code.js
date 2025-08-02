// Figma Plugin: AI Avatar Generator (Flat Style)

figma.showUI(__html__, { width: 320, height: 420 });

// Default message structure for prompt generation
function generatePrompt({ gender, expression, hair, outfitColor, bgColor }) {
  return `Flat-style illustrated avatar of a ${gender} character, ${expression} expression, soft facial features, clean pastel gradients, minimalistic vector design, round face with no outlines, smooth shading, simple ${hair} hairstyle and ${outfitColor} outfit, ${bgColor} background, flat vector style, high quality, 1:1 aspect ratio`;
}

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'generate-avatar') {
    try {
      figma.ui.postMessage({ type: 'status', message: 'Generating avatar...' });
      
      const prompt = generatePrompt(msg.options);
      
      // Call your AI generation API here (e.g. DALL·E, Replicate, etc.)
      // For now, using a placeholder. Replace with actual API call:
      // const response = await fetch('your-ai-api-endpoint', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ prompt })
      // });
      // const data = await response.json();
      // const avatarImageUrl = data.imageUrl;
      
      // Simulated response for demonstration:
      const avatarImageUrl = 'https://picsum.photos/512/512?random=' + Date.now(); // Placeholder URL
      
      figma.ui.postMessage({ type: 'status', message: 'Downloading image...' });
      
      // Download image and insert into Figma
      const imageBytes = await fetch(avatarImageUrl).then(res => res.arrayBuffer());
      const image = figma.createImage(new Uint8Array(imageBytes));
      const rect = figma.createRectangle();
      rect.resize(512, 512);
      rect.fills = [{ type: 'IMAGE', scaleMode: 'FILL', imageHash: image.hash }];
      
      // Name the layer based on the options
      rect.name = `AI Avatar - ${msg.options.gender} - ${msg.options.expression}`;
      
      figma.currentPage.appendChild(rect);
      figma.viewport.scrollAndZoomIntoView([rect]);
      
      figma.ui.postMessage({ type: 'success', message: 'Avatar generated successfully!' });
      
    } catch (error) {
      console.error('Error generating avatar:', error);
      figma.ui.postMessage({ type: 'error', message: 'Failed to generate avatar. Please try again.' });
    }
  }
  
  if (msg.type === 'close') {
    figma.closePlugin();
  }
}