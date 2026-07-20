import { GoogleGenAI } from '@google/genai';
async function test() {
  const ai = new GoogleGenAI({apiKey: "MY_GEMINI_API_KEY"});
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: [{"role": "user", "parts": [{"text": "Hello"}]}],
    });
    console.log(response.text);
  } catch (e) {
    console.error(e);
  }
}
test();
