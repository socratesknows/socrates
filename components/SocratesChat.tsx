import React, { useState, useRef, useEffect } from 'react';
import { askSocrates } from '../services/geminiService';

export const SocratesChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setAnswer(null);
    try {
      const result = await askSocrates(query);
      setAnswer(result);
    } catch (e) {
      setAnswer("Silence.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)] z-50"
        aria-label="Ask Socrates"
      >
        <span className="font-bold text-lg">?</span>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
      <div className="w-full max-w-lg bg-black border border-neutral-800 p-6 rounded-none shadow-2xl relative">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-neutral-500 hover:text-white"
        >
          ✕
        </button>
        
        <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-6">
          Ask Socrates
        </h3>

        <div className="min-h-[100px] mb-6 font-mono text-sm leading-relaxed text-neutral-200">
          {loading ? (
            <span className="animate-pulse">Thinking...</span>
          ) : answer ? (
             <div className="prose prose-invert prose-sm">
               {answer}
             </div>
          ) : (
            <span className="text-neutral-600 italic">
              "The only true wisdom is in knowing you know nothing." — What is on your mind?
            </span>
          )}
        </div>

        <form onSubmit={handleSubmit} className="relative">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a question..."
            className="w-full bg-transparent border-b border-neutral-800 py-2 text-white focus:outline-none focus:border-white transition-colors font-mono text-sm"
          />
        </form>
      </div>
    </div>
  );
};
