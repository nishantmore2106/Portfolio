import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContactModal } from '@/context/ContactModalContext';
import { useToast } from "@/hooks/use-toast";

export default function ContactModal() {
  const { isOpen, closeModal, selectedPlan } = useContactModal();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      requirements: formData.get("requirements"),
      plan: selectedPlan || "N/A"
    };

    try {
      await fetch("https://script.google.com/macros/s/AKfycbyB4-zqJ84beoorQVAsBY_goB8mXdzJb6N3W09MqggPrckFs8h7tQFoVUcSHjVmRfMQ/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      toast({
        title: "Request Sent!",
        description: "We've received your details and will get back to you shortly.",
      });
      closeModal();
    } catch (error) {
      toast({
        title: "Something went wrong.",
        description: "Failed to send request. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          />
          
          {/* Modal Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-white rounded-[2rem] p-8 w-full max-w-lg shadow-2xl"
          >
            
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full flex items-center justify-center transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="mb-8 pr-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight" style={{ fontFamily: "'Inter', sans-serif" }}>
                Let's build something great.
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Fill out the form below with your project details and requirements. I'll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {selectedPlan && (
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-blue-800 font-medium">
                  You are inquiring about the <span className="font-bold">{selectedPlan}</span> plan.
                </div>
              )}
              
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5" style={{ fontFamily: "'Inter', sans-serif" }}>First Name</label>
                  <input name="firstName" required type="text" placeholder="John" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-sm text-gray-900 placeholder:text-gray-400" />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5" style={{ fontFamily: "'Inter', sans-serif" }}>Last Name</label>
                  <input name="lastName" required type="text" placeholder="Doe" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-sm text-gray-900 placeholder:text-gray-400" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5" style={{ fontFamily: "'Inter', sans-serif" }}>Email Address</label>
                <input name="email" required type="email" placeholder="john@company.com" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-sm text-gray-900 placeholder:text-gray-400" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5" style={{ fontFamily: "'Inter', sans-serif" }}>Project Requirements & Description</label>
                <textarea name="requirements" required rows={4} placeholder="Tell me about your project goals, features you need, and any timelines..." className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-sm resize-none text-gray-900 placeholder:text-gray-400" />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="mt-2 w-full bg-[#111111] hover:bg-black text-white py-4 rounded-xl font-medium text-base transition-transform active:scale-[0.98] disabled:opacity-70 disabled:pointer-events-none"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {isSubmitting ? "Sending Request..." : "Send Request"}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
