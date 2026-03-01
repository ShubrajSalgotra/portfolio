export type Experience = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: "Accenture",
    role: "Associate Software Engineer (GCP/BigQuery)",
    period: "Oct 2024 – Present",
    bullets: [
      "Built data pipelines and analytics with BigQuery; improved query performance and cost efficiency.",
      "Automated billing reports with Selenium + C# and Google Cloud APIs.",
      "Collaborated cross-functionally to deliver secure, scalable solutions."
    ]
  },
  // {
  //   company: "404grid / one9labs",
  //   role: "Founder — AI & Full‑Stack",
  //   period: "2024 – Present",
  //   bullets: [
  //     "Prototyped AI-first products and internal tools for clients.",
  //     "Shipped Next.js apps with authentication, payments, and analytics.",
  //     "Led product discovery, UX, and rapid delivery."
  //   ]
  // },
  {
    company: "Footfallz",
    role: "Software Engineer",
    period: "Apr 2023 – Sep 2023",
    bullets: [
      "Designed and deployed Python-based AWS Lambda functions to auto-generate promotional videos.",
      "Leveraged AWS services and async workflows for scalable delivery.",
      "Worked remotely in a cross-functional team."
    ]
  },
  {
    company: "Localytee",
    role: "Software Engineer Intern",
    period: "Jul 2022 – Oct 2022",
    bullets: [
      "Developed responsive web interfaces using ReactJS, HTML, and SCSS.",
      "Collaborated with developers to convert design mockups to production code.",
      "Focused on mobile-first, component-based design.",
      "Gained experience with GitHub workflows and version control best practices."
    ]
  }
];
