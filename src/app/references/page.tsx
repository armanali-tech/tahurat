export default function ReferencesPage() {
  const references = [
    "Black, P. and Wiliam, D. (1998) 'Assessment and classroom learning', Assessment in Education, 5(1), pp. 7–74.",
    "Bloom, B. (1956) Taxonomy of Educational Objectives. New York: Longmans.",
    "Brookfield, S. (2017) Becoming a Critically Reflective Teacher. 2nd edn. San Francisco: Jossey-Bass.",
    "Bruner, J. (1960) The Process of Education. Cambridge: Harvard University Press.",
    "Clarke, S. (2014) Outstanding Formative Assessment. London: Hodder Education.",
    "Dewey, J. (1933) How We Think. Boston: D.C. Heath and Company.",
    "Fisher, R. (2013) Teaching Thinking: Philosophical Enquiry in the Classroom. 4th edn. London: Bloomsbury.",
    "Gardner, H. (2011) Frames of Mind: The Theory of Multiple Intelligences. New York: Basic Books.",
    "Hattie, J. (2012) Visible Learning for Teachers. London: Routledge.",
    "Mercer, N. and Littleton, K. (2007) Dialogue and the Development of Children's Thinking. London: Routledge.",
    "Mortimer, E. and Scott, P. (2003) Meaning Making in Secondary Science Classrooms. Maidenhead: Open University Press.",
    "OECD (2019) PISA 2018 Results. Paris: OECD Publishing.",
    "Piaget, J. (1972) The Psychology of the Child. New York: Basic Books.",
    "Rowe, M. (1986) 'Wait time: Slowing down may be a way of speeding up', Journal of Teacher Education, 37(1), pp. 43–50.",
    "Schön, D. (1983) The Reflective Practitioner. New York: Basic Books.",
    "Shulman, L. (1987) 'Knowledge and teaching: Foundations of the new reform', Harvard Educational Review, 57(1), pp. 1–22.",
    "Tomlinson, C. (2017) How to Differentiate Instruction in Academically Diverse Classrooms. 3rd edn. Alexandria: ASCD.",
    "UNESCO (2020) Global Education Monitoring Report. Paris: UNESCO.",
    "Vygotsky, L. (1978) Mind in Society. Cambridge: Harvard University Press.",
    "Wiliam, D. (2011) Embedded Formative Assessment. Bloomington: Solution Tree Press.",
  ];

  return (
    <div className="py-14 space-y-8 animate-fade-in">
      <h1 className="text-3xl font-bold gradient-text">References</h1>
      {/* <p className="text-slate-400">Full reference list in BCU Harvard style.</p> */}

      <div className="glass-static p-8">
        <ul className="space-y-4">
          {references.map((ref, i) => (
            <li
              key={i}
              className="text-slate-300 leading-relaxed pl-8 -indent-8 text-sm"
            >
              {ref}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
