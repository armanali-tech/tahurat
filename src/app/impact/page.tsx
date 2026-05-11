export default function ImpactPage() {
  return (
    <div className="py-14 space-y-10 animate-fade-in">
      <h1 className="text-3xl font-bold gradient-text">Impact &amp; Professional Learning</h1>

      <section className="glass-static p-8">
        <h2 className="text-2xl font-bold text-indigo-300 mb-4">Impact on Learners</h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          Evidence from assessments, student work, and learner feedback indicates:
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { metric: "Increased Participation", detail: "More students contributing to class discussions, particularly those who were previously disengaged." },
            { metric: "Improved Confidence", detail: "Students felt safer to make mistakes and discuss ideas collaboratively, becoming more willing to contribute." },
            { metric: "Greater Conceptual Understanding", detail: "Students demonstrated stronger ability to justify responses and connect science learning to real world contexts." },
            { metric: "Better Reasoning Skills", detail: "Improvement in explanation-based responses and emerging ability in analytical thinking across ability levels." },
          ].map((item) => (
            <div key={item.metric} className="glass p-5">
              <h3 className="font-semibold text-indigo-200">{item.metric}</h3>
              <p className="mt-2 text-sm text-slate-400">{item.detail}</p>
            </div>
          ))}
        </div>
        <p className="text-slate-300 leading-relaxed mt-4">
          Importantly, the inquiry also revealed that participation is deeply connected to classroom culture. When students felt safe to make mistakes and discuss ideas collaboratively, they became more willing to contribute. This suggests that inclusion is not simply about providing differentiated tasks, but about creating environments where all learners feel intellectually valued.
        </p>
      </section>

      <section className="glass-static p-8">
        <h2 className="text-2xl font-bold text-indigo-300 mb-4">Impact on Teaching Practice</h2>
        <div className="space-y-4 text-slate-300 leading-relaxed">
          <p>
            My questioning shifted from spontaneous questioning towards intentional questioning design. I now plan questions strategically and use them to guide thinking rather than only assess recall.
          </p>
          <p>
            The inquiry strengthened my understanding of formative assessment and responsive teaching. I became more aware of how questioning can either support or limit participation.
          </p>
          <p>
            I also became more aware of the importance of listening carefully to student responses rather than focusing only on correct answers. This inquiry helped me recognise that students&apos; misconceptions provide valuable insight into their thinking and can become opportunities for deeper discussion.
          </p>
        </div>
      </section>

      <section className="glass-static p-8">
        <h2 className="text-2xl font-bold text-indigo-300 mb-4">Leadership of Learning</h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          This inquiry reflects my development as a reflective practitioner and emerging Leader of Learning.
        </p>
        <div className="space-y-3">
          {[
            { action: "Shared questioning strategies with colleagues", impact: "Encouraged collaborative professional dialogue" },
            { action: "Reflected on lesson observations", impact: "Improved responsiveness during teaching" },
            { action: "Adapted questioning based on learner voice", impact: "Increased student participation and inclusion" },
          ].map((row, i) => (
            <div key={i} className="glass p-4 flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="text-sm font-medium text-indigo-200 sm:w-1/2">{row.action}</span>
              <span className="text-sm text-slate-400 sm:w-1/2">→ {row.impact}</span>
            </div>
          ))}
        </div>
        <p className="text-slate-300 leading-relaxed mt-4">
          Leadership became less about authority and more about creating environments where learners feel safe to think, question, and participate. Informal professional conversations about questioning strategies encouraged collaborative discussion around inclusion and student participation within the Science department.
        </p>
      </section>

      <section className="glass-static p-8 glow">
        <h2 className="text-2xl font-bold text-indigo-300 mb-4">Conclusion &amp; Next Steps</h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          This inquiry has demonstrated that differentiated questioning can significantly support both inclusion and thinking within the classroom. The most important learning is that questioning is not simply a teaching strategy, but a way of shaping how students think, participate, and learn.
        </p>
        <p className="text-slate-300 leading-relaxed mb-4">
          I no longer ask questions only to check understanding. I now ask questions to create thinking, encourage dialogue, and support inclusion.
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-slate-300">
          <li>Continue refining questioning strategies to support student voice and independent thinking</li>
          <li>Extend the differentiated questioning framework to other science units and across subjects</li>
          <li>Share the questioning framework with colleagues as a professional development resource</li>
          <li>Explore how student self-assessment can complement differentiated questioning</li>
          <li>Investigate the role of student-generated questions in developing learner agency</li>
        </ol>
      </section>
    </div>
  );
}
