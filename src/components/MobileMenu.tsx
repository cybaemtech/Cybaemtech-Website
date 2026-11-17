import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, Home, X } from "lucide-react";
import { motion } from "framer-motion";

import { solutionsColumns, aboutDropdownItems, industriesDropdownItems } from "./Navbar";
import { useConsultationModal } from "@/context/ConsultationModalContext";

interface HamburgerProps {
  isOpen: boolean;
  toggle: () => void;
}

export const AnimatedHamburger = ({ isOpen, toggle }: HamburgerProps) => (
  <button
    onClick={toggle}
    className="md:hidden relative w-10 h-10 flex items-center justify-center z-[60]"
    aria-label={isOpen ? "Close menu" : "Open menu"}
  >
    <div className="w-6 h-5 relative flex flex-col justify-between">
      <span
        className="block h-[2px] w-full bg-foreground rounded-full origin-left transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
        style={isOpen ? { transform: "rotate(45deg) translate(2px, -1px)" } : {}}
      />
      <span
        className="block h-[2px] w-full bg-foreground rounded-full transition-all duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
        style={isOpen ? { opacity: 0, transform: "translateX(20px)" } : {}}
      />
      <span
        className="block h-[2px] w-full bg-foreground rounded-full origin-left transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
        style={isOpen ? { transform: "rotate(-45deg) translate(2px, 1px)" } : {}}
      />
    </div>
  </button>
);

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const { openConsultationModal } = useConsultationModal();
  const [solutionsExpanded, setSolutionsExpanded] = useState(false);
  const [aboutExpanded, setAboutExpanded] = useState(false);
  const [industriesExpanded, setIndustriesExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Two-phase: mount first, then animate in on next frame
  useEffect(() => {
    if (isOpen) {
      setMounted(true);
    }
  }, [isOpen]);

  const handleTransitionEnd = () => {
    if (!isOpen) {
      setMounted(false);
      setSolutionsExpanded(false);
      setAboutExpanded(false);
      setIndustriesExpanded(false);
    }
  };

  if (!mounted) return null;

  const visible = isOpen && mounted;

  return (
    <>
      {/* Overlay - pure CSS fade */}
      <div
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
        style={{ opacity: visible ? 1 : 0 }}
        onClick={onClose}
        onTransitionEnd={handleTransitionEnd}
      />

      {/* Panel - CSS transform slide */}
      <div
        className="fixed top-0 right-0 bottom-0 z-50 w-[85%] max-w-sm bg-background border-l border-border shadow-2xl flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] will-change-transform"
        style={{ transform: visible ? "translateX(0)" : "translateX(100%)" }}
      >
        {/* Top Header with Close (Cross) Button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <span className="text-xs font-bold tracking-[0.16em] uppercase text-muted-foreground/70">
            Menu
          </span>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex-1 px-6 overflow-y-auto">
          {/* Home link */}
          <div
            className="transition-opacity duration-300 ease-out"
            style={{
              opacity: visible ? 1 : 0,
              transitionDelay: visible ? "80ms" : "0ms",
            }}
          >
            <Link
              to="/"
              onClick={onClose}
              className="flex items-center gap-3 py-4 border-b border-border font-display text-lg font-semibold text-foreground hover:text-primary transition-colors"
            >
              <Home size={20} className="text-primary" />
              Home
            </Link>
          </div>

          {/* Solutions accordion */}
          <div
            className="transition-opacity duration-300 ease-out"
            style={{
              opacity: visible ? 1 : 0,
              transitionDelay: visible ? "120ms" : "0ms",
            }}
          >
            <button
              onClick={() => setSolutionsExpanded(!solutionsExpanded)}
              className="w-full flex items-center justify-between py-4 border-b border-border"
            >
              <span className="font-display text-lg font-semibold text-foreground">Our Solutions</span>
              <ChevronDown
                size={18}
                className="text-muted-foreground transition-transform duration-250 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                style={{ transform: solutionsExpanded ? "rotate(180deg)" : "rotate(0deg)" }}
              />
            </button>

            <div
              className="overflow-hidden transition-[max-height,opacity] duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
              style={{
                maxHeight: solutionsExpanded ? "1200px" : "0px",
                opacity: solutionsExpanded ? 1 : 0,
              }}
            >
              <div className="py-2 pl-4 space-y-5">
                {solutionsColumns.map((col) => (
                  <div key={col.label} className="border-b border-border/40 pb-4 last:border-b-0">
                    <span className="text-xs font-semibold tracking-[0.1em] uppercase text-muted-foreground/70 mb-2 block">
                      {col.label}
                    </span>
                    <div className="space-y-1">
                      {col.items.map((it) => (
                        <Link
                          key={it.title}
                          to={(it as any).href || `/solutions/${it.slug}`}
                          onClick={onClose}
                          className="flex items-center gap-2 py-2 text-sm text-foreground/80 hover:text-primary transition-colors"
                        >
                          <it.icon size={15} className="text-muted-foreground shrink-0" />
                          <span>{it.title}</span>
                        </Link>
                      ))}

                      {/* Explore Link for this section */}
                      <div className="pt-2">
                        <Link
                          to={col.mainHref}
                          onClick={onClose}
                          className="inline-flex items-center gap-1.5 py-1 text-[13px] font-semibold text-primary hover:text-primary/80 transition-colors group"
                        >
                          <span>{col.exploreText}</span>
                          <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Industries accordion */}
          <div
            className="transition-opacity duration-300 ease-out"
            style={{
              opacity: visible ? 1 : 0,
              transitionDelay: visible ? "160ms" : "0ms",
            }}
          >
            <button
              onClick={() => setIndustriesExpanded(!industriesExpanded)}
              className="w-full flex items-center justify-between py-4 border-b border-border"
            >
              <span className="font-display text-lg font-semibold text-foreground">Industries</span>
              <ChevronDown
                size={18}
                className="text-muted-foreground transition-transform duration-250 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                style={{ transform: industriesExpanded ? "rotate(180deg)" : "rotate(0deg)" }}
              />
            </button>

            <div
              className="overflow-hidden transition-[max-height,opacity] duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
              style={{
                maxHeight: industriesExpanded ? "800px" : "0px",
                opacity: industriesExpanded ? 1 : 0,
              }}
            >
              <div className="py-2 pl-4 space-y-1">
                {industriesDropdownItems.map((it) => (
                  <Link
                    key={it.title}
                    to={it.href}
                    onClick={onClose}
                    className="flex items-center gap-2.5 py-2.5 text-sm text-foreground/80 hover:text-primary transition-colors"
                  >
                    <it.icon size={15} className="text-muted-foreground shrink-0" />
                    <span>{it.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Portfolio link */}
          <div
            className="transition-opacity duration-300 ease-out"
            style={{
              opacity: visible ? 1 : 0,
              transitionDelay: visible ? "200ms" : "0ms",
            }}
          >
            <Link
              to="/portfolio"
              onClick={onClose}
              className="block py-4 border-b border-border font-display text-lg font-semibold text-foreground hover:text-primary transition-colors"
            >
              Portfolio
            </Link>
          </div>

          {/* About Us accordion */}
          <div
            className="transition-opacity duration-300 ease-out"
            style={{
              opacity: visible ? 1 : 0,
              transitionDelay: visible ? "240ms" : "0ms",
            }}
          >
            <button
              onClick={() => setAboutExpanded(!aboutExpanded)}
              className="w-full flex items-center justify-between py-4 border-b border-border"
            >
              <span className="font-display text-lg font-semibold text-foreground">About Us</span>
              <ChevronDown
                size={18}
                className="text-muted-foreground transition-transform duration-250 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                style={{ transform: aboutExpanded ? "rotate(180deg)" : "rotate(0deg)" }}
              />
            </button>

            <div
              className="overflow-hidden transition-[max-height,opacity] duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
              style={{
                maxHeight: aboutExpanded ? "600px" : "0px",
                opacity: aboutExpanded ? 1 : 0,
              }}
            >
              <div className="py-2 pl-4 space-y-1">
                {aboutDropdownItems.map((it) => (
                  <Link
                    key={it.title}
                    to={it.href}
                    onClick={onClose}
                    className="flex items-center gap-2.5 py-2.5 text-sm text-foreground/80 hover:text-primary transition-colors"
                  >
                    <it.icon size={15} className="text-muted-foreground shrink-0" />
                    <span>{it.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Us link */}
          <div
            className="transition-opacity duration-300 ease-out"
            style={{
              opacity: visible ? 1 : 0,
              transitionDelay: visible ? "280ms" : "0ms",
            }}
          >
            <Link
              to="/contact"
              onClick={onClose}
              className="block py-4 border-b border-border font-display text-lg font-semibold text-foreground hover:text-primary transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </nav>

        {/* Bottom CTA */}
        <div
          className="p-6 border-t border-border transition-opacity duration-300 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transitionDelay: visible ? "280ms" : "0ms",
          }}
        >
          <button
            type="button"
            onClick={() => {
              onClose();
              openConsultationModal();
            }}
            className="flex items-center justify-center gap-2 w-full px-6 py-3.5 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
          >
            Book a Consultation
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
