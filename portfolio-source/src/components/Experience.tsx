import { Briefcase, BookOpen } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    title: "Private Tutor",
    company: "Self-Employed",
    duration: "2021 - 2024",
    achievements: [
      "Delivered personalized academic guidance in science-related subjects",
      "Developed effective teaching methods that improved student performance",
      "Built strong communication and mentoring skills through one-on-one sessions",
    ],
  },
  {
    icon: BookOpen,
    title: "Cybersecurity Self-Study",
    company: "Independent Learning",
    duration: "Ongoing",
    achievements: [
      "Configured Linux environments and practiced system hardening techniques",
      "Tested network security concepts through hands-on labs and exercises",
      "Built foundational knowledge in networking protocols and security tools",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="section-container">
        {/* Terminal-style header */}
        <div className="flex items-center gap-3 mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-wide">
            <span className="text-primary font-mono">&gt;</span> Experience & Learning
          </h2>
          <span className="flex-1 h-px bg-primary/30"></span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative flex flex-col p-8 rounded-2xl bg-card border border-primary/40 shadow-[0_0_25px_hsl(var(--primary)/0.15),inset_0_2px_4px_hsl(0_0%_0%/0.3)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] hover:border-primary transition-all duration-500"
            >
              {/* Icon & Duration */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl border-2 border-primary/50 bg-primary/10 text-primary group-hover:bg-primary/20 transition-all duration-500">
                  <exp.icon className="w-7 h-7" />
                </div>
                <span className="text-sm text-primary font-mono">{exp.duration}</span>
              </div>

              {/* Title & Company */}
              <h3 className="font-mono text-lg font-bold text-foreground mb-1">
                {exp.title}
              </h3>
              <p className="text-foreground/60 font-mono text-sm mb-5">{exp.company}</p>

              {/* Achievements */}
              <ul className="space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/70">
                    <span className="w-2 h-2 mt-1.5 rounded-full bg-primary flex-shrink-0" />
                    {achievement}
                  </li>
                ))}
              </ul>

              {/* Decorative corner accents */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-primary/40 rounded-tl" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-primary/40 rounded-tr" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-primary/40 rounded-bl" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-primary/40 rounded-br" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
