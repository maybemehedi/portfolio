import { ExternalLink, Github, Folder, Code, GitBranch, Palette, Wrench, Layout, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Linux Security Lab",
    description: "Configured Linux security settings, user permissions, and implemented system hardening techniques in a virtual environment.",
    technologies: ["Linux", "Bash", "Security", "Networking"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Network Analysis Tool",
    description: "Built a practical project for analyzing network protocols, capturing packets, and monitoring security events.",
    technologies: ["Python", "Wireshark", "TCP/IP", "Security"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Personal Portfolio Website",
    description: "Developed a responsive portfolio website using modern web technologies to showcase skills and projects.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Algorithm Practice",
    description: "Implemented data structures and algorithms solutions for competitive programming challenges.",
    technologies: ["Python", "Java", "C++", "DSA"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const learningPractice = [
  {
    icon: Code,
    title: "Web Development Practice",
    description: "Built multiple responsive websites using HTML, CSS, and JavaScript. Implemented clean UI patterns and optimized performance for real-world frontend practices.",
  },
  {
    icon: Wrench,
    title: "Hands-On Project Building",
    description: "Developed portfolio sites, landing pages, and interactive components. Practiced debugging, testing, and iterating on user experience improvements.",
  },
  {
    icon: GitBranch,
    title: "Version Control & Open Source",
    description: "Managed code with Git and GitHub, tracked changes, and studied open source repositories to understand professional project structures.",
  },
  {
    icon: Layout,
    title: "Modern Tools & Frameworks",
    description: "Implemented projects using React, Tailwind CSS, and modern development tools to build faster and more maintainable applications.",
  },
  {
    icon: Palette,
    title: "UI & Design Implementation",
    description: "Created visually consistent layouts with proper typography, spacing, and color systems to achieve professional-grade interfaces.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Skill Development",
    description: "Regularly practiced new techniques from developer resources, documentation, and tutorials to stay current with industry trends.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="section-container">
        {/* Terminal-style header */}
        <div className="flex items-center gap-3 mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-wide">
            <span className="text-primary font-mono">&gt;</span> Projects & Practice
          </h2>
          <span className="flex-1 h-px bg-primary/30"></span>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative flex flex-col rounded-2xl bg-card border border-primary/40 shadow-[0_0_25px_hsl(var(--primary)/0.15),inset_0_2px_4px_hsl(0_0%_0%/0.3)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] hover:border-primary transition-all duration-500 overflow-hidden"
            >
              {/* Project header with gradient */}
              <div className="h-40 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent flex items-center justify-center relative">
                <div className="w-16 h-16 flex items-center justify-center rounded-xl border-2 border-primary/50 bg-primary/10 text-primary group-hover:bg-primary/20 transition-all duration-500">
                  <Folder className="w-8 h-8" />
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-mono text-lg font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-foreground/70 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary border border-primary/30 text-foreground rounded-lg text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-2 border-primary/50 text-primary hover:bg-primary/20 hover:text-primary" 
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="gap-2 text-muted-foreground hover:text-primary hover:bg-primary/10" 
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-primary/40 rounded-tl" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-primary/40 rounded-tr" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-primary/40 rounded-bl" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-primary/40 rounded-br" />
            </div>
          ))}
        </div>

        {/* Learning & Practice Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-wide">
              <span className="text-primary font-mono">&gt;</span> Learning & Practice
            </h3>
            <span className="flex-1 h-px bg-primary/30"></span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningPractice.map((item, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-primary/40 shadow-[0_0_25px_hsl(var(--primary)/0.15),inset_0_2px_4px_hsl(0_0%_0%/0.3)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] hover:border-primary transition-all duration-500"
              >
                {/* Glowing Icon Box */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl border-2 border-primary/50 bg-primary/10 text-primary mb-5 group-hover:bg-primary/20 transition-all duration-500">
                  <item.icon className="w-7 h-7" />
                </div>

                {/* Title */}
                <h4 className="font-mono text-base font-bold text-foreground mb-3">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative corner accents */}
                <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-primary/40 rounded-tl" />
                <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-primary/40 rounded-tr" />
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-primary/40 rounded-bl" />
                <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-primary/40 rounded-br" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
