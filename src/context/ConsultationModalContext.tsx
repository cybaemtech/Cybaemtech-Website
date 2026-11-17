import React, { createContext, useContext, useState, useCallback } from "react";
import ConsultationModal from "@/components/ConsultationModal";

interface ConsultationModalContextType {
  isOpen: boolean;
  openConsultationModal: () => void;
  closeConsultationModal: () => void;
}

const ConsultationModalContext = createContext<ConsultationModalContextType | undefined>(undefined);

export const ConsultationModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openConsultationModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeConsultationModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <ConsultationModalContext.Provider
      value={{
        isOpen,
        openConsultationModal,
        closeConsultationModal,
      }}
    >
      {children}
      <ConsultationModal isOpen={isOpen} onClose={closeConsultationModal} />
    </ConsultationModalContext.Provider>
  );
};

export const useConsultationModal = () => {
  const context = useContext(ConsultationModalContext);
  if (!context) {
    throw new Error("useConsultationModal must be used within a ConsultationModalProvider");
  }
  return context;
};
