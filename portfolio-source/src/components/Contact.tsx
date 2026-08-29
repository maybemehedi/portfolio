import { Mail, Github, MapPin, Phone, Linkedin } from "lucide-react";

const contactCards = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "hellomehedihasan2006@gmail.com",
    href: "mailto:hellomehedihasan2006@gmail.com",
  },
  {
    icon: Phone,
    label: "PHONE",
    value: "+880 163 969 5408",
    href: "tel:+8801639695408",
  },
  {
    icon: Linkedin,
    label: "LINKEDIN",
    value: "Connect on LinkedIn",
    href: "https://linkedin.com",
  },
  {
    icon: Github,
    label: "GITHUB",
    value: "Open Source Projects",
    href: "https://github.com",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="pt-32 pb-24 bg-background">
      <div className="section-container">
        {/* Logo & Name Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-primary text-primary-foreground rounded-xl flex items-center justify-center font-mono text-2xl font-bold mb-4">
            MH
          </div>
          <h3 className="text-xl font-semibold text-foreground">MEHEDI HASAN</h3>
          <p className="text-muted-foreground text-sm mt-1">Cybersecurity Enthusiast</p>
        </div>

        {/* Terminal-style header */}
        <div className="mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-wide flex items-center gap-2">
            <span className="text-primary font-mono">&gt;</span> Contact
            <span className="flex-1 h-px bg-primary/30 ml-4"></span>
          </h2>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-12">
          <p className="text-lg md:text-xl text-foreground/90 mb-2">
            <span className="text-primary">&gt;</span> Ready to collaborate on cybersecurity projects?
          </p>
          <p className="text-foreground/60 font-mono">
            Let's build something secure together.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8">
          {contactCards.map((card) => (
            <a
              key={card.label}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group relative flex items-center gap-4 p-5 rounded-2xl bg-card border border-primary/40 shadow-[0_0_25px_hsl(var(--primary)/0.15),inset_0_2px_4px_hsl(0_0%_0%/0.3)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] hover:border-primary transition-all duration-500"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl border-2 border-primary/50 bg-primary/10 text-primary group-hover:bg-primary/20 transition-all duration-500">
                <card.icon className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-primary font-mono tracking-widest mb-1 uppercase">
                  {card.label}
                </p>
                <p className="text-foreground group-hover:text-primary transition-colors font-medium text-sm md:text-base break-all">
                  {card.value}
                </p>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-primary/40 rounded-tl" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-primary/40 rounded-tr" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-primary/40 rounded-bl" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-primary/40 rounded-br" />
            </a>
          ))}
        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-foreground/60">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="font-mono text-sm">
            Dhaka, Bangladesh
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
