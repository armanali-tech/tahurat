"use client";

import Image from "next/image";
import { useState } from "react";

export default function InquiryPage() {
  const [lightbox, setLightbox] = useState(false);

  return (
    <div className="py-14 space-y-10 animate-fade-in">
      <h1 className="text-3xl font-bold gradient-text">Inquiry Focus</h1>

      <section className="glass-static p-8 glow">
        <h2 className="text-xl font-semibold text-indigo-200 mb-3">Inquiry Question</h2>
        <p className="text-lg italic text-slate-200">
          &ldquo;How can differentiated questioning support inclusive participation and promote deeper thinking in a Grade 6 Science classroom?&rdquo;
        </p>
      </section>

      <section className="glass-static p-8 space-y-4 text-slate-300 leading-relaxed">
        <p>
          At the beginning of this inquiry, questioning in my classroom was largely spontaneous and unstructured. I often asked questions instinctively without fully considering their purpose or impact on learning. Through this inquiry, I began to understand differentiated questioning as a deliberate pedagogical strategy that influences both participation and thinking.
        </p>
        <p>
          Differentiated questioning refers to the intentional design and sequencing of questions at different levels of complexity to support diverse learners. In my classroom, questioning was structured to move from recall towards explanation, reasoning, and analysis. This approach aimed to ensure that all learners could access the discussion while also being challenged to think more deeply.
        </p>
      </section>

      {/* Concept Map */}
      <section className="glass-static p-8">
        <h2 className="text-2xl font-bold text-indigo-300 mb-4">Concept Map</h2>
        <button
          type="button"
          onClick={() => setLightbox(true)}
          className="relative w-full aspect-[16/10] rounded-lg overflow-hidden border border-white/10 hover:border-indigo-500/50 transition-colors cursor-pointer group"
        >
          <Image
            src="/image/inquiry-focus - concept-map.png"
            alt="Inquiry Focus Concept Map"
            fill
            className="object-contain group-hover:scale-[1.02] transition-transform duration-300"
            sizes="(max-width: 1120px) 100vw, 1120px"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            <svg
              className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </button>
      </section>

      <section className="glass-static p-8">
        <h2 className="text-2xl font-bold text-indigo-300 mb-4">Theoretical Framework</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { title: "Bloom's Taxonomy", desc: "Outlines the progression of cognitive skills from remembering and understanding to analysing and evaluating (Bloom, 1956). Students do not always move through these stages in a fixed sequence." },
            { title: "Zone of Proximal Development", desc: "Vygotsky's concept emphasises the role of scaffolding in supporting learners beyond their current level of understanding (Vygotsky, 1978). Questioning became a form of scaffolding." },
            { title: "Formative Assessment", desc: "Through classroom interactions, worksheets, and discussions, I gathered immediate evidence of student understanding and adapted instruction accordingly (Black and Wiliam, 1998)." },
            { title: "Dialogic Teaching", desc: "Positions classroom talk as central to learning (Mercer and Littleton, 2007). Students were encouraged to construct understanding collectively rather than passively receive information." },
          ].map((item) => (
            <div key={item.title} className="glass p-5">
              <h3 className="font-semibold text-indigo-200">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="glass-static p-8">
        <h2 className="text-2xl font-bold text-indigo-300 mb-4">Two Interconnected Purposes</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="glass p-5">
            <h3 className="font-semibold text-indigo-200">Inclusion</h3>
            <p className="mt-2 text-sm text-slate-400">Ensuring that all learners are able to participate meaningfully in classroom discussions and scientific dialogue.</p>
          </div>
          <div className="glass p-5">
            <h3 className="font-semibold text-indigo-200">Thinking</h3>
            <p className="mt-2 text-sm text-slate-400">Encouraging students to move beyond simple recall towards deeper conceptual understanding and reasoning.</p>
          </div>
        </div>
      </section>

      <section className="glass-static p-8 space-y-4 text-slate-300 leading-relaxed">
        <h2 className="text-2xl font-bold text-indigo-300 mb-4">Reflective Practice</h2>
        <p>
          Schön&apos;s concept of reflection-in-action became particularly relevant during lessons where unexpected classroom situations required immediate adaptation (Schön, 1983). One example occurred during the water cycle lesson when technology failed and planned slides could not be displayed. Instead of stopping the lesson, questioning and pair discussion became the primary teaching strategy.
        </p>
        <p>
          Reflecting on this experience helped me realise that effective teaching depends less on resources and more on the teacher&apos;s ability to facilitate thinking and dialogue.
        </p>
      </section>

      <section className="glass-static p-8">
        <h2 className="text-2xl font-bold text-indigo-300 mb-4">Intervention Strategies</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-300">
          <li>Wait time — allowing students processing time before expecting responses</li>
          <li>Scaffolding — building from accessible to challenging questions</li>
          <li>Think-Pair-Share — collaborative discussion before whole-class sharing</li>
          <li>Tiered questioning — questions at different cognitive levels within the same lesson</li>
        </ul>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setLightbox(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setLightbox(false)}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
            aria-label="Close"
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/image/inquiry-focus - concept-map.png"
              alt="Inquiry Focus Concept Map"
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
