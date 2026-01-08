import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Users, Trophy } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-tight section-padding relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            AlgoHeist 2026 • 28th February
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6 animate-fade-up stagger-1">
            Where <span className="gradient-text">Code</span> Meets
            <br />
            <span className="gradient-text">Innovation</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up stagger-2">
            BinaryBrains is the premier tech club at DIT Pune, fostering a community of 
            passionate developers, innovative thinkers, and future tech leaders.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up stagger-3">
            <Link to="/hackathon">
              <Button variant="hero" size="xl">
                Register for AlgoHeist
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/sponsors">
              <Button variant="heroOutline" size="xl">
                Become a Sponsor
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-up stagger-4">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mx-auto mb-3">
                <Users className="h-6 w-6" />
              </div>
              <div className="text-3xl font-display font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground">Active Members</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mx-auto mb-3">
                <Code2 className="h-6 w-6" />
              </div>
              <div className="text-3xl font-display font-bold text-foreground">50+</div>
              <div className="text-sm text-muted-foreground">Events Organized</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mx-auto mb-3">
                <Trophy className="h-6 w-6" />
              </div>
              <div className="text-3xl font-display font-bold text-foreground">20+</div>
              <div className="text-sm text-muted-foreground">Hackathon Wins</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
