const experiences = [
  {
    period: "2026 — Present",
    role: "Freelance Frontend Developer",
    company: "Self-Employed",
    description:
      "Building modern web experiences for clients using React and Tailwind CSS. Focused on clean UI, fast load times, and responsive design. Currently growing a freelance practice while leveling up in frontend development.",
    technologies: ["React", "Tailwind CSS", "TypeScript", "Vite"],
    current: true,
  },
  {
    period: "Jan 2024 — Sep 2025",
    role: "Computer Programmer",
    company: "Caraga State University",
    description:
      "Developed cross-platform mobile and web apps using Flutter and Dart. Built offline-first functionality with ObjectBox, integrated OpenStreetMap SDKs for real-time geospatial tracking, and built REST APIs with Python, FastAPI, and Flask. Managed CI/CD pipelines and Git workflows.",
    technologies: ["Flutter", "Dart", "Python", "FastAPI", "OpenStreetMap", "CI/CD"],
    current: false,
  },
  {
    period: "Jul 2020 — Jan 2024",
    role: "Software Developer",
    company: "Aptex Textile Printing Corporation",
    description:
      "Maintained and upgraded core enterprise business systems in VB.NET. Designed financial reporting layouts with Crystal Reports, optimized MySQL database schemas, and provided IT technical support and user documentation.",
    technologies: ["VB.NET", "MySQL", "Crystal Reports", "IT Support"],
    current: false,
  },
  {
    period: "Aug 2019 — Jun 2020",
    role: "Admin Staff",
    company: "iCan Realty",
    description:
      "Managed operational reports and administrative workflows. Assisted with internal software deployments, database entry updates, and desktop system administration.",
    technologies: ["Database Admin", "IT Support", "Reporting"],
    current: false,
  },
  {
    period: "Jan 2019 — Jun 2019",
    role: "IT Support & Network Trainee",
    company: "Komspec Technologies (OJT)",
    description:
      "Assisted in network infrastructure layouts and hardware deployments at SJIT. Configured and maintained desktop workstations, LAN connections, and peripheral hardware.",
    technologies: ["Networking", "Hardware", "LAN", "Desktop Support"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
           <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A timeline of my professional journey — from IT support and admin work
            to full-stack development, mobile apps, and now modern frontend
            engineering with React and Tailwind.
          </p>
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
