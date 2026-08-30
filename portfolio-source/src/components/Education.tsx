import { GraduationCap } from "lucide-react";

const education = [
  {
    institution: "Daffodil International University",
    degree: "B.Sc. in Computer Science & Engineering",
    status: "Since 2026",
    gpa: null,
  },
  {
    institution: "Cantonment College Jashore",
    degree: "HSC Batch-24",
    status: "Completed",
    gpa: null,
  },
  {
    institution: "Police Line Secondary School Jashore",
    degree: "SSC Batch-22",
    status: "Completed",
    gpa: null,
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-background">
      <div className="section-container">
        {/* Terminal-style header */}
        <div className="flex items-center gap-3 mb-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-wide">
            <span className="text-primary font-mono">&gt;</span> Education
          </h2>

          <span className="flex-1 h-px bg-primary/30"></span>
        </div>

        {/* Education List */}
        <div className="space-y-4">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group relative flex items-center gap-4 md:gap-6 p-4 md:p-5 rounded-2xl bg-card border border-primary/40 shadow-[0_0_25px_hsl(var(--primary)/0.15),inset_0_2px_4px_hsl(0_0%_0%/0.3)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] hover:border-primary transition-all duration-500"
            >
              {/* Icon Box */}
              <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center rounded-xl border-2 border-primary/50 bg-primary/10 text-primary group-hover:bg-primary/20 transition-all duration-500">
                <GraduationCap className="w-6 h-6 md:w-7 md:h-7" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h4 className="font-mono font-bold text-foreground text-base md:text-lg truncate">
                  {edu.institution}
                </h4>

                <p className="text-foreground/60 text-sm font-mono">
                  {edu.degree}
                </p>
              </div>

              {/* Status */}
              <div className="flex-shrink-0 text-right">
                <p className="text-foreground/60 text-sm font-mono">
                  {edu.status}
                </p>

                {edu.gpa && (
                  <p className="text-primary font-mono font-bold text-sm">
                    GPA: {edu.gpa}
                  </p>
                )}
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

export default Education;