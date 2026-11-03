# 📚 StudyMate AI 🚧

**Messy notes in. Exam-ready out.**

An AI study assistant that turns a student's raw class notes into short exam-revision summaries. Built with React and Node.js on top of the **Google Gemini API**.

> 🚧 **Work in progress.** The summary API works. The React UI is designed and is being connected to the API next.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Gemini API](https://img.shields.io/badge/Gemini_API-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white)

---

## ✨ What works now

- **`POST /api/summary`**: send your notes and get back a 5–7 point revision summary
- Summaries are written in simple **Hinglish**, with each point under 20 words
- The prompt tells the model to use **only what is in the notes**, so it doesn't add facts of its own
- Clear errors for empty notes (`400`) and when the AI call fails (`500`)
- The API key stays on the server in an environment variable, never in the frontend

## 🛠️ Tech Stack

| Layer | Tech |
|---|---|
| Frontend | React (Vite), Tailwind CSS |
| Backend | Node.js, Express |
| AI | Google Gemini API (`@google/genai`) |

## 🔌 API

| Method | Endpoint | Body | Response |
|---|---|---|---|
| GET | `/` | — | Health check |
| POST | `/api/summary` | `{ "notes": "..." }` | `{ "summary": "..." }` |

Example:

```bash
curl -X POST http://localhost:5000/api/summary \
  -H "Content-Type: application/json" \
  -d '{"notes": "Photosynthesis is the process by which green plants make food using sunlight, water and carbon dioxide..."}'
```

## 🚀 Run Locally

```bash
git clone https://github.com/kapil-2025/studymate-ai.git
cd studymate-ai
```

**Server**: create `server/.env`:

```
GEMINI_API_KEY=your_api_key_from_google_ai_studio
GEMINI_MODEL=a_gemini_model_name
PORT=5000
```

```bash
cd server
npm install
npm run dev
```

**Client** (in a new terminal):

```bash
cd client
npm install
npm run dev
```

## 🗺️ Roadmap

- [x] Summary API with the Gemini API
- [x] UI design: notes input and summary panel
- [ ] Connect the UI to the API
- [ ] Flashcards generated from notes
- [ ] Quiz (MCQs) generated from notes
- [ ] Save notes and history (MongoDB + login)
- [ ] Deploy (Vercel + Render)

## 👤 Author

**Kapil Gupta** — [GitHub](https://github.com/kapil-2025)
