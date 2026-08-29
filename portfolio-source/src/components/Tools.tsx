import { Terminal, GitBranch, Github, Code, Search, Network } from "lucide-react";

const tools = [
  { icon: Terminal, name: "Linux" },
  { icon: GitBranch, name: "Git" },
  { icon: Github, name: "GitHub" },
  { icon: Code, name: "VS Code" },
  { icon: Search, name: "Wireshark" },
  { icon: Network, name: "Nmap" },
];

const Tools = () => {
  return (
    <section className="py-16 bg-background">
      <div className="section-container">
        {/* Terminal-style header */}
        <div className="flex items-center gap-3 mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-wide">
            <span className="text-primary font-mono">&gt;</span> Tools I Use
          </h2>
          <span className="flex-1 h-px bg-primary/30"></span>
        </div>

        {/* Tools Strip */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="group flex flex-col items-center gap-3 p-4 rounded-xl border border-primary/30 bg-card/50 hover:border-primary hover:shadow-[0_0_25px_hsl(var(--primary)/0.3)] transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg border border-primary/40 bg-primary/10 text-primary group-hover:bg-primary/20 transition-all duration-300">
                <tool.icon className="w-6 h-6" />
              </div>
              <span className="text-sm font-mono text-foreground/70 group-hover:text-primary transition-colors">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;