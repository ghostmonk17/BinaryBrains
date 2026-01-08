import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Trophy, 
  Users, 
  Code2, 
  Laptop,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const timeline = [
  { phase: "Registration Opens", date: "1st February 2026", status: "upcoming" },
  { phase: "Registration Closes", date: "25th February 2026", status: "upcoming" },
  { phase: "Round 1 (Online)", date: "28th February 2026, 10:00 AM", status: "upcoming" },
  { phase: "Round 2 (Offline)", date: "28th February 2026, 3:00 PM", status: "upcoming" },
  { phase: "Results & Prize Distribution", date: "28th February 2026, 7:00 PM", status: "upcoming" },
];

const tracks = [
  "Arrays & Strings",
  "Hashing & Maps",
  "Recursion & Backtracking",
  "Trees & Graphs",
  "Dynamic Programming",
  "Greedy Algorithms",
];

const prizes = [
  { position: "1st", prize: "₹15,000 + Goodies", color: "from-yellow-400 to-orange-500" },
  { position: "2nd", prize: "₹10,000 + Goodies", color: "from-gray-300 to-gray-400" },
  { position: "3rd", prize: "₹5,000 + Goodies", color: "from-orange-300 to-orange-400" },
];

const Hackathon = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f97316' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container-tight relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Code2 className="h-4 w-4" />
              Competitive DSA Contest
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
              AlgoHeist <span className="gradient-text">2026</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Test your algorithmic prowess in our flagship coding competition. 
              Compete with the best, solve challenging problems, and win exciting prizes!
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
              <div className="flex items-center gap-2 text-foreground">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="font-medium">28th February 2026</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-medium">DIT Pune, Campus</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Clock className="h-5 w-5 text-primary" />
                <span className="font-medium">5.5 Hours Total</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" id="register">
                Register Now
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Link to="/sponsors">
                <Button variant="outline" size="xl">
                  Sponsor This Event
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Event Format */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Event Format
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="card-elevated p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Laptop className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground">Round 1</h3>
                  <p className="text-sm text-muted-foreground">Preliminary Round</p>
                </div>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Duration: 2.5 Hours
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Mode: Online
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Objective: Shortlisting top performers
                </li>
              </ul>
            </div>

            <div className="card-elevated p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground">Round 2</h3>
                  <p className="text-sm text-muted-foreground">Final Round</p>
                </div>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Duration: 3 Hours
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Mode: Offline, Proctored
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Location: DIT Pune Campus
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Tracks */}
      <section className="section-padding bg-muted/30">
        <div className="container-tight">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Problem Tracks
            </h2>
            <p className="text-muted-foreground">Topics covered in the competition</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {tracks.map((track) => (
              <div key={track} className="card-elevated p-4 text-center">
                <span className="font-medium text-foreground">{track}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prizes */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Prizes & Rewards
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {prizes.map((prize, index) => (
              <div
                key={prize.position}
                className={`card-elevated p-8 text-center ${index === 0 ? "md:-mt-4 md:mb-4" : ""}`}
              >
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${prize.color} flex items-center justify-center mx-auto mb-4`}
                >
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                  {prize.position} Place
                </h3>
                <p className="text-lg text-primary font-semibold">{prize.prize}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-8">
            + Certificates for all participants • Goodies from sponsors • Networking opportunities
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-muted/30">
        <div className="container-tight">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Event Timeline
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            {timeline.map((item, index) => (
              <div key={item.phase} className="flex gap-4 pb-8 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                  {index !== timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-primary/20 mt-2" />
                  )}
                </div>
                <div className="pb-4">
                  <h4 className="font-display font-semibold text-foreground">{item.phase}</h4>
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="card-elevated p-8 md:p-12 text-center gradient-bg">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-4">
              Ready to Test Your Skills?
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
              Register now and compete with the best programmers. Limited spots available!
            </p>
            <Button variant="secondary" size="xl" className="bg-white text-primary hover:bg-white/90">
              Register Now
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Hackathon;
