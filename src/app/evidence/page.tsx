"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const artefacts = [
  {
    id: 1,
    category: "Lesson Plans",
    title: "Lesson Plan 1 – Water Sources",
    description:
      "Develops understanding of different water sources through collaborative inquiry and structured questioning.",
    docLink:
      "https://docs.google.com/document/d/1kSpeKbu405sHF9_eEo9J9PBQLAx6wDHd/edit?usp=sharing&ouid=106005122532332870820&rtpof=true&sd=true",
    images: [] as string[],
    annotation:
      "This lesson plan focuses on developing students' understanding of different water sources through collaborative inquiry and structured questioning. It demonstrates how differentiated questioning was used to engage all learners in exploring a familiar yet conceptually important topic. The lesson begins with a real-life hook to activate prior knowledge, followed by group tasks where students investigate rainwater, surface water, groundwater, and glaciers. The use of guided questions supported learners in moving from identifying sources to analysing their usability and importance.",
    details: [
      {
        label: "Starter activity",
        note: "Real-life images of water scarcity activated prior knowledge and encouraged emotional connection. Students related the discussion to water shortages in Mumbai.",
      },
      {
        label: "Tiered questioning",
        note: "Questions moved from recall towards reasoning and analysis.",
      },
      {
        label: "Think-Pair-Share",
        note: "Increased participation from quieter learners who hesitated during whole class discussion.",
      },
    ],
  },
  {
    id: 2,
    category: "Lesson Plans",
    title: "Lesson Plan 2 – Water Cycle",
    description:
      "Explores stages of the water cycle using visual representation, discussion, and higher-order questioning.",
    docLink:
      "https://docs.google.com/document/d/1GCwmhat8HFIor3QwMDhYHDs5IzUtpFIg/edit?usp=sharing&ouid=106005122532332870820&rtpof=true&sd=true",
    images: [] as string[],
    annotation:
      "This lesson plan explores the stages of the water cycle using visual representation, discussion, and higher-order questioning. It reflects the shift from teacher-led explanation to student-centred inquiry. Through observation of diagrams and structured prompts, students were encouraged to explain processes such as evaporation, condensation, precipitation, and collection. A key feature was the use of questioning to extend thinking beyond basic understanding, particularly when students were asked to identify other ways water vapour enters the atmosphere. This led to unexpected responses such as transpiration and respiration, demonstrating deeper conceptual thinking.",
    details: [],
  },
  {
    id: 3,
    category: "Lesson Plans",
    title: "Lesson Plan 3 – Properties of Water",
    description:
      "Focuses on properties of water through demonstration and hands-on collaborative activities.",
    docLink:
      "https://docs.google.com/document/d/1goCFoPb-p_f33QnpzwgsCTEuRsd4CyR2/edit?usp=sharing&ouid=106005122532332870820&rtpof=true&sd=true",
    images: [] as string[],
    annotation:
      "This lesson plan focuses on the properties of water through demonstration and hands-on collaborative activities. It highlights the effectiveness of experiential learning combined with differentiated questioning. Students engaged in practical tasks such as dissolving different substances to explore the concept of water as a universal solvent. The lesson also introduced complex ideas like anomalous behaviour through guided questioning and real-life connections. This approach enabled students to move from observation to explanation and application.",
    details: [],
  },
  {
    id: 4,
    category: "Assessment",
    title: "Assessment Data – CFU Paper & Worksheets",
    description:
      "Worksheets, classwork, and Check for Understanding paper designed to reflect different levels of questioning.",
    images: [
      "/image/CFU-assessment-data-1.png",
      "/image/CFU-assessment-data-2.png",
      "/image/CFU-assessment-data-3.png",
      "/image/CFU-assessment-data-4.png",
      "/image/CFU-groundwater-water-cycle-assessment-data-5.jpg",
      "/image/CFU-groundwater-water-source-assessment-data-6.jpg",
    ],
    annotation:
      "Assessment evidence included worksheets, classwork, and a CFU (Check for Understanding) paper. These assessments were designed to reflect different levels of questioning. Analysis of student responses showed: strong performance in recall-based questions, improvement in explanation-based responses, and emerging ability in analytical thinking. This indicates that differentiated questioning supported learning progression, although further scaffolding is needed for higher-order responses.",
    details: [],
  },
  {
    id: 5,
    category: "Student Work",
    title: "Yamuna River Case Study Poster",
    description:
      "Students identified sources of pollution, analysed impacts, and evaluated why solutions have failed.",
    images: [
      "/image/annotated-student-work-yamuna-river-case-study-poster-1.jpg",
      "/image/annotated-student-work-yamuna-river-case-study-poster-2.jpeg",
      "/image/annotated-student-work-yamuna-river-case-study-poster-3.jpeg",
    ],
    annotation:
      "The Yamuna River case study poster stands out as a strong example of higher-order learning. Students identified sources of pollution, analysed impacts, and evaluated why solutions have failed. This reflects movement towards analysis and creation. Students challenged each other's ideas, negotiated meaning, and justified opinions using evidence gathered during research discussions. This demonstrated that questioning does not only come from the teacher, but can also emerge through peer dialogue.",
    details: [
      {
        label: "Evidence observed",
        note: "Students identified multiple pollution causes — demonstrates movement beyond recall towards analysis.",
      },
      {
        label: "Application",
        note: "Students connected pollution to health effects — shows application of scientific understanding.",
      },
      {
        label: "Creativity",
        note: "Group included awareness slogans — reflects creativity and real world connection.",
      },
    ],
  },
  {
    id: 6,
    category: "Student Work",
    title: "Mind Maps & Visual Representations",
    description:
      "Student mind maps illustrating functions of water in human body systems and plants.",
    images: [
      "/image/functions of water in human body systems and plants-1.jpeg",
      "/image/functions of water in human body systems and plants-2.jpeg",
      "/image/understanding of the role of water in plants and animals.jpeg",
      "/image/water scarcity and the need for conservation.jpeg",
      "/image/concepts related to global water distribution and causes of water pollution.jpeg",
      "/image/student-work-water-question-answers.jpeg",
      "/image/student-work-water-boiling-point-freezing-point.jpeg",
      "/image/WhatsApp Image 2026-05-11 at 12.47.16.jpeg",
    ],
    annotation:
      "Mind maps illustrate students' understanding of the functions of water in human body systems and plants, including digestion, temperature regulation, nutrient transport, and photosynthesis. The use of visual representation shows the student's ability to organise and connect ideas meaningfully. Venn diagrams represent students' understanding of the role of water in plants and animals, highlighting both similarities and differences, demonstrating higher-order thinking beyond recall.",
    details: [],
  },
  {
    id: 7,
    category: "Observation",
    title: "Observation Note 1 – Responsive Teaching",
    description:
      "During the water cycle lesson, technology failed. Pair discussion became the alternative strategy.",
    images: ["/image/observation-note.png"],
    annotation:
      "During the water cycle lesson, a planned slide could not be projected due to a technical issue. Instead of stopping the lesson, pair discussion was used as an alternative strategy. Students discussed different ways water vapour enters the atmosphere and generated responses such as transpiration and respiration. This demonstrates responsive teaching and the ability to maintain cognitive challenge despite disruptions. It highlights how questioning can support meaningful participation even in unplanned situations.",
    details: [],
  },
  {
    id: 8,
    category: "Observation",
    title: "Observation Note 2 – Think-Pair-Share Impact",
    description:
      "Students who were usually hesitant participated more actively during think-pair-share discussions.",
    images: [] as string[],
    annotation:
      "Observation feedback noted that students who were usually hesitant participated more actively during think-pair-share discussions. The use of wait time and peer interaction reduced anxiety and encouraged wider participation. This evidence reinforces the importance of questioning strategies that create supportive learning environments.",
    details: [],
  },
  {
    id: 9,
    category: "Learner Voice",
    title: "Learner Reflections",
    description:
      "Student feedback providing insight into learner experiences during the inquiry.",
    images: [] as string[],
    annotation:
      "Student feedback provided valuable insight into learner experiences during the inquiry.",
    details: [
      {
        label: "Reflection 1",
        note: '"One thing I liked was that we got time to discuss before answering. It made me feel more confident." — Suggests structured discussion supported confidence and participation.',
      },
      {
        label: "Reflection 2",
        note: '"I understood the water cycle better when we explained it ourselves instead of only listening." — Highlights the importance of dialogue and active engagement.',
      },
      {
        label: "Reflection 3",
        note: '"The pollution poster activity helped me understand how science connects to real life." — Demonstrates connection of scientific concepts to environmental contexts.',
      },
    ],
  },
  {
    id: 10,
    category: "Teaching Resources",
    title: "Presentations & Guided Questions",
    description:
      "Teaching resources designed to scaffold learning and support differentiated questioning.",
    docLink:
      "https://docs.google.com/presentation/d/15aeNsObS70c1VVvJ3-9_UTd0j0MxsOGs_sW6sIyFrGI/edit?usp=sharing",
    images: [
      "/image/Teaching resources included presentations-1.png",
      "/image/Teaching resources included presentations-2.jpeg",
    ],
    annotation:
      "Teaching resources included presentations, guided questions, and structured worksheets. These resources were designed to scaffold learning and support differentiated questioning throughout the Water Unit.",
    details: [],
  },
];

