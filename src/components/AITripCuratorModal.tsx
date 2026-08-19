import React, { useState } from 'react';
import { X, Sparkles, Send, Bot, User, Compass, Bookmark, Check, Train, ArrowRight } from 'lucide-react';
import { STATES_DATA } from '../data/statesData';
import { StateData } from '../types';

interface AITripCuratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialState?: StateData | null;
  onSelectState: (state: StateData) => void;
}

interface Message {
  role: 'assistant' | 'user';
  text: string;
  suggestedStates?: string[];
}

export const AITripCuratorModal: React.FC<AITripCuratorModalProps> = ({
  isOpen,
  onClose,
  initialState,
  onSelectState,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      text: initialState
        ? `Namaste! I am your Incredible India Cultural Concierge. How can I assist you with your exploration of ${initialState.name} and its famed ${initialState.craft.name}?`
        : `Namaste! I am your Incredible India Cultural Concierge. Tell me your travel dream — for example: "I have 10 days and love handloom silk and historic temples", or "Best 2-week budget route for textile workshops in Rajasthan and Gujarat."`,
      suggestedStates: initialState ? [initialState.id] : ['rajasthan', 'gujarat', 'karnataka', 'tamil-nadu'],
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim() || isLoading) return;

    const newMessages: Message[] = [...messages, { role: 'user', text: query }];
    setMessages(newMessages);
    setInputText('');
    setIsLoading(true);

    try {
      // Try to call backend API if available, or generate curated response
      const response = await fetch('/api/curate-trip', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: query,
          stateContext: initialState?.name,
        }),
      }).catch(() => null);

      if (response && response.ok) {
        const data = await response.json();
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            text: data.reply || data.text,
            suggestedStates: data.suggestedStateIds || [],
          },
        ]);
      } else {
        // High quality deterministic fallback matching the prompt
        let reply = '';
        let matchedStateIds: string[] = [];

        const lower = query.toLowerCase();
        if (lower.includes('silk') || lower.includes('saree') || lower.includes('weave')) {
          reply = `For silk weaves and handloom heritage, I recommend the Golden Silk Trail:\n\n1. **Tamil Nadu (Kanchipuram)**: Explore temple borders with pure gold zari weavers.\n2. **Uttar Pradesh (Varanasi)**: Visit the ancient weavers' gallis for Banarasi brocades.\n3. **Assam (Sualkuchi)**: Experience rare natural golden Muga silk in the weaver village.\n\nRecommended Transit: Vande Bharat routes connect Varanasi & Delhi, while direct flights link Chennai and Guwahati.`;
          matchedStateIds = ['tamil-nadu', 'uttar-pradesh', 'assam'];
        } else if (lower.includes('budget') || lower.includes('cheap') || lower.includes('train')) {
          reply = `Here is an optimized **Cultural Railway Itinerary (₹14,500 – ₹18,000)**:\n\n• **Delhi ➔ Jaipur (Rajasthan)** via Vande Bharat Express (3.5 hrs). Visit Sanganer block printing.\n• **Jaipur ➔ Ahmedabad (Gujarat)** via overnight sleeper train. Explore Ajrakh & Patola looms.\n• **Ahmedabad ➔ Mumbai CSMT** via Tejas Express.\n\nTip: Book IRCTC 2AC or 3AC 60 days in advance for comfortable journeying with meals included.`;
          matchedStateIds = ['rajasthan', 'gujarat', 'maharashtra'];
        } else if (lower.includes('temple') || lower.includes('south') || lower.includes('unesco')) {
          reply = `The **Southern Dravidian Marvels Circuit** is unbeatable:\n\n1. **Karnataka**: Mysore Palace and Hampi UNESCO ruins.\n2. **Tamil Nadu**: Meenakshi Temple Madurai and Brihadisvara Thanjavur.\n3. **Kerala**: Alleppey backwater houseboats & spice hills of Wayanad.\n\nBest months to visit: November through February for pleasant breezes and festival ceremonies.`;
          matchedStateIds = ['karnataka', 'tamil-nadu', 'kerala'];
        } else {
          reply = `For your customized Indian journey, I recommend exploring **${initialState?.name || 'Rajasthan, Gujarat & Kerala'}**. Each offers authentic government emporiums (avoiding commercial markups), direct rail connections, and certified GI artisan cooperatives. Would you like me to tailor daily budget estimates or highlight must-try local delicacies?`;
          matchedStateIds = initialState ? [initialState.id] : ['rajasthan', 'gujarat', 'kerala'];
        }

        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            text: reply,
            suggestedStates: matchedStateIds,
          },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: `Explore the vibrant 29 states using the interactive map or logistics planner! You can filter by silk weaves, desert crafts, or coastal railways.`,
          suggestedStates: ['rajasthan', 'gujarat'],
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="w-full max-w-2xl bg-[#121620] border border-[#242c3d] rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[80vh] text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1f2638] bg-[#0c0e14] shrink-0">
          <div className="flex items-center gap-2 text-amber-300">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="font-serif-display text-lg font-bold">
                AI Cultural Itinerary Curator
              </h3>
              <span className="text-[10px] text-slate-400 font-mono">
                Powered by Gemini &amp; Handloom GI Registry
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex gap-3 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.role === 'assistant' && (
                <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 border border-amber-500/40">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed whitespace-pre-line ${
                  m.role === 'user'
                    ? 'bg-[#e28a36] text-white font-medium rounded-tr-none'
                    : 'bg-[#181d28] border border-[#252d3d] text-slate-200 rounded-tl-none'
                }`}
              >
                {m.text}

                {/* Suggested State shortcuts */}
                {m.suggestedStates && m.suggestedStates.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-white/10 flex flex-wrap gap-2">
                    <span className="text-[10px] text-slate-400 uppercase font-mono mr-1">Recommended:</span>
                    {m.suggestedStates.map((stateId) => {
                      const st = STATES_DATA.find((s) => s.id === stateId);
                      if (!st) return null;
                      return (
                        <button
                          key={stateId}
                          onClick={() => {
                            onSelectState(st);
                            onClose();
                          }}
                          className="px-2.5 py-1 rounded-md bg-[#0f121a] hover:bg-amber-500/20 text-amber-300 text-xs border border-amber-500/30 flex items-center gap-1 transition-colors"
                        >
                          <span>{st.name}</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {m.role === 'user' && (
                <div className="w-8 h-8 rounded-full bg-[#273042] text-slate-200 flex items-center justify-center shrink-0">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-[#181d28] border border-[#252d3d] rounded-2xl rounded-tl-none p-3 text-xs text-slate-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-bounce [animation-delay:0.2s]" />
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-bounce [animation-delay:0.4s]" />
                <span className="text-xs">Curating heritage circuit...</span>
              </div>
            </div>
          )}
        </div>

        {/* Quick prompt suggestions */}
        <div className="px-5 py-2 bg-[#0d1016] border-t border-[#1a202c] flex items-center gap-2 overflow-x-auto text-[11px]">
          <span className="text-slate-500 shrink-0 font-mono text-[10px]">Suggestions:</span>
          {['10-day Handloom Silk Tour', 'Rajasthan & Gujarat Budget Railway', 'South India Temple Circuit', 'North-East Tribal Art'].map((sugg) => (
            <button
              key={sugg}
              onClick={() => handleSend(sugg)}
              className="px-2.5 py-1 rounded-full bg-[#151a24] text-slate-300 hover:text-amber-300 hover:border-amber-500/40 border border-[#212838] whitespace-nowrap"
            >
              {sugg}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-[#0c0e14] border-t border-[#1f2638] flex items-center gap-2 shrink-0">
          <input
            type="text"
            placeholder="Ask about train bookings, artisan villages, or custom routes..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            className="flex-1 px-4 py-2.5 bg-[#141822] border border-[#222a3a] rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500/50"
          />
          <button
            onClick={() => handleSend()}
            disabled={!inputText.trim() || isLoading}
            className="p-2.5 rounded-xl bg-[#e28a36] hover:bg-[#f29945] disabled:opacity-50 text-white transition-all shadow-md"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
