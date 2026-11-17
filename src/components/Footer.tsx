import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Linkedin, Twitter, Youtube, Instagram, Facebook } from "lucide-react";
import cybaemLogo from "@/assets/cybaem-logo.png";
import { solutionsColumns, industriesDropdownItems, aboutDropdownItems } from "./Navbar";

interface FooterProps {
  variant?: "default" | "dark";
}

// Flat list of the 9 solutions from Navbar
const footerSolutions = solutionsColumns.flatMap((col) => col.items);

const Footer = ({ variant = "default" }: FooterProps) => {
  if (variant === "dark") {
    return (
      <footer className="bg-[#07152B] text-white pt-16 pb-12 border-t border-slate-800 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
            {/* Col 1: Logo & Mission & Contact */}
            <div className="sm:col-span-2 lg:col-span-4">
              <div className="flex items-center gap-2 mb-4">
                <img
                  src={cybaemLogo}
                  alt="Cybaem Tech"
                  className="h-9 w-auto brightness-0 invert"
                  width={180}
                  height={36}
                />
              </div>
              <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
                ISO-certified global technology and digital growth partner delivering enterprise software, cloud security, and AI-driven performance marketing.
              </p>

              <address className="not-italic text-xs text-slate-400 space-y-2 mb-6">
                <div className="flex items-start gap-2.5">
                  <MapPin size={15} className="text-slate-500 shrink-0 mt-0.5" />
                  <span>Office 304, Suratwala Mark Plazzo, Hinjewadi, Pune, Maharashtra 411057, India</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail size={15} className="text-slate-500 shrink-0" />
                  <a href="mailto:sales@cybaemtech.com" className="hover:text-white transition-colors">sales@cybaemtech.com</a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone size={15} className="text-slate-500 shrink-0" />
                  <a href="tel:+919028541383" className="hover:text-white transition-colors">+91-9028541383</a>
                  <span>·</span>
                  <a href="tel:+912069010200" className="hover:text-white transition-colors">020 2069010200</a>
                </div>
              </address>

              {/* Social icons */}
              <div className="flex items-center gap-2.5 text-slate-400">
                <a
                  href="https://www.linkedin.com/company/cybaemtech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
                >
                  <Linkedin size={15} />
                </a>
                <a
                  href="https://x.com/Cybaem_Tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-slate-700 hover:text-white flex items-center justify-center transition-colors"
                >
                  <Twitter size={15} />
                </a>
                <a
                  href="https://www.youtube.com/@cybaemtech"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-red-600 hover:text-white flex items-center justify-center transition-colors"
                >
                  <Youtube size={15} />
                </a>
                <a
                  href="https://www.instagram.com/cybaemtech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-pink-600 hover:text-white flex items-center justify-center transition-colors"
                >
                  <Instagram size={15} />
                </a>
                <a
                  href="https://www.facebook.com/cybaemtech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors"
                >
                  <Facebook size={15} />
                </a>
              </div>
            </div>

            {/* Col 2: Our Solutions (from Navbar) */}
            <div className="lg:col-span-3">
              <h4 className="text-sm font-bold text-white mb-4 tracking-wide uppercase text-[12px]">
                Our Solutions
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                {footerSolutions.map((item) => (
                  <li key={item.title}>
                    <Link to={item.href} className="hover:text-white transition-colors block leading-relaxed">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Industries (from Navbar) */}
            <div className="lg:col-span-3">
              <h4 className="text-sm font-bold text-white mb-4 tracking-wide uppercase text-[12px]">
                Industries
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                {industriesDropdownItems.map((item) => (
                  <li key={item.title}>
                    <Link to={item.href} className="hover:text-white transition-colors block leading-relaxed">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Company & Navigation */}
            <div className="lg:col-span-2">
              <h4 className="text-sm font-bold text-white mb-4 tracking-wide uppercase text-[12px]">
                Company
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                {aboutDropdownItems.map((item) => (
                  <li key={item.title}>
                    <Link to={item.href} className="hover:text-white transition-colors block leading-relaxed">
                      {item.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/portfolio" className="hover:text-white transition-colors block leading-relaxed">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition-colors block leading-relaxed">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright & Legal Links */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
            <div>© {new Date().getFullYear()} Cybaem Tech Pvt. Ltd. All rights reserved.</div>
            <div className="flex flex-wrap items-center gap-3 sm:gap-5">
              <Link to="/privacy-policy" className="hover:text-slate-200 transition-colors">Privacy Policy</Link>
              <span>|</span>
              <Link to="/terms-of-service" className="hover:text-slate-200 transition-colors">Terms of Service</Link>
              <span>|</span>
              <Link to="/cookie-policy" className="hover:text-slate-200 transition-colors">Cookie Policy</Link>
              <span>|</span>
              <Link to="/refund-cancellation-policy" className="hover:text-slate-200 transition-colors">Refund Policy</Link>
              <span>|</span>
              <Link to="/accessibility" className="hover:text-slate-200 transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  // Default Variant (Light / Theme background)
  return (
    <footer className="border-t border-border/80 py-16 bg-[#fafcff] text-foreground font-sans">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Col 1: Brand & Contact Info */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link to="/" className="inline-block mb-4">
              <img
                src={cybaemLogo}
                alt="Cybaem Tech"
                className="h-10 w-auto"
                width={180}
                height={40}
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mb-6">
              ISO-certified global technology partner delivering enterprise software, cloud security, and digital growth solutions.
            </p>

            <address className="not-italic text-xs text-muted-foreground leading-relaxed space-y-2 mb-6">
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-primary shrink-0 mt-0.5" />
                <span>Office 304, Suratwala Mark Plazzo, Hinjewadi, Pune, Maharashtra 411057, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-primary shrink-0" />
                <a href="mailto:sales@cybaemtech.com" className="hover:text-foreground transition-colors">sales@cybaemtech.com</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-primary shrink-0" />
                <a href="tel:+919028541383" className="hover:text-foreground transition-colors">+91-9028541383</a>
                <span>·</span>
                <a href="tel:+912069010200" className="hover:text-foreground transition-colors">020 2069010200</a>
              </div>
            </address>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 text-muted-foreground">
              <a
                href="https://www.linkedin.com/company/cybaemtech/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="https://x.com/Cybaem_Tech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-800 hover:text-white flex items-center justify-center transition-colors"
              >
                <Twitter size={15} />
              </a>
              <a
                href="https://www.youtube.com/@cybaemtech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-red-600 hover:text-white flex items-center justify-center transition-colors"
              >
                <Youtube size={15} />
              </a>
              <a
                href="https://www.instagram.com/cybaemtech/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-pink-600 hover:text-white flex items-center justify-center transition-colors"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://www.facebook.com/cybaemtech/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors"
              >
                <Facebook size={15} />
              </a>
            </div>
          </div>

          {/* Col 2: Our Solutions (from Navbar) */}
          <div className="lg:col-span-3">
            <h3 className="font-display font-bold text-slate-900 text-sm mb-4 tracking-wide uppercase text-[12px]">
              Our Solutions
            </h3>
            <nav className="space-y-2.5">
              {footerSolutions.map((s) => (
                <Link
                  key={s.title}
                  to={s.href}
                  className="block text-xs sm:text-[13px] text-muted-foreground hover:text-primary transition-colors leading-relaxed"
                >
                  {s.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3: Industries (from Navbar) */}
          <div className="lg:col-span-3">
            <h3 className="font-display font-bold text-slate-900 text-sm mb-4 tracking-wide uppercase text-[12px]">
              Industries
            </h3>
            <nav className="space-y-2.5">
              {industriesDropdownItems.map((ind) => (
                <Link
                  key={ind.title}
                  to={ind.href}
                  className="block text-xs sm:text-[13px] text-muted-foreground hover:text-primary transition-colors leading-relaxed"
                >
                  {ind.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 4: Company & Navigation */}
          <div className="lg:col-span-2">
            <h3 className="font-display font-bold text-slate-900 text-sm mb-4 tracking-wide uppercase text-[12px]">
              Company
            </h3>
            <nav className="space-y-2.5">
              {aboutDropdownItems.map((it) => (
                <Link
                  key={it.title}
                  to={it.href}
                  className="block text-xs sm:text-[13px] text-muted-foreground hover:text-primary transition-colors leading-relaxed"
                >
                  {it.title}
                </Link>
              ))}
              <Link
                to="/portfolio"
                className="block text-xs sm:text-[13px] text-muted-foreground hover:text-primary transition-colors leading-relaxed"
              >
                Portfolio
              </Link>
              <Link
                to="/contact"
                className="block text-xs sm:text-[13px] text-muted-foreground hover:text-primary transition-colors leading-relaxed"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-border/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <span className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Cybaem Tech Pvt. Ltd. All rights reserved.
          </span>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link to="/privacy-policy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookie-policy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
            <Link to="/refund-cancellation-policy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Refund Policy
            </Link>
            <Link to="/accessibility" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
