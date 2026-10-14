import "dotenv/config";
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main() {
  try {
    const response = await ai.models.generateContent({
      model: process.env.GEMINI_MODEL,
      contents: "Photosynthesis ko 1 line mein Hinglish mein samjhao",
    });
    
  } catch (error) {
    console.error("Munshi ji se baat nahi hui:", error.message);
  }
}

main();