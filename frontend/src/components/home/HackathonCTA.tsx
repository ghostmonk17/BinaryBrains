import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Trophy, ArrowRight } from "lucide-react";

const HackathonCTA = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg opacity-[0.03]" />
      
      <div className="container-tight relative">
        <div className="card-elevated p-8 md:p-12 lg:p-16 text-center" style={{ background: "var(--gradient-card)" }}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Trophy className="h-4 w-4" />
            Featured Event
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            AlgoHeist <span className="gradient-text">2026</span>
          </h2>

          {/* Description */}
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            A competitive DSA coding contest bringing together skilled student developers. 
            Test your algorithmic thinking and problem-solving skills!
          </p>

          {/* Event Details */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-foreground">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="font-medium">28th February 2026</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="font-medium">DIT Pune, Campus</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/hackathon">
              <Button variant="hero" size="xl">
                Register Now
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/sponsors">
              <Button variant="outline" size="xl">
                Sponsor This Event
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HackathonCTA;
