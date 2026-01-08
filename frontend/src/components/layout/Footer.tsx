import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Events", path: "/events" },
  ];

  const hackathonLinks = [
    { name: "AlgoHeist 2026", path: "/hackathon" },
    { name: "Register", path: "/hackathon#register" },
    { name: "Sponsors", path: "/sponsors" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/binarybrains-dit", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/company/binarybrains-dit", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/binarybrains_dit", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/binarybrains.dit", label: "Instagram" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container-tight section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="BinaryBrains" className="h-10 w-10 rounded-lg bg-background p-1" />
              <span className="font-display font-bold text-xl">BinaryBrains</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              The premier tech club at Dr. D. Y. Patil Institute of Technology, Pune.
              Building tomorrow's developers today.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-background/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hackathon */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">AlgoHeist 2026</h4>
            <ul className="space-y-3">
              {hackathonLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-background/70">
              <a
                href="mailto:binarybrains.dit@gmail.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                binarybrains.dit@gmail.com
              </a>
              <p>
                Dr. D. Y. Patil Institute of Technology,
                <br />
                Pune, Maharashtra, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © 2026 BinaryBrains DIT. All rights reserved.
          </p>
          <p className="text-background/50 text-sm">
            Made with 🧡 by the BinaryBrains Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
