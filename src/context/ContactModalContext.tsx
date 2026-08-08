import React, { createContext, useContext, useState, ReactNode } from 'react';

type ContactModalContextType = {
  isOpen: boolean;
  openModal: (plan?: string) => void;
  closeModal: () => void;
  selectedPlan?: string;
};

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);

  const openModal = (plan?: string) => {
    setSelectedPlan(plan);
    setIsOpen(true);
  };
  
  const closeModal = () => setIsOpen(false);

  return (
    <ContactModalContext.Provider value={{ isOpen, openModal, closeModal, selectedPlan }}>
      {children}
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error('useContactModal must be used within a ContactModalProvider');
  }
  return context;
}
