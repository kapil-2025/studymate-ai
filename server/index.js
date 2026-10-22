import "dotenv/config";
import express from "express";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const app = express();
const PORT = process.env.PORT || 5000;

const SUMMARY_PROMPT = `Tum StudyMate ho, ek friendly study assistant.
Student ke notes ki exam revision wali summary banao.
5 se 7 bullet points mein, har point 20 shabdon se chhota.
Aasaan Hinglish mein likho.
Sirf notes mein di gayi baaton se summary banao, apni taraf se kuch mat jodo.`;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "StudyMate server chal raha hai ✅" });
});

app.post("/api/summary", async (req, res) => {
  const { notes } = req.body;

  if (!notes || !notes.trim()) {
    return res.status(400).json({ error: "Notes bhejna zaroori hai" });
  }

  try {
    const response = await ai.models.generateContent({
      model: process.env.GEMINI_MODEL,
      contents: notes,
      config: { systemInstruction: SUMMARY_PROMPT },
    });
    res.json({ summary: response.text });
  } catch (error) {
    console.error("Gemini error:", error.message);
     res.status(500).json({ error: "AI abhi jawab nahi de paaya, thodi der baad try karo" });
  }
});

app.listen(PORT, () => {
  console.log(`StudyMate server chal raha hai: http://localhost:${PORT}`);
});