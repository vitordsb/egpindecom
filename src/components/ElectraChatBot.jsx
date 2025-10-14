import React, { useState } from "react";
import { MessageCircle, Send } from "lucide-react";

const ElectraChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const departments = [
    { id: 1, name: "Comercial", phone: "(11) 94105-9408" },
    { id: 2, name: "Financeiro", phone: "(11) 97998-1314" },
    { id: 3, name: "Técnico", phone: "(11) 99327-6306" },
    { id: 4, name: "Compras", phone: "(11) 99317-7379" },
    { id: 5, name: "RH", phone: "(11) 93957-2807" },
  ];

  const menuMessage = {
    from: "bot",
    text:
      "👋 Olá! Eu sou a Electra, sua assistente virtual.\n\nSelecione uma opção:\n" +
      departments.map((d) => `${d.id}️⃣ ${d.name}`).join("\n"),
  };

  React.useEffect(() => {
    setMessages([menuMessage]);
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    const option = parseInt(input.trim());
    const selectedDept = departments.find((d) => d.id === option);

    let botResponse;

    if (selectedDept) {
      botResponse = {
        from: "bot",
        text: `📞 Você escolheu *${selectedDept.name}*.\nEntre em contato pelo número: ${selectedDept.phone}\n\nDeseja ver novamente o menu? Digite "menu"`,
      };
    } else if (input.toLowerCase() === "menu") {
      botResponse = menuMessage;
    } else {
      botResponse = {
        from: "bot",
        text: "❌ Opção inválida. Digite o número correspondente ou escreva 'menu' para ver novamente as opções.",
      };
    }

    setMessages([...messages, userMsg, botResponse]);
    setInput("");
  };

  return (

    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#DF5167] hover:bg-[#c24359] text-white rounded-full p-4 shadow-lg transition-all"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {isOpen && (
        <div className="w-90 h-150 bg-white border border-gray-200 rounded-2xl shadow-xl flex flex-col mt-3">
          <div className="bg-gradient-to-r from-[#DF5167] to-[#2E74FF] text-white rounded-t-2xl p-4 font-semibold flex items-center justify-between">
            <span>Electra - Assistente Virtual</span>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 text-sm">
            {messages.map((msg, i) => (
              <div key={i} className={`${msg.from === "user" ? "text-right" : "text-left"}`}>
                <span
                  className={`inline-block px-3 py-2 rounded-lg whitespace-pre-line ${msg.from === "user"
                    ? "bg-[#DF5167] text-white"
                    : "bg-gray-100 text-gray-800"
                    }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          <div className="flex border-t border-gray-200">
            <input
              type="text"
              placeholder="Digite o número da opção..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 p-3 text-sm outline-none"
            />
            <button
              onClick={handleSend}
              className="bg-[#DF5167] rounded-r-2xl hover:bg-[#c24359] text-white px-4 flex items-center justify-center transition"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ElectraChatbot;

