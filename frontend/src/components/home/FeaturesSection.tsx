import { Code, Brain, Globe, Rocket, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "DSA & Competitive Programming",
    description: "Master data structures and algorithms through weekly contests, study groups, and mentorship sessions.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Build modern web applications using React, Node.js, and cutting-edge technologies.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Explore the world of artificial intelligence, deep learning, and data science.",
  },
  {
    icon: Rocket,
    title: "Web3 & Blockchain",
    description: "Dive into decentralized technologies, smart contracts, and the future of the internet.",
  },
  {
    icon: Users,
    title: "Open Source",
    description: "Contribute to real-world projects and build your portfolio with meaningful contributions.",
  },
  {
    icon: Zap,
    title: "Hackathons",
    description: "Participate in and organize hackathons to solve real problems and win exciting prizes.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-tight">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Focus Areas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We cultivate expertise across multiple domains, preparing our members 
            for the challenges of the modern tech industry.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-elevated p-6 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl gradient-bg text-primary-foreground mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
