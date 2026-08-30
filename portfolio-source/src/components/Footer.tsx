import { Github, Linkedin, Mail } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-primary/30 py-12">
      <div className="section-container">

        {/* Name */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground font-mono">
            Mehedi Hasan
          </h3>

          {/* Title */}
          <p className="text-primary font-mono text-base md:text-lg mt-2">
            Cybersecurity Enthusiast
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mt-8">

          {/* GitHub */}
          <a
            href="https://github.com/maybemehedi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-14 h-14 flex items-center justify-center rounded-xl border border-primary/50 bg-card text-primary hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_25px_hsl(var(--primary)/0.3)] transition-all duration-300"
          >
            <Github className="w-7 h-7" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/mehedihasanbadhon/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-14 h-14 flex items-center justify-center rounded-xl border border-primary/50 bg-card text-primary hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_25px_hsl(var(--primary)/0.3)] transition-all duration-300"
          >
            <Linkedin className="w-7 h-7" />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/maybemehedii"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-14 h-14 flex items-center justify-center rounded-xl border border-primary/50 bg-card text-primary hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_25px_hsl(var(--primary)/0.3)] transition-all duration-300"
          >
            <FaFacebookF className="w-6 h-6" />
          </a>

          {/* Email */}
          <a
            href="mailto:hellomehedihasan2006@gmail.com"
            aria-label="Email"
            className="w-14 h-14 flex items-center justify-center rounded-xl border border-primary/50 bg-card text-primary hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_25px_hsl(var(--primary)/0.3)] transition-all duration-300"
          >
            <Mail className="w-7 h-7" />
          </a>

        </div>

        {/* Copyright */}
        <p className="text-center text-foreground/40 font-mono text-sm mt-10">
          © 2026 Mehedi Hasan. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;