import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Message, Suggestion } from "@/types/chatbot";
import { detectIntent, getResponse } from "@/utils/chatMatcher";
import { useContactModal } from "@/context/ContactModalContext";

// ─── Helpers ──────────────────────────────────────────────────────────
function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

/** Very minimal markdown-to-HTML: bold and line breaks. */
function renderMd(text: string) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="underline text-blue-400 hover:text-blue-300">$1</a>')
    .replace(/\n/g, "<br/>");
}

// ─── Typing dots component ───────────────────────────────────────────
function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-[6px] h-[6px] rounded-full bg-gray-400"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  );
}

// ─── Initial message ─────────────────────────────────────────────────
const welcomeMessage: Message = {
  id: "welcome",
  role: "assistant",
  content:
    "Hi 👋\n\nI'm Nishant's portfolio assistant.\n\nI can help you explore his work, skills, services and process.\n\nWhat would you like to know?",
  timestamp: Date.now(),
  suggestions: [
    { label: "What services do you offer?", intent: "services" },
    { label: "Show me your projects", intent: "projects" },
    { label: "What technologies do you use?", intent: "skills" },
    { label: "How does your process work?", intent: "process" },
    { label: "What does a website cost?", intent: "pricing" },
    { label: "How can I contact you?", intent: "contact" },
  ],
};

// ─── ChatBot component ───────────────────────────────────────────────
export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([welcomeMessage]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { openModal } = useContactModal();

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 400);
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const processMessage = useCallback(
    (text: string, intentOverride?: string) => {
      // Add user message
      const userMsg: Message = {
        id: uid(),
        role: "user",
        content: text,
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setIsTyping(true);

      // Detect intent — use override if clicking a suggestion
      const intent = intentOverride
        ? (intentOverride as any)
        : detectIntent(text);
      const response = getResponse(intent);

      // Simulate typing delay (0.5–0.9s)
      const delay = 500 + Math.random() * 400;
      setTimeout(() => {
        const assistantMsg: Message = {
          id: uid(),
          role: "assistant",
          content: response.content,
          timestamp: Date.now(),
          suggestions: response.suggestions,
          projectCards: response.projectCards,
        };
        setMessages((prev) => [...prev, assistantMsg]);
        setIsTyping(false);
      }, delay);
    },
    []
  );

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || trimmed.length > 500 || isTyping) return;
    processMessage(trimmed);
  };

  const handleSuggestionClick = (suggestion: Suggestion) => {
    if (isTyping) return;
    if (suggestion.intent === "contact") {
      setIsOpen(false);
      openModal();
      return;
    }
    processMessage(suggestion.label, suggestion.intent);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  // ─── Render ───────────────────────────────────────────────────────
  return (
    <>
      {/* ── Floating button ──────────────────────────────────────── */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setIsOpen(true)}
            aria-label="Open chat assistant"
            className="fixed bottom-6 right-6 z-[200] flex items-center gap-2.5 bg-[#111111] text-white pl-4 pr-5 py-3 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.35)] transition-shadow cursor-pointer"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {/* Sparkle icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.8-6.3 4.8 2.3-7.4-6-4.6h7.6z" />
            </svg>
            <span className="text-sm font-medium tracking-wide">
              Ask Nishant
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Chat window ──────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-6 right-6 z-[200]
              w-[calc(100vw-24px)] max-w-[420px]
              h-[calc(100vh-24px)] max-h-[620px]
              md:w-[420px] md:h-[620px]
              bg-white rounded-[24px] shadow-[0_24px_80px_rgba(0,0,0,0.18)]
              flex flex-col overflow-hidden border border-gray-100"
            role="dialog"
            aria-label="Portfolio assistant chat"
          >
            {/* ── Header ─────────────────────────────────────────── */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 shrink-0">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/image copy 36.png"
                  alt="N"
                  className="w-9 h-9 object-contain rounded-xl"
                />
                <div>
                  <h3
                    className="text-[15px] font-semibold text-gray-900 leading-tight"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Nishant Assistant
                  </h3>
                  <p
                    className="text-[12px] text-gray-400 leading-tight"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Explore my work
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-500"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* ── Messages ───────────────────────────────────────── */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-4 scroll-smooth"
              style={{ scrollbarWidth: "thin", scrollbarColor: "#d1d5db transparent" }}
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`flex flex-col ${
                    msg.role === "user" ? "items-end" : "items-start"
                  }`}
                >
                  {/* Bubble */}
                  <div
                    className={`max-w-[85%] rounded-[18px] px-4 py-3 text-[14px] leading-relaxed ${
                      msg.role === "user"
                        ? "bg-[#111111] text-white rounded-br-md"
                        : "bg-[#f3f6f9] text-gray-800 rounded-bl-md"
                    }`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: renderMd(msg.content) }}
                  />

                  {/* Project cards */}
                  {msg.projectCards && msg.projectCards.length > 0 && (
                    <div className="mt-3 flex flex-col gap-2 w-full max-w-[85%]">
                      {msg.projectCards.slice(0, 5).map((p) => (
                        <a
                          key={p.title}
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block bg-white border border-gray-200 rounded-2xl p-3.5 hover:border-blue-300 hover:shadow-md transition-all group"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span
                              className="font-semibold text-gray-900 text-[13px]"
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                              {p.title}
                            </span>
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-gray-300 group-hover:text-blue-500 transition-colors"
                            >
                              <line x1="7" y1="17" x2="17" y2="7" />
                              <polyline points="7 7 17 7 17 17" />
                            </svg>
                          </div>
                          <span className="text-[11px] text-blue-500 font-medium bg-blue-50 px-2 py-0.5 rounded-full">
                            {p.category}
                          </span>
                          <p
                            className="text-gray-500 text-[12px] mt-1.5 leading-relaxed line-clamp-2"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {p.description}
                          </p>
                        </a>
                      ))}
                    </div>
                  )}

                  {/* Suggestion pills */}
                  {msg.suggestions && msg.suggestions.length > 0 && (
                    <div className="mt-2.5 flex flex-wrap gap-1.5 max-w-[85%]">
                      {msg.suggestions.map((s) => (
                        <button
                          key={s.label}
                          onClick={() => handleSuggestionClick(s)}
                          disabled={isTyping}
                          className="bg-white border border-gray-200 text-gray-700 text-[12px] font-medium px-3 py-1.5 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start"
                >
                  <div className="bg-[#f3f6f9] rounded-[18px] rounded-bl-md">
                    <TypingDots />
                  </div>
                </motion.div>
              )}
            </div>

            {/* ── Input ──────────────────────────────────────────── */}
            <form
              onSubmit={handleSubmit}
              className="shrink-0 border-t border-gray-100 px-4 py-3 flex items-end gap-2"
            >
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value.slice(0, 500))}
                onKeyDown={handleKeyDown}
                placeholder="Ask me something..."
                rows={1}
                aria-label="Type your message"
                className="flex-1 resize-none bg-[#f3f6f9] rounded-2xl px-4 py-2.5 text-[14px] text-gray-900 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-blue-100 transition-all max-h-[80px] overflow-y-auto"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  scrollbarWidth: "none",
                }}
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                aria-label="Send message"
                className="w-9 h-9 rounded-full bg-[#111111] text-white flex items-center justify-center shrink-0 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
