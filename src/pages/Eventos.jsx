
import { CalendarDays, MapPin, Users, Info } from "lucide-react";
import { motion } from "framer-motion";

const Eventos = () => {
  const eventos = [
    {
      nome: "Exprosec 2026 - São Paulo Expo Exhibition & Convention",
      local: "Rua Center Rodovia dos Imigrantes, KM 1,5 – Água Funda, São Paulo – SP, 04329-100",
      data: "01 a 03 de junho de 2025",
      descricao:
        "A EGP estará presente na maior feira de segurança eletrônica da América Latina, apresentando as mais novas tecnologias em eletrificadores, alarmes e automação residencial.",
      imagem:
        "https://uniclasshotel.com.br/wp-content/uploads/2020/01/exposec.jpg",
      link: "https://exposec.tmp.br/local-e-data-exposec/",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-20 px-6 md:px-12">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          📅 Participação em Eventos
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Confira os eventos, feiras e exposições onde a{" "}
          <span className="text-[#DF5167] font-semibold">EGP</span> estará
          presente com suas tecnologias e inovações.
        </p>
        <div className="w-24 h-1 bg-[#DF5167] mx-auto mt-6 rounded-full"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto flex grid-cols-1 md:grid-cols-2 gap-10">
        {eventos.map((evento, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-200 overflow-hidden transition-all duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="relative">
              <img
                src={evento.imagem}
                alt={evento.nome}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-6 md:p-8 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#DF5167] transition-colors">
                {evento.nome}
              </h3>

              <div className="flex flex-col gap-2 text-gray-600 text-sm mb-4">
                <p className="flex items-center justify-center md:justify-start gap-2">
                  <CalendarDays className="w-4 h-4 text-[#DF5167]" /> {evento.data}
                </p>
                <p className="flex items-center justify-center md:justify-start gap-2">
                  <MapPin className="w-4 h-4 text-[#2E74FF]" /> {evento.local}
                </p>
              </div>

              <p className="text-gray-700 mb-6">{evento.descricao}</p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a
                  href={evento.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg bg-[#DF5167] hover:bg-[#c24359] text-white font-medium transition-colors duration-300 flex items-center gap-2"
                >
                  <Info className="w-4 h-4" /> Saiba Mais
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Quer encontrar a <span className="text-[#DF5167]">EGP</span> no próximo evento?
        </h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Acompanhe nossas redes sociais e fique por dentro das feiras e exposições futuras onde apresentaremos nossas inovações em segurança eletrônica.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-4 bg-[#DF5167] hover:bg-[#C24659] text-white font-semibold rounded-lg transition"
        >
          Entre em Contato
        </a>
      </motion.div>
    </section>
  );
};

export default Eventos;

