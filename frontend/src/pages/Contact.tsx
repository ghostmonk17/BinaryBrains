import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Controlled form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const isEmailValid = (e: string) => /\S+@\S+\.\S+/.test(e);
  const isFormValid =
    name.trim() !== "" &&
    isEmailValid(email) &&
    subject.trim() !== "" &&
    message.trim() !== "";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) return;
    setIsSubmitting(true);
    // change the endpoint to your Formspree form ID
    try {
      const res = await fetch("https://formspree.io/f/mlgdqkan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!res.ok) {
        const errBody = await res.json().catch(() => null);
        throw new Error(errBody?.error || "Failed to send message");
      }

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });

      // reset
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      toast({
        title: "Send failed",
        description: "Could not send your message. Try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/binarybrains-dit",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/binarybrains-dit",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/binarybrains_dit",
      label: "Twitter",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/binarybrains.dit",
      label: "Instagram",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-muted/30">
        <div className="container-tight">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions? Want to join or sponsor? We'd love to hear from
              you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card-elevated p-8">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      className="h-12"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="h-12"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    required
                    className="h-12"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  disabled={!isFormValid || isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a
                        href="mailto:binarybrains.dit@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        binarybrains.dit@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Address</p>
                      <p className="text-muted-foreground">
                        Dr. D. Y. Patil Institute of Technology,
                        <br />
                        Pimpri, Pune, Maharashtra, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="card-elevated p-6 bg-primary/5 border-primary/20">
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  Interested in Sponsoring?
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  For sponsorship inquiries, please contact our organizer
                  directly.
                </p>
                <div className="text-sm">
                  <p className="font-medium text-foreground">Harshil Bohra</p>
                  <p className="text-muted-foreground">
                    Organizer – AlgoHeist 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
