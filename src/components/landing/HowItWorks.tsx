const STEPS = [
  {
    number: "01",
    title: "Choose a template",
    description:
      "Pick from Classic, Modern, or Minimal — each designed to impress hiring managers and pass ATS screening.",
  },
  {
    number: "02",
    title: "Add your information",
    description:
      "Fill in your experience, education, skills, and more using our structured editor. Your data saves automatically.",
  },
  {
    number: "03",
    title: "Download your resume",
    description:
      "Export a pixel-perfect PDF in one click. Ready to send to recruiters or attach to job applications.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="lp-section" aria-labelledby="how-heading">
      <div className="lp-container">
        <div className="lp-section-header">
          <p className="lp-overline">How it works</p>
          <h2 id="how-heading" className="lp-section-title">
            Ready in three steps.
          </h2>
          <p className="lp-section-subtitle">
            No tutorials needed. Most people finish their resume in under 15 minutes.
          </p>
        </div>

        <ol className="lp-steps" aria-label="Steps to create your resume">
          {STEPS.map((step, i) => (
            <li key={step.number} className="lp-step">
              <div className="lp-step__number" aria-hidden="true">{step.number}</div>
              {i < STEPS.length - 1 && (
                <div className="lp-step__connector" aria-hidden="true" />
              )}
              <div className="lp-step__content">
                <h3 className="lp-step__title">{step.title}</h3>
                <p className="lp-step__desc">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
