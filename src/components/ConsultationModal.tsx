import React, { useEffect } from "react";
import { X, ArrowRight } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const googleCalendarUrl = "https://calendar.app.google/j4S7F6maThRjSfrY7";
  const microsoftBookingsUrl = "https://bookings.cloud.microsoft/book/ScheduleaConsultationwithCybaemTech1@cybaemtech.com/s/qIzFTeYQw0KQHzyhc4Ufrw2?ismsaljsauthenabled";

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-[470px] bg-white dark:bg-[#0c1322] border border-slate-200/80 dark:border-slate-800 rounded-2xl shadow-2xl px-5 py-5 sm:px-6 sm:py-5 z-10 animate-in zoom-in-95 fade-in duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-3.5 top-3.5 p-1 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Top Calendar Icon */}
        <div className="w-12 h-12 rounded-full bg-[#eef4ff] dark:bg-blue-950/60 flex items-center justify-center mx-auto mb-2.5 shadow-xs">
          <svg
            className="w-7 h-7 text-[#2563eb]"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="3" y="4" width="18" height="17" rx="3.5" fill="#2563eb" />
            <path d="M3 8.5H21" stroke="white" strokeWidth="1.2" />
            <circle cx="7.5" cy="12.5" r="1.1" fill="white" />
            <circle cx="12" cy="12.5" r="1.1" fill="white" />
            <circle cx="16.5" cy="12.5" r="1.1" fill="white" />
            <circle cx="7.5" cy="16.5" r="1.1" fill="white" />
            <circle cx="12" cy="16.5" r="1.1" fill="white" />
            <circle cx="16.5" cy="16.5" r="1.1" fill="white" />
          </svg>
        </div>

        {/* Title and Subtitle */}
        <div className="text-center mb-4">
          <h3
            id="modal-title"
            className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-1"
          >
            Book a Consultation
          </h3>
          <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 max-w-[300px] mx-auto leading-snug">
            Choose your preferred calendar platform to schedule a meeting with our team.
          </p>
        </div>

        {/* Booking Option Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Google Calendar Option */}
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="group flex items-center justify-between px-3.5 py-2.5 sm:py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:bg-slate-50 dark:hover:bg-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium block leading-none">
                  Book via
                </span>
                <span className="text-xs sm:text-[13px] font-semibold text-slate-900 dark:text-white block leading-tight mt-0.5 whitespace-nowrap">
                  Google Calendar
                </span>
              </div>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
          </a>

          {/* Microsoft Bookings Option */}
          <a
            href={microsoftBookingsUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="group flex items-center justify-between px-3.5 py-2.5 sm:py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:bg-slate-50 dark:hover:bg-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 flex items-center justify-center shrink-0">
                <svg className="w-4.5 h-4.5" viewBox="0 0 23 23">
                  <path fill="#f35325" d="M1 1h10v10H1z" />
                  <path fill="#81bc06" d="M12 1h10v10H12z" />
                  <path fill="#05a6f0" d="M1 12h10v10H1z" />
                  <path fill="#ffba08" d="M12 12h10v10H12z" />
                </svg>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium block leading-none">
                  Book via
                </span>
                <span className="text-xs sm:text-[13px] font-semibold text-slate-900 dark:text-white block leading-tight mt-0.5 whitespace-nowrap">
                  Microsoft Bookings
                </span>
              </div>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConsultationModal;
