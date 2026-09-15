"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Is the resume builder free?",
    a: "Yes, completely free. There are no hidden fees, premium tiers, or paywalls. Every template and feature is available at no cost.",
  },
  {
    q: "Do I need to create an account?",
    a: "No account required. Open the builder and start immediately. Your resume is saved automatically in your browser's local storage.",
  },
  {
    q: "Can I download my resume as a PDF?",
    a: "Yes. Once you're happy with your resume, click the Download button to export a high-quality PDF. The output is print-ready and formatted for A4 paper.",
  },
  {
    q: "Does it work on mobile?",
    a: "Yes. The builder is fully responsive. You can edit your resume on a phone or tablet and switch to preview mode to see how it looks.",
  },
  {
    q: "Are the templates ATS-friendly?",
    a: "All templates use clean, semantic HTML that applicant tracking systems can parse reliably. We avoid tables, graphics, and multi-column layouts that confuse ATS parsers.",
  },
  {
    q: "Where is my resume data stored?",
    a: "Your data is stored exclusively in your browser's localStorage. It never leaves your device and is never sent to any server. Clearing your browser data will remove it.",
  },
  {
    q: "Can I have multiple resumes?",
    a: "Multi-resume support is on the roadmap. Currently the builder saves one resume per browser. You can export your resume as JSON to back it up and restore it later.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="lp-section" aria-labelledby="faq-heading">
      <div className="lp-container lp-faq-container">
        <div className="lp-section-header">
          <p className="lp-overline">FAQ</p>
          <h2 id="faq-heading" className="lp-section-title">
            Common questions.
          </h2>
        </div>

        <dl className="lp-faq-list">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="lp-faq-item">
                <dt>
                  <button
                    className="lp-faq-trigger"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-question-${i}`}
                  >
                    <span>{faq.q}</span>
                    <span className={`lp-faq-chevron${isOpen ? " lp-faq-chevron--open" : ""}`} aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd
                  id={`faq-answer-${i}`}
                  aria-labelledby={`faq-question-${i}`}
                  className={`lp-faq-answer${isOpen ? " lp-faq-answer--open" : ""}`}
                >
                  <p className="lp-faq-answer-text">{faq.a}</p>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
