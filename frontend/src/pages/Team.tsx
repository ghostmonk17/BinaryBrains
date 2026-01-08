import Layout from "@/components/layout/Layout";
import { Github, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Harshil Bohra",
    role: "Organizer & Lead",
    image:
      "https://api.dicebear.com/7.x/initials/svg?seed=HB&backgroundColor=f97316",
    github: "https://github.com/harshilbohra",
    linkedin: "https://www.linkedin.com/in/harshilbohra/",
  },
  {
    name: "Abhishek Gaikwad",
    role: "Co-Organizer",
    image:
      "https://api.dicebear.com/7.x/initials/svg?seed=AG&backgroundColor=f97316",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
  },
  {
    name: "Sarika Pabalkar",
    role: "Faculty Coordinator",
    image:
      "https://api.dicebear.com/7.x/initials/svg?seed=SP&backgroundColor=f97316",
    github: "#",
    linkedin: "#",
  },
  {
    name: "Priya Sharma",
    role: "Technical Lead",
    image:
      "https://api.dicebear.com/7.x/initials/svg?seed=PS&backgroundColor=f97316",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
  },
  {
    name: "Abhijeet Fulpgare",
    role: "DSA Lead",
    image:
      "https://api.dicebear.com/7.x/initials/svg?seed=RV&backgroundColor=f97316",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
  },
  {
    name: "Prathmesh Alkute",
    role: "Web Dev Lead",
    image:
      "https://api.dicebear.com/7.x/initials/svg?seed=SPat&backgroundColor=f97316",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
  },
  {
    name: "Arjun Mehta",
    role: "AI/ML Lead",
    image:
      "https://api.dicebear.com/7.x/initials/svg?seed=AM&backgroundColor=f97316",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
  },
  {
    name: "Krishna Ganjewar",
    role: "Design Lead",
    image:
      "https://api.dicebear.com/7.x/initials/svg?seed=KD&backgroundColor=f97316",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
  },
];

const Team = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-muted/30">
        <div className="container-tight">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Team
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Meet the <span className="gradient-text">Brains</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              The passionate individuals driving innovation and building our
              community
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="card-elevated p-6 text-center group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover border-4 border-primary/20 group-hover:border-primary/50 transition-colors"
                  />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-4">
                  {member.role}
                </p>
                <div className="flex items-center justify-center gap-3">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
