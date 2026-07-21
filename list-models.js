import { GoogleGenAI } from '@google/genai';
async function test() {
  const ai = new GoogleGenAI();
  try {
    const models = await ai.models.list();
    for await (const m of models) {
      console.log(m.name);
    }
  } catch (e) {
    console.error(e);
  }
}
test();
