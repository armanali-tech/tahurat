import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 text-center animate-fade-in">
        <div className="px-2">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl gradient-text">
            Tahurat Jahan
          </h1>
          <p className="mt-4 text-lg text-slate-400">
            Grade 6 Science Teacher (ICSE) &amp; Homeroom Teacher · Mumbai
          </p>
          <div className="mt-2 flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-indigo-400 pulse-dot" />
            <span className="text-sm text-slate-500">Professional Inquiry Portfolio</span>
          </div>
        </div>
      </section>

      <div className="pb-16 space-y-12 animate-fade-in-delay">
        {/* Teaching Philosophy */}
        <section className="glass-static p-8">
          <h2 className="text-2xl font-bold text-indigo-300 mb-4">Teaching Philosophy</h2>
          <p className="text-slate-300 leading-relaxed">
            My teaching philosophy is grounded in the belief that learning should be meaningful, inclusive, and connected to real life experiences. I aim to create a classroom where students feel safe to express ideas, ask questions, make mistakes, and participate actively in the learning process. Over time, I have realised that students engage more deeply when they are encouraged to think independently rather than simply recall information from textbooks. This belief has shaped my approach towards teaching science as an inquiry driven and discussion oriented subject.
          </p>
        </section>

        {/* Inquiry Focus */}
        <section className="glass-static p-8 glow">
          <h2 className="text-2xl font-bold text-indigo-300 mb-4">Inquiry Focus</h2>
          <p className="text-slate-300 leading-relaxed">
            This inquiry focuses on <strong className="text-indigo-200">differentiated questioning</strong> as a strategy to support inclusion and deeper thinking in my Grade 6 Science classroom. Through structured and intentional questioning, I explored how all learners can participate meaningfully, regardless of their confidence level or language ability. The inquiry also investigates how questioning can move students beyond simple recall towards explanation, reasoning, and analysis.
          </p>
        </section>

        {/* Connection to wider priorities */}
        <section className="glass-static p-8">
          <h2 className="text-2xl font-bold text-indigo-300 mb-4">Wider Educational Context</h2>
          <p className="text-slate-300 leading-relaxed">
            This inquiry is connected to wider educational priorities. The Programme for International Student Assessment highlights the importance of critical thinking, reasoning, and problem solving in modern education (OECD, 2019). Similarly, UNESCO (2020) emphasises the need for inclusive and equitable classrooms where all learners are able to engage meaningfully. These ideas reinforced my understanding that questioning is not simply a classroom routine, but a powerful pedagogical tool that shapes participation, inclusion, and thinking.
          </p>
        </section>

        {/* Navigation Cards */}
        <section>
          <h2 className="text-2xl font-bold text-indigo-300 mb-6">Explore the Portfolio</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { href: "/context", title: "Context of Practice", desc: "Classroom and institutional context of the inquiry" },
              { href: "/inquiry", title: "Inquiry Focus", desc: "The guiding question, rationale, and theoretical framework" },
              { href: "/evidence", title: "Evidence Portfolio", desc: "Curated artefacts from professional practice" },
              { href: "/journey", title: "Reflective Journey", desc: "How my thinking evolved during the inquiry" },
              { href: "/impact", title: "Impact & Learning", desc: "What changed and what comes next" },
              { href: "/references", title: "References", desc: "Full reference list in BCU Harvard style" },
              { href: "/ethics", title: "Ethics & AI Declaration", desc: "Ethical use of evidence and AI transparency" },
            ].map((card) => (
              <Link key={card.href} href={card.href} className="glass p-5 block group">
                <h3 className="font-semibold text-indigo-200 group-hover:text-indigo-100 transition">
                  {card.title}
                </h3>
                <p className="mt-1 text-sm text-slate-400">{card.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
