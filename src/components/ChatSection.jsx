import React, { useState, useEffect, useRef } from 'react';

const ChatSection = ({ setShowChat }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [aiResponseCount, setAiResponseCount] = useState(0);
  const [pendingFullResponse, setPendingFullResponse] = useState(null);
  const chatEndRef = useRef(null);

  // Scroll to the bottom of the chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  // Handle AI response logic: first message one letter, second message full response
  useEffect(() => {
    if (pendingFullResponse && aiResponseCount > 0) {
      setMessages(prev => [...prev, { ...pendingFullResponse, id: Date.now() + 1 }]);
      setPendingFullResponse(null);
    }
  }, [aiResponseCount, pendingFullResponse]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input, id: Date.now() };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + process.env.REACT_APP_API_KEY,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'http://localhost:3000',
          'X-Title': 'SweetAIChat'
        },
        body: JSON.stringify({
          model: 'mistralai/mistral-7b-instruct:free',
          messages: [
            {
              role: 'system',
              content: 'You are Sweet AI, a helpful assistant for My Build Lab. Provide minimal, concise answers with a friendly developer vibe. Keep responses short and to the point, avoiding excessive text.'
            },
            ...updatedMessages.map(({ role, content }) => ({ role, content }))
          ]
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API Error (${response.status}): ${errorText}`);
      }

      const data = await response.json();
      console.log("API response:", data);

      const aiContent = data.choices?.[0]?.message?.content;
      if (!aiContent) throw new Error("AI response is empty or malformed.");

      setAiResponseCount(prev => prev + 1);

      if (aiResponseCount === 0) {
        setMessages(prev => [...prev, { role: 'assistant', content: aiContent[0], id: Date.now() + 1 }]);
        setPendingFullResponse({ role: 'assistant', content: aiContent });
      } else {
        setMessages(prev => [...prev, { role: 'assistant', content: aiContent, id: Date.now() + 1 }]);
      }
    } catch (error) {
      console.error("Fetch failed:", error.message);
      setMessages(prev => [...prev, { role: 'assistant', content: `Error: ${error.message}` }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Main Chat Container */}
      <div className="w-full max-w-2xl flex flex-col h-[90vh] sm:h-[80vh] bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-md">
        {/* Header */}
        <div className="flex justify-between items-center p-4 sm:p-5 border-b border-gray-200 rounded-t-3xl">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Sweet AI</h2>
          <button 
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-all text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={() => setShowChat(false)}
          >
            Close
          </button>
        </div>

        {/* Chat Window */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 custom-scrollbar">
          {messages.map((msg, index) => (
            <div
              key={msg.id}
              className={`flex mb-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-slide-in`}
            >
              <div
                className={`p-3 sm:p-4 rounded-2xl max-w-[80%] sm:max-w-[70%] ${
                  msg.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'
                } shadow-sm`}
              >
                <p className="text-sm sm:text-base leading-relaxed">{msg.content}</p>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start mb-4">
              <div className="p-3 sm:p-4 rounded-2xl bg-gray-100 w-20 sm:w-24 h-6 shimmer"></div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Input Field */}
        <div className="p-4 sm:p-6 border-t border-gray-200">
          <div className="flex items-center bg-white rounded-2xl p-2 sm:p-3 border border-gray-300 focus-within:border-blue-500 focus-within:shadow-sm transition-all">
            <input
              type="text"
              className="flex-1 p-2 sm:p-3 text-sm sm:text-base text-gray-800 bg-transparent placeholder-gray-400 focus:outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask anything..."
            />
            <button
              className={`px-4 sm:px-5 py-2 rounded-full text-sm sm:text-base font-medium transition-all ${
                loading || !input.trim() ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'
              } focus:outline-none focus:ring-2 focus:ring-blue-400`}
              onClick={sendMessage}
              disabled={loading || !input.trim()}
            >
              Send
            </button>
          </div>
        </div>
      </div>

      {/* Inline Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.3);
        }
        .shimmer {
          background: linear-gradient(90deg, #e5e7eb 25%, #d1d5db 50%, #e5e7eb 75%);
          background-size: 200% 100%;
          animation: shimmer 1.2s infinite;
        }
        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
        .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ChatSection;