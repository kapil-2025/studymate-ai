function App() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6">
      <nav className="flex items-center justify-between border-b border-line py-4">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-gold font-serif text-night">S</span>
          <span className="hidden font-serif text-lg font-medium sm:inline">StudyMate</span>
        </div>
        <div className="flex rounded-full border border-line bg-panel p-1">
          <button className="rounded-full bg-cream px-3 py-1.5 text-sm font-medium text-night">Summary</button>
          <button className="rounded-full px-3 py-1.5 text-sm text-muted transition-colors hover:text-cream">Flashcards</button>
          <button className="rounded-full px-3 py-1.5 text-sm text-muted transition-colors hover:text-cream">Quiz</button>
        </div>
        <div className="grid h-8 w-8 place-items-center rounded-full border border-line bg-panel text-xs text-muted">KG</div>
      </nav>
      <section className="py-14 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 px-3 py-1 text-xs text-gold">
          <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
          AI study assistant
        </span>
        <h1 className="mt-5 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
          Messy notes in. <em className="text-gold">Exam-ready</em> out.
        </h1>
        <p className="mt-3 text-muted">Key points, key terms and an exam tip, in seconds.</p>
      </section>
      <section className="grid gap-4 pb-16 md:grid-cols-2">
        <div className="flex flex-col rounded-2xl border border-line bg-panel p-5 transition-colors focus-within:border-gold/40">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-medium">Your notes</span>
            <span className="text-xs text-muted">0 words</span>
          </div>
          <textarea className="min-h-56 flex-1 resize-none bg-transparent text-sm leading-relaxed outline-none placeholder:text-muted/60"
            placeholder="Apne notes yahan paste karo..." />
          <button className="mt-4 self-end rounded-xl bg-gold px-5 py-2.5 text-sm font-medium text-night transition hover:brightness-110 active:scale-95">Summarize</button>
        </div>
        <div className="rounded-2xl border border-line bg-panel p-5">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-serif text-lg">Summary</h2>
            <span className="text-xs text-muted">2.4s</span>
          </div>
          <p className="mb-3 text-xs tracking-wide text-muted">Key points</p>
          <ol className="space-y-3">
            <li className="flex gap-3 text-sm leading-relaxed">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold/15 text-xs text-gold">1</span>
              Hare paudhe sunlight se apna khana banate hain
            </li>
            <li className="flex gap-3 text-sm leading-relaxed">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold/15 text-xs text-gold">2</span>
              Ye process chloroplast mein hota hai
            </li>
            <li className="flex gap-3 text-sm leading-relaxed">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold/15 text-xs text-gold">3</span>
              CO2 + paani se glucose banta hai, oxygen nikalti hai
            </li>
          </ol>
        </div>
      </section>
    </main>
  )
}

export default App