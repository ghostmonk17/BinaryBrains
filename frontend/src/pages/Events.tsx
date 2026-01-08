import Layout from "@/components/layout/Layout";
import { Calendar, MapPin, Users, Trophy } from "lucide-react";

const pastEvents = [
  {
    title: "DSA Bootcamp 2025",
    date: "November 2025",
    description: "A 2-week intensive bootcamp covering arrays, trees, graphs, and dynamic programming.",
    attendees: 150,
    type: "Workshop",
  },
  {
    title: "Web Dev Weekend",
    date: "October 2025",
    description: "48-hour hackathon building full-stack applications with React and Node.js.",
    attendees: 80,
    type: "Hackathon",
  },
  {
    title: "AI/ML Workshop Series",
    date: "September 2025",
    description: "Introduction to machine learning, neural networks, and practical applications.",
    attendees: 120,
    type: "Workshop",
  },
  {
    title: "Open Source Contribution Drive",
    date: "August 2025",
    description: "Month-long initiative to contribute to popular open source projects.",
    attendees: 60,
    type: "Initiative",
  },
  {
    title: "CodeSprint 2025",
    date: "July 2025",
    description: "Competitive programming contest with prizes worth ₹50,000.",
    attendees: 200,
    type: "Contest",
  },
  {
    title: "Tech Talk: Industry Insights",
    date: "June 2025",
    description: "Guest speakers from Google, Microsoft, and startups shared their experiences.",
    attendees: 180,
    type: "Talk",
  },
];

const upcomingEvents = [
  {
    title: "AlgoHeist 2026",
    date: "28th February 2026",
    location: "DIT Pune, Campus",
    description: "Our flagship DSA coding competition with exciting prizes and opportunities.",
    featured: true,
  },
  {
    title: "Web3 Workshop",
    date: "March 2026",
    location: "Online",
    description: "Introduction to blockchain development and smart contracts.",
    featured: false,
  },
];

const Events = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-muted/30">
        <div className="container-tight">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Events & Achievements
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Learn, Build, <span className="gradient-text">Compete</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              From workshops to hackathons, we organize events that help our members grow
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding">
        <div className="container-tight">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
            Upcoming Events
          </h2>

          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className={`card-elevated p-6 md:p-8 ${
                  event.featured ? "border-primary/30 bg-primary/[0.02]" : ""
                }`}
              >
                {event.featured && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                    <Trophy className="h-3 w-3" />
                    Featured Event
                  </div>
                )}
                <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-2">
                  {event.title}
                </h3>
                <p className="text-muted-foreground mb-4">{event.description}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 text-foreground">
                    <Calendar className="h-4 w-4 text-primary" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    {event.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="section-padding bg-muted/30">
        <div className="container-tight">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
            Past Events
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <div
                key={event.title}
                className="card-elevated p-6"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {event.type}
                  </span>
                  <span className="text-sm text-muted-foreground">{event.date}</span>
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{event.description}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  {event.attendees} attendees
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
