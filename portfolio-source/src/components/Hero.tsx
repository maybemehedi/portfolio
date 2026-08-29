import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Mouse } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Glowing Badge - Enhanced */}
          <div className="animate-fade-in-up mb-5">
            <span className="inline-block px-5 py-2 text-sm font-mono font-semibold text-primary bg-primary/15 border border-primary/50 rounded-full shadow-[0_0_25px_hsl(var(--primary)/0.4),0_0_50px_hsl(var(--primary)/0.2)]">
              Open to Opportunities
            </span>
          </div>

          {/* Name */}
          <h1 className="animate-fade-in-up animation-delay-100 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
            Mehedi Hasan
          </h1>

          {/* Subtitle - Two Lines */}
          <div className="animate-fade-in-up animation-delay-200 mb-4">
            <p className="text-xl md:text-2xl text-foreground font-semibold mb-1">
              Cybersecurity Enthusiast
            </p>
            <p className="text-base md:text-lg text-foreground/70 font-medium">
              Focused on Networking, Linux, and System Security
            </p>
          </div>

          {/* Social Links - Enhanced */}
          <div className="animate-fade-in-up animation-delay-250 flex items-center justify-center gap-6 mb-5">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground/80 hover:text-primary hover:shadow-[0_0_15px_hsl(var(--primary)/0.4)] transition-all duration-300 text-base font-mono px-2 py-1 rounded-lg"
            >
              <Github className="w-5 h-5 text-primary" />
              GitHub
            </a>
            <span className="text-primary/60 text-lg">•</span>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground/80 hover:text-primary hover:shadow-[0_0_15px_hsl(var(--primary)/0.4)] transition-all duration-300 text-base font-mono px-2 py-1 rounded-lg"
            >
              <Linkedin className="w-5 h-5 text-primary" />
              LinkedIn
            </a>
            <span className="text-primary/60 text-lg">•</span>
            <a 
              href="mailto:hellomehedihasan2006@gmail.com"
              className="flex items-center gap-2 text-foreground/80 hover:text-primary hover:shadow-[0_0_15px_hsl(var(--primary)/0.4)] transition-all duration-300 text-base font-mono px-2 py-1 rounded-lg"
            >
              <Mail className="w-5 h-5 text-primary" />
              Email
            </a>
          </div>

          {/* Description */}
          <p className="animate-fade-in-up animation-delay-300 text-base text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Passionate about cybersecurity and system security, actively building real world skills through projects, Linux practice, and networking fundamentals.
          </p>
        </div>
      </div>

      {/* Scroll Indicator - Neon Mouse - Fixed to bottom of section */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 animate-fade-in animation-delay-500">
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center gap-1 text-primary/70 hover:text-primary transition-colors group"
          aria-label="Scroll to about section"
        >
          <div className="relative animate-bounce">
            <Mouse className="w-6 h-6 drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)]" />
            {/* Inner scroll dot */}
            <span className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-1.5 bg-primary rounded-full animate-[bounce_1.5s_ease-in-out_infinite]" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
