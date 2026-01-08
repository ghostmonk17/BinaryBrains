import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Users, 
  Eye, 
  Target, 
  CheckCircle2, 
  Mail, 
  Building2,
  Rocket,
  GraduationCap
} from "lucide-react";

const benefits = [
  "Brand visibility among future software engineers and developers",
  "Opportunity to onboard early adopters and beta users for your product",
  "Brand mention during opening and closing ceremonies",
  "Logo on participation and winner certificates",
  "Social media promotion through college and club channels",
  "Access to opt-in participant profiles for hiring and outreach",
  "Logo placement on event posters, digital creatives, and contest platform",
  "Association with a student-led technical learning initiative",
];

const sponsorshipTypes = [
  { type: "Monetary sponsorship", description: "Cash support for event operations" },
  { type: "Product subscriptions", description: "Software licenses for participants" },
  { type: "Goodies & merchandise", description: "Swag for winners and participants" },
  { type: "Discount coupons", description: "Free trials for your products" },
];

const idealFor = [
  { icon: Rocket, label: "Product-based startups" },
  { icon: Building2, label: "SaaS companies" },
  { icon: Target, label: "Developer tools & platforms" },
  { icon: GraduationCap, label: "EdTech companies" },
];

const Sponsors = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="container-tight relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Call for Sponsors
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Partner with <span className="gradient-text">AlgoHeist 2026</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Connect with talented student developers and gain meaningful visibility 
              in a focused, technically skilled community.
            </p>
            <a href="mailto:binarybrains.dit@gmail.com">
              <Button variant="hero" size="xl">
                Contact for Sponsorship
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About AlgoHeist */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                About the Event
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                What is AlgoHeist?
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                AlgoHeist is a competitive Data Structures and Algorithms (DSA) coding event 
                designed to test participants on real-world algorithmic thinking and problem-solving skills.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The contest focuses on core DSA concepts such as arrays, strings, hashing, recursion, 
                trees, graphs, dynamic programming, and logical optimization. The event attracts 
                motivated engineering students and early-career developers preparing for technical 
                roles and interviews.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="card-elevated p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-display font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Expected Participants</div>
              </div>
              <div className="card-elevated p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-display font-bold text-foreground">10K+</div>
                <div className="text-sm text-muted-foreground">Social Media Reach</div>
              </div>
              <div className="card-elevated p-6 text-center col-span-2">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-display font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Tech-Focused Audience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="section-padding bg-muted/30">
        <div className="container-tight">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Target Audience
            </h2>
            <p className="text-muted-foreground">Who you'll be reaching</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "Engineering Students (CS, IT, AI, DS)",
              "Competitive Programmers",
              "Aspiring Software Engineers",
              "Developers Preparing for Interviews",
            ].map((audience) => (
              <div key={audience} className="card-elevated p-4 text-center">
                <span className="text-sm font-medium text-foreground">{audience}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sponsor */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Why Sponsor AlgoHeist?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sponsoring AlgoHeist provides companies with direct access to a focused and 
              technically skilled student developer community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Types */}
      <section className="section-padding bg-muted/30">
        <div className="container-tight">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Sponsorship Options
            </h2>
            <p className="text-muted-foreground">We're open to multiple forms of sponsorship</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {sponsorshipTypes.map((item) => (
              <div key={item.type} className="card-elevated p-6 text-center">
                <h3 className="font-display font-semibold text-foreground mb-2">{item.type}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Ideal For
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {idealFor.map((item) => (
              <div key={item.label} className="card-elevated p-6 text-center">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <span className="font-medium text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-muted/30">
        <div className="container-tight">
          <div className="card-elevated p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              For sponsorship discussions or customized partnership packages, reach out to our team.
            </p>

            <div className="space-y-4 mb-8">
              <div className="text-center">
                <p className="font-display font-semibold text-lg text-foreground">Harshil Bohra</p>
                <p className="text-muted-foreground">Organizer – AlgoHeist 2026</p>
              </div>
              <a
                href="mailto:binarybrains.dit@gmail.com"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <Mail className="h-4 w-4" />
                binarybrains.dit@gmail.com
              </a>
            </div>

            <a href="mailto:binarybrains.dit@gmail.com">
              <Button variant="hero" size="xl">
                Contact for Sponsorship
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sponsors;
