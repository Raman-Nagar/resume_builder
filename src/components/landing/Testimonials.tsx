const TESTIMONIALS = [
  {
    name: "Sarah K.",
    role: "Software Engineer",
    avatar: "SK",
    rating: 5,
    text: "Built my resume in under 20 minutes. Got an interview at a FAANG company the following week. The ATS-friendly format made a real difference.",
  },
  {
    name: "Marcus T.",
    role: "Product Manager",
    avatar: "MT",
    rating: 5,
    text: "I've tried Zety and Resume.io — both wanted a subscription to download. This is completely free and the output looks just as professional.",
  },
  {
    name: "Priya R.",
    role: "UX Designer",
    avatar: "PR",
    rating: 5,
    text: "Love that my data never leaves my browser. As a designer I'm picky about layouts — the Minimal template is exactly what I was looking for.",
  },
  {
    name: "James O.",
    role: "Recent Graduate",
    avatar: "JO",
    rating: 5,
    text: "No sign-up, no credit card, no nonsense. Just open it and start typing. Had a polished PDF ready in 15 minutes for my first job application.",
  },
  {
    name: "Aisha M.",
    role: "Marketing Manager",
    avatar: "AM",
    rating: 5,
    text: "The live preview is a game changer. I could see exactly how my resume looked as I typed. Downloaded the PDF and it was pixel-perfect.",
  },
  {
    name: "David L.",
    role: "Data Analyst",
    avatar: "DL",
    rating: 4,
    text: "Clean, fast, and private. I was skeptical about a free tool but the quality is genuinely impressive. The Classic template worked perfectly for my industry.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="lp-testimonial__stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < count ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="lp-section" aria-labelledby="testimonials-heading">
      <div className="lp-container">
        <div className="lp-section-header">
          <p className="lp-overline">What people say</p>
          <h2 id="testimonials-heading" className="lp-section-title">
            Trusted by job seekers worldwide.
          </h2>
          <p className="lp-section-subtitle">
            Join thousands of professionals who built their resume with us — free, private, and in minutes.
          </p>
        </div>

        {/* Rating summary */}
        <div className="lp-testimonials__summary">
          <div className="lp-testimonials__rating-score">4.8</div>
          <div className="lp-testimonials__rating-detail">
            <Stars count={5} />
            <p className="lp-testimonials__rating-label">Based on 127+ reviews</p>
          </div>
        </div>

        <div className="lp-testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="lp-testimonial-card">
              <Stars count={t.rating} />
              <blockquote className="lp-testimonial__quote">
                <p>&ldquo;{t.text}&rdquo;</p>
              </blockquote>
              <figcaption className="lp-testimonial__author">
                <div className="lp-testimonial__avatar" aria-hidden="true">
                  {t.avatar}
                </div>
                <div>
                  <div className="lp-testimonial__name">{t.name}</div>
                  <div className="lp-testimonial__role">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
