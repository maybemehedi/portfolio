import { Code, Shield, Users, Brain } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Programming Languages",
    skills: ["Python", "Java", "C++", "HTML", "CSS", "JavaScript"],
  },
  {
    icon: Shield,
    title: "Cybersecurity & Systems",
    skills: ["Linux", "Networking", "Security Fundamentals", "System Security", "Online Labs"],
  },
  {
    icon: Brain,
    title: "Technical Knowledge",
    skills: ["Data Structures", "Algorithms", "Web Development", "Problem Solving"],
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: ["Teamwork", "Time Management", "Leadership", "Critical Thinking", "Communication"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="section-container">
        {/* Terminal-style header */}
        <div className="flex items-center gap-3 mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-wide">
            <span className="text-primary font-mono">&gt;</span> Skills & Technologies
          </h2>
          <span className="flex-1 h-px bg-primary/30"></span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group relative p-8 rounded-2xl bg-card border border-primary/40 shadow-[0_0_25px_hsl(var(--primary)/0.15),inset_0_2px_4px_hsl(0_0%_0%/0.3)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] hover:border-primary transition-all duration-500"
            >
              {/* Icon Box */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl border-2 border-primary/50 bg-primary/10 text-primary group-hover:bg-primary/20 transition-all duration-500">
                  <category.icon className="w-7 h-7" />
                </div>
                <h3 className="font-mono text-lg font-bold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary border border-primary/30 text-foreground rounded-lg text-sm font-mono hover:bg-primary/20 hover:border-primary/60 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

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

export default Skills;
