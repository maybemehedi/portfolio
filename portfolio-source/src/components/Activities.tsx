import { FlaskConical, MessageSquare, Users } from "lucide-react";

const activities = [
  {
    icon: FlaskConical,
    title: "Science Club Member",
    description: "Organized and participated in seminars, exhibitions, and academic sessions focused on scientific innovation and research.",
  },
  {
    icon: MessageSquare,
    title: "Scientific Discussions",
    description: "Contributed to workshops and collaborative academic activities exploring emerging technologies and methodologies.",
  },
  {
    icon: Users,
    title: "Community Engagement",
    description: "Built connections through tech community events and knowledge sharing sessions with fellow enthusiasts and professionals.",
  },
];

const Activities = () => {
  return (
    <section id="activities" className="py-24 bg-background">
      <div className="section-container">
        {/* Terminal-style header */}
        <div className="flex items-center gap-3 mb-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-wide">
            <span className="text-primary font-mono">&gt;</span> Activities
          </h2>
          <span className="flex-1 h-px bg-primary/30"></span>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-primary/40 shadow-[0_0_25px_hsl(var(--primary)/0.15),inset_0_2px_4px_hsl(0_0%_0%/0.3)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] hover:border-primary transition-all duration-500"
            >
              {/* Glowing Icon Box */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl border-2 border-primary/50 bg-primary/10 text-primary mb-5 group-hover:bg-primary/20 transition-all duration-500">
                <activity.icon className="w-7 h-7" />
              </div>

              {/* Title */}
              <h4 className="font-mono text-base font-bold text-foreground mb-3">
                {activity.title}
              </h4>

              {/* Description */}
              <p className="text-foreground/70 text-sm leading-relaxed">
                {activity.description}
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
    </section>
  );
};

export default Activities;