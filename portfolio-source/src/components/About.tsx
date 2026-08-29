import { Shield, Target, Users, Globe } from "lucide-react";

const About = () => {
  const strengths = [
    {
      icon: Shield,
      title: "Cybersecurity Focused",
      description: "Passionate about learning how digital systems are secured against modern threats.",
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Quick learner with a problem-solving mindset, continuously improving through practice.",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Strong teamwork and leadership skills with excellent time management.",
    },
    {
      icon: Globe,
      title: "Multilingual",
      description: "Fluent in Bangla & English, conversational in Hindi & Urdu.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="section-container">
        {/* Terminal-style header */}
        <div className="flex items-center gap-3 mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-wide">
            <span className="text-primary font-mono">&gt;</span> About
          </h2>
          <span className="flex-1 h-px bg-primary/30"></span>
        </div>

        {/* About Card - Full Width */}
        <div className="group relative p-8 rounded-2xl bg-card border border-primary/40 shadow-[0_0_25px_hsl(var(--primary)/0.15),inset_0_2px_4px_hsl(0_0%_0%/0.3)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] hover:border-primary transition-all duration-500">
          <h3 className="font-mono text-lg font-bold text-foreground mb-6">
            Aspiring Cybersecurity Professional
          </h3>
          <div className="space-y-4 text-foreground/70 leading-relaxed text-sm">
            <p>
              I'm a dedicated Computer Science and Engineering student at Daffodil 
              International University, Bangladesh, with a strong passion for 
              cybersecurity and system security.
            </p>
            <p>
              I'm actively interested in learning how digital systems are secured 
              against modern threats, building a solid foundation in networking, 
              Linux, and essential security concepts through coursework and 
              practical learning.
            </p>
            <p>
              Beyond academics, I enjoy traveling, photography, gaming, and 
              playing cricket and badminton. I'm also a member of the Science 
              Club, participating in seminars, workshops, and academic discussions.
            </p>
          </div>

          {/* Decorative corner accents */}
          <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-primary/40 rounded-tl" />
          <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-primary/40 rounded-tr" />
          <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-primary/40 rounded-bl" />
          <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-primary/40 rounded-br" />
        </div>

        {/* Core Strengths - Separate Section Below */}
        <div className="mt-12">
          <div className="flex items-center gap-3 mb-8">
            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground tracking-wide">
              <span className="text-primary font-mono">&gt;</span> Core Strengths
            </h3>
            <span className="flex-1 h-px bg-primary/30"></span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((strength, index) => (
              <div
                key={strength.title}
                className="group relative flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-primary/40 shadow-[0_0_25px_hsl(var(--primary)/0.15),inset_0_2px_4px_hsl(0_0%_0%/0.3)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] hover:border-primary transition-all duration-500"
              >
                {/* Icon Box */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl border-2 border-primary/50 bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-all duration-500">
                  <strength.icon className="w-7 h-7" />
                </div>
                
                <h4 className="font-mono text-sm font-bold text-foreground mb-2">{strength.title}</h4>
                <p className="text-foreground/60 text-xs leading-relaxed">{strength.description}</p>

                {/* Decorative corner accents */}
                <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-primary/40 rounded-tl" />
                <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-primary/40 rounded-tr" />
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-primary/40 rounded-bl" />
                <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-primary/40 rounded-br" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
