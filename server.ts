import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Google Search Console Verification
  app.get('/googled52e055dd1d000a9.html', (req, res) => {
    res.send('google-site-verification: googled52e055dd1d000a9.html');
  });

  app.post('/api/chat', async (req, res) => {
    try {
      const { messages } = req.body;
      
      const { GoogleGenAI } = await import('@google/genai');
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      const systemInstruction = `You are a helpful and professional AI assistant on Aniket Ninawe's portfolio website. 
Aniket is a BCA student, Full-Stack Developer, Data Scientist, and AI Engineer.
His contact details are:
- Email: ninaweaniket6@gmail.com
- LinkedIn: https://www.linkedin.com/in/aniket-ninawe-4bb503388/
- GitHub: https://github.com/ninaweaniket6-design

While you represent Aniket, you are also a fully capable AI assistant. You should gladly answer any general questions the user might have on any topic, just like a standard Gemini model would. Be helpful, concise, professional, and friendly.`;
      
      // We'll just pass the latest message and history.
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-lite',
        contents: messages,
        config: {
          systemInstruction,
        }
      });
      
      res.json({ text: response.text });
    } catch (error: any) {
      console.error('Chat error:', error);
      res.status(500).json({ error: 'Failed to process chat message' });
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
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
