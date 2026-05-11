export default function JourneyPage() {
  const entries = [
    {
      phase: "Beginning: Recognising the Pattern",
      items: [
        "When I began reflecting on my classroom practice, I noticed a recurring pattern during questioning sessions. Although I regularly asked questions throughout lessons, the same small group of confident students consistently responded, while many others remained silent.",
        "Initially, I interpreted silence as lack of understanding or preparation. However, as I reflected more critically, I began to question whether my own questioning practices were unintentionally limiting participation and thinking.",
        "I realised that questioning was not merely about checking answers, but about deciding whose thinking becomes visible in the classroom.",
      ],
    },
    {
      phase: "Shifting Understanding: Questioning as Pedagogy",
      items: [
        "Questioning in my classroom was largely spontaneous and unstructured. I often asked questions instinctively without fully considering their purpose or impact on learning.",
        "Through this inquiry, I began to understand differentiated questioning as a deliberate pedagogical strategy that influences both participation and thinking.",
        "I noticed that when I waited longer before expecting answers, more students contributed. Earlier, I often answered my own questions too quickly.",
      ],
    },
    {
      phase: "Key Classroom Moment: The Water Cycle Lesson",
      items: [
        "One of the most significant moments occurred during the water cycle lesson when students generated responses such as transpiration and respiration after being given time to think and discuss.",
        "This moment challenged my earlier assumptions about student ability and participation. I realised that many students were capable of deeper thinking when provided with appropriate support and opportunities.",
        "During this lesson, technology failed and planned slides could not be displayed. Instead of stopping the lesson, questioning and pair discussion became the primary teaching strategy. This reinforced that effective teaching depends less on resources and more on the teacher's ability to facilitate thinking and dialogue.",
      ],
    },
    {
      phase: "Insight: Language and Confidence",
      items: [
        "I realised that some students struggled not because they did not understand the concept, but because they lacked confidence in expressing scientific vocabulary.",
        "This shifted my understanding of inclusion and highlighted the importance of scaffolding. Silence in the classroom cannot always be interpreted as lack of understanding.",
        "The Yamuna River discussion reminded me that students are capable of deeper thinking when given meaningful opportunities to analyse and discuss.",
      ],
    },
    {
      phase: "Transformation: From Deliverer to Facilitator",
      items: [
        "This inquiry changed how I view my role as a teacher. I moved from seeing myself primarily as someone who delivers information towards someone who facilitates thinking and dialogue.",
        "This aligns with Schön's concept of reflective practice, where teaching develops through ongoing reflection and adaptation (Schön, 1983).",
        "I became more comfortable with uncertainty within the classroom. Earlier, I often felt pressure to quickly guide students towards correct answers. However, I began to value moments of confusion and discussion as important parts of learning.",
        "Students often developed stronger understanding when they explored misconceptions together rather than immediately receiving teacher explanations.",
      ],
    },
  ];

  return (
    <div className="py-14 space-y-10 animate-fade-in">
      <h1 className="text-3xl font-bold gradient-text">Reflective Learning Journey</h1>
      <p className="text-slate-400">
        This inquiry has been a process of continuous reflection and professional growth. Initially, questioning functioned mainly as a way to check understanding. Over time, it evolved into a strategy for promoting inclusion, discussion, and thinking.
      </p>

      <div className="timeline-line space-y-8 pl-10">
        {entries.map((phase, idx) => (
          <div key={idx} className="relative">
            <div className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-900 pulse-dot" />
            <h2 className="text-xl font-bold text-indigo-300 mb-4">{phase.phase}</h2>
            <div className="space-y-3">
              {phase.items.map((item, i) => (
                <div key={i} className="glass p-4">
                  <p className="text-sm text-slate-300 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Reflective Journal */}
      <section className="glass-static p-8">
        <h2 className="text-2xl font-bold text-indigo-300 mb-4">Reflective Journal Entries</h2>
        <div className="space-y-4">
          <div className="glass p-4">
            <p className="text-sm text-slate-300 italic">&ldquo;I noticed that when I waited longer before expecting answers, more students contributed. Earlier, I often answered my own questions too quickly.&rdquo;</p>
          </div>
          <div className="glass p-4">
            <p className="text-sm text-slate-300 italic">&ldquo;I realised that some students struggled not because they did not understand the concept, but because they lacked confidence in expressing scientific vocabulary.&rdquo;</p>
          </div>
          <div className="glass p-4">
            <p className="text-sm text-slate-300 italic">&ldquo;The Yamuna River discussion reminded me that students are capable of deeper thinking when given meaningful opportunities to analyse and discuss.&rdquo;</p>
          </div>
        </div>
      </section>
    </div>
  );
}
