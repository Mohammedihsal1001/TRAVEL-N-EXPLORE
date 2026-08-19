import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Lazy Gemini client helper
  let aiClient: GoogleGenAI | null = null;
  function getAI(): GoogleGenAI | null {
    const key = process.env.GEMINI_API_KEY;
    if (!key) return null;
    if (!aiClient) {
      aiClient = new GoogleGenAI({ apiKey: key });
    }
    return aiClient;
  }

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
  });

  // AI Trip Curator endpoint
  app.post('/api/curate-trip', async (req, res) => {
    try {
      const { prompt, stateContext } = req.body;
      const ai = getAI();

      if (!ai) {
        // Safe fallback if API key is not configured yet
        return res.json({
          reply: `Here are curated insights for your journey through India! Each region offers unique heritage crafts—from Rajasthan's Bandhani & Sanganer block prints to Tamil Nadu's Kanchipuram silks. We recommend booking IRCTC Vande Bharat express trains 60 days in advance for a seamless cultural voyage.`,
          suggestedStateIds: ['rajasthan', 'gujarat', 'tamil-nadu', 'kerala'],
        });
      }

      const systemInstruction = `You are the Incredible India Cultural Concierge. You are an expert on India's 29 states, authentic handloom weaves, GI-certified artisan villages, UNESCO heritage monuments, regional cuisine, IRCTC railway routes (Vande Bharat, Rajdhani), and budget travel planning. Keep responses warm, respectful, concise (under 180 words), formatted with clean bullet points and bold highlights.`;

      const userContent = stateContext
        ? `User context: exploring ${stateContext}. Question: ${prompt}`
        : `User inquiry: ${prompt}`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          { role: 'user', parts: [{ text: `${systemInstruction}\n\n${userContent}` }] }
        ],
      });

      const replyText = response.text || 'Discover authentic India through certified GI artisan cooperatives and scenic railway routes.';
      
      // Determine relevant state IDs from response
      const matchedIds: string[] = [];
      const lower = replyText.toLowerCase();
      if (lower.includes('rajasthan')) matchedIds.push('rajasthan');
      if (lower.includes('gujarat')) matchedIds.push('gujarat');
      if (lower.includes('tamil nadu')) matchedIds.push('tamil-nadu');
      if (lower.includes('kerala')) matchedIds.push('kerala');
      if (lower.includes('uttar pradesh') || lower.includes('varanasi')) matchedIds.push('uttar-pradesh');
      if (lower.includes('kashmir')) matchedIds.push('jammu-kashmir');
      if (lower.includes('assam')) matchedIds.push('assam');
      if (lower.includes('karnataka')) matchedIds.push('karnataka');

      res.json({
        reply: replyText,
        suggestedStateIds: matchedIds.slice(0, 4),
      });
    } catch (error: any) {
      console.error('Error in curate-trip:', error);
      res.status(500).json({
        reply: 'Explore certified government handloom emporiums and cultural railway corridors for the most authentic experience.',
        suggestedStateIds: ['rajasthan', 'tamil-nadu'],
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Incredible India Explorer server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
