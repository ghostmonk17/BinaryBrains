  import Layout from "@/components/layout/Layout";
import { Target, Eye, Heart, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We encourage creative thinking and novel approaches to problem-solving.",
    },
    {
      icon: Heart,
      title: "Community",
      description: "Building a supportive environment where everyone can learn and grow together.",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Striving for the highest standards in everything we do.",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-muted/30">
        <div className="container-tight">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              We Are <span className="gradient-text">BinaryBrains</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              The premier technical club at Dr. D. Y. Patil Institute of Technology, Pune. 
              We're a community of passionate developers, innovators, and tech enthusiasts 
              working together to build the future.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="card-elevated p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-display font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To create a vibrant community of tech enthusiasts who learn, build, and 
                innovate together. We aim to bridge the gap between academic learning 
                and industry requirements by providing hands-on experience, mentorship, 
                and real-world project opportunities.
              </p>
            </div>

            {/* Vision */}
            <div className="card-elevated p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                  <Eye className="h-6 w-6 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-display font-bold text-foreground">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To become the leading student-run tech community that produces industry-ready 
                developers and innovators. We envision a future where every member has the 
                skills, network, and confidence to make a meaningful impact in the tech world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-muted/30">
        <div className="container-tight">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              What We Focus On
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our activities span across multiple domains of technology
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["DSA", "Web Dev", "AI/ML", "Web3", "Hackathons", "Open Source"].map((item) => (
              <div
                key={item}
                className="card-elevated p-4 text-center hover:border-primary/50 transition-colors"
              >
                <span className="font-display font-semibold text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div key={value.title} className="card-elevated p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
