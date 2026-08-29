import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-primary/30 bg-card/50">
      <div className="section-container">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Name and Title */}
          <div>
            <h3 className="font-display text-xl font-bold text-foreground mb-1">
              Mehedi Hasan
            </h3>
            <p className="text-primary font-mono text-sm">
              Cybersecurity Enthusiast
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-xl border border-primary/40 bg-primary/10 text-primary hover:bg-primary/20 hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)] transition-all duration-300" 
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-xl border border-primary/40 bg-primary/10 text-primary hover:bg-primary/20 hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)] transition-all duration-300" 
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:hellomehedihasan2006@gmail.com" 
              className="p-3 rounded-xl border border-primary/40 bg-primary/10 text-primary hover:bg-primary/20 hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)] transition-all duration-300" 
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-foreground/50 font-mono">
            © {currentYear} Mehedi Hasan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;