const categories = [
  "All",
  ...Array.from(new Set(artefacts.map((a) => a.category))),
];

export default function EvidencePage() {
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState<number | null>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);

  const sectionRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleTabClick = (category: string) => {
    setFilter(category);
    if (category === "All") {
      setExpanded(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const firstMatch = artefacts.find((a) => a.category === category);
    if (firstMatch) {
      setExpanded(firstMatch.id);
      requestAnimationFrame(() => {
        sectionRefs.current[firstMatch.id]?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  };

  const handleSectionClick = (id: number) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  const filtered =
    filter === "All"
      ? artefacts
      : artefacts.filter((a) => a.category === filter);

  return (
    <div className="relative py-14 space-y-8 animate-fade-in">
      <h1 className="text-3xl font-bold gradient-text">
        Portfolio of Professional Evidence
      </h1>
      <p className="text-slate-400">
        This section presents curated artefacts from professional practice. Each
        artefact includes an annotation explaining what it shows, why it was
        selected, how it connects to the inquiry theme, and what insight it
        provides.
      </p>

      {/* Rubric */}
      <section className="glass-static p-6 overflow-x-auto">
        <h2 className="text-lg font-bold text-indigo-300 mb-3">
          Participation, Collaboration &amp; Thinking Rubric
        </h2>
        <table className="w-full text-sm text-slate-300">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-2 pr-4 text-indigo-200">Criteria</th>
              <th className="text-left py-2 pr-4">Emerging</th>
              <th className="text-left py-2 pr-4">Developing</th>
              <th className="text-left py-2 pr-4">Secure</th>
              <th className="text-left py-2">Advanced</th>
            </tr>
          </thead>
          <tbody className="text-xs">
            <tr className="border-b border-white/5">
              <td className="py-2 pr-4 font-medium">Participation</td>
              <td className="py-2 pr-4">Rarely contributes</td>
              <td className="py-2 pr-4">Responds when prompted</td>
              <td className="py-2 pr-4">Participates independently</td>
              <td className="py-2">Leads discussion and supports peers</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="py-2 pr-4 font-medium">Explanation</td>
              <td className="py-2 pr-4">One-word answers</td>
              <td className="py-2 pr-4">Simple explanations</td>
              <td className="py-2 pr-4">Explains concepts clearly</td>
              <td className="py-2">Justifies ideas using evidence</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="py-2 pr-4 font-medium">Vocabulary</td>
              <td className="py-2 pr-4">Limited vocabulary</td>
              <td className="py-2 pr-4">Uses some scientific terms</td>
              <td className="py-2 pr-4">Uses terminology confidently</td>
              <td className="py-2">Applies vocabulary accurately</td>
            </tr>
            <tr>
              <td className="py-2 pr-4 font-medium">Critical Thinking</td>
              <td className="py-2 pr-4">Focuses on recall</td>
              <td className="py-2 pr-4">Begins reasoning</td>
              <td className="py-2 pr-4">Analyses independently</td>
              <td className="py-2">Evaluates and creates solutions</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => handleTabClick(t)}
            className={`cursor-pointer rounded-lg px-4 py-2 text-sm font-medium transition-colors border select-none ${
              filter === t
                ? "bg-indigo-500/25 border-indigo-500 text-white shadow-[0_0_0_1px_rgba(99,102,241,0.25)]"
                : "bg-white/[0.04] border-white/10 text-indigo-300 hover:bg-white/[0.08] hover:border-indigo-500/40"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Artefacts */}
      <div className="space-y-4">
        {filtered.map((a) => (
          <div
            key={a.id}
            ref={(el) => {
              sectionRefs.current[a.id] = el;
            }}
            className="rounded-2xl border border-white/10 bg-white/[0.04] overflow-hidden scroll-mt-24"
          >
            <button
              type="button"
              onClick={() => handleSectionClick(a.id)}
              aria-expanded={expanded === a.id}
              className="flex w-full items-center justify-between p-5 text-left hover:bg-white/[0.04] transition-colors cursor-pointer select-none"
            >
              <div>
                <span className="inline-block rounded-full bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 text-xs font-medium text-indigo-300 mb-1">
                  {a.category}
                </span>
                <h3 className="font-semibold text-indigo-200">{a.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{a.description}</p>
              </div>
              <svg
                className={`ml-4 h-5 w-5 shrink-0 text-slate-500 transition-transform ${
                  expanded === a.id ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {expanded === a.id && (
              <div className="border-t border-white/5 bg-white/[0.02] px-5 py-4 space-y-3">
                <p className="text-sm text-slate-300 leading-relaxed">
                  {a.annotation}
                </p>
                {"docLink" in a && a.docLink && (
                  <a
                    href={a.docLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-indigo-500/30 bg-indigo-500/10 text-sm text-indigo-300 hover:bg-indigo-500/20 transition-colors"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    View Document
                  </a>
                )}
                {a.images.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-3">
                    {a.images.map((src) => (
                      <button
                        key={src}
                        type="button"
                        onClick={() => setLightbox(src)}
                        className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 hover:border-indigo-500/50 transition-colors cursor-pointer group"
                      >
                        <Image
                          src={src}
                          alt=""
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 640px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <svg
                            className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                            />
                          </svg>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
                {a.details.length > 0 && (
                  <div className="space-y-2 mt-3">
                    {a.details.map((d, i) => (
                      <div
                        key={i}
                        className="rounded-lg border border-white/10 bg-white/[0.04] p-3"
                      >
                        <span className="text-xs font-semibold text-indigo-300">
                          {d.label}
                        </span>
                        <p className="text-xs text-slate-400 mt-1">{d.note}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
            aria-label="Close"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div
            className="relative max-w-4xl max-h-[85vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox}
              alt=""
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </div>
  );
}
