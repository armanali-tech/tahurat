export default function EthicsPage() {
  return (
    <div className="py-14 space-y-10 animate-fade-in">
      <h1 className="text-3xl font-bold gradient-text">Ethics &amp; AI Declaration</h1>

      <section className="glass-static p-8">
        <h2 className="text-2xl font-bold text-indigo-300 mb-4">Ethical Use of Evidence</h2>
        <ul className="list-disc pl-6 space-y-3 text-slate-300 leading-relaxed">
          <li>All student work included in this portfolio has been <strong className="text-indigo-200">anonymised</strong> to protect learner identity and confidentiality.</li>
          <li>Permissions were obtained where necessary, and all evidence has been used ethically and responsibly.</li>
          <li>No personally identifiable information (names, photographs, or identifying details) has been included.</li>
          <li>All evidence has been ethically sourced in accordance with the institution&apos;s research ethics guidelines.</li>
          <li>The inquiry was conducted within the normal scope of professional teaching practice and did not involve any experimental interventions beyond standard pedagogical approaches.</li>
        </ul>
      </section>

      <section className="glass-static p-8 glow">
        <h2 className="text-2xl font-bold text-indigo-300 mb-4">AI Declaration</h2>
        <p className="text-slate-300 leading-relaxed mb-6">
          In accordance with BCU&apos;s guidelines on the use of Artificial Intelligence in assessment, I declare the following:
        </p>

        <div className="space-y-6">
          <div className="glass p-5">
            <h3 className="font-semibold text-indigo-200">Why AI was used</h3>
            <p className="mt-2 text-sm text-slate-400">
              AI tools were used to support language refinement, organisation, and editing during the preparation of this portfolio. AI also assisted with the technical development of this portfolio website, including code generation and layout structuring.
            </p>
          </div>

          <div className="glass p-5">
            <h3 className="font-semibold text-indigo-200">What it was used for</h3>
            <p className="mt-2 text-sm text-slate-400">
              AI assisted with website development (code generation), structuring the portfolio layout, and refining the presentation of content. All substantive academic content, reflections, and analysis are entirely my own work.
            </p>
          </div>

          <div className="glass p-5">
            <h3 className="font-semibold text-indigo-200">Which AI was used</h3>
            <p className="mt-2 text-sm text-slate-400">
              Kiro AI (Claude-based assistant) was used for website development support.
            </p>
          </div>

          <div className="glass p-5">
            <h3 className="font-semibold text-indigo-200">Generated content in this submission</h3>
            <p className="mt-2 text-sm text-slate-400">
              The website code and structural layout were generated with AI assistance. All written content — including reflections, annotations, analysis, and academic writing — represents my own original work and intellectual contribution.
            </p>
          </div>
        </div>
      </section>

      <section className="glass-static p-8">
        <h2 className="text-2xl font-bold text-indigo-300 mb-4">Confirmation of Intellectual Ownership</h2>
        <p className="text-slate-300 leading-relaxed">
          I confirm that this work is my own and that I have intellectual ownership of all content presented in this portfolio. The inquiry design, evidence collection, reflective analysis, and academic writing are entirely my own. However, all reflections, analysis, classroom evidence, and professional interpretations are based on my own teaching experiences and inquiry process. Where AI tools were used, their role was limited to technical and structural support as described above.
        </p>
      </section>
    </div>
  );
}
