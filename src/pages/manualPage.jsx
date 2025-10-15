import React from "react";
import { FileText, Download } from "lucide-react";
import { Link } from "react-router-dom";

const ManualPage = () => {
  const manuals = [
    { name: "DENKI 1.2", link: "/manuais/denki12/Denki12.pdf" },
    { name: "DENKI 5.0", link: "/manuais/denk5/Denki5.pdf" },
    { name: "EGP12V / EGP15V / EGP20V", link: "/manuais/eco12v/Manual EGP 12v 15v 20v.pdf" },
    { name: "MÓDULO WIFI PLUGIN", link: "/manuais/egpplugin/Manual Módulo EGP PLUG IN WIFI.pdf" },
    { name: "ECO 10.000 / EGP 12.000 / CHRONOS / 20.000", link: "/manuais/eco12v/Manual EGP 12v 15v 20v.pdf" },
    { name: "EGP NOBREAK / 12V3A / 12V6A", link: "/manuais/egpnobreak/EGP Nobreak.pdf" },
    { name: "EGP AUTOMATIZADOR 520/640/760", link: "/manuais/centralmonofasicaEGP520/centralmonofasica.pdf" },
    { name: "TEKNOGAM", link: "/manuais/teknogam/teknogam.pdf" },
    { name: "FONTE 12V 1,5A", link: "/manuais/eco12v/Manual EGP 12v 15v 20v.pdf" },
    { name: "ALARM LOCK", link: "/manuais/alarm/alarmlock.pdf" },
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          📘 Manuais de Produtos
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Aqui você encontra todos os manuais técnicos e de instalação dos nossos produtos.
        </p>
        <div className="w-24 h-1 bg-[#DF5167] mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {manuals.map((manual, index) => (
          <Link
            key={index}
            to={manual.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-[#DF5167] transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="bg-gradient-to-br from-[#DF5167] to-[#2E74FF] p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-gray-800 group-hover:text-[#DF5167] transition-colors duration-300">
              {manual.name}
            </h3>
            <p className="text-gray-500 text-sm mt-2 mb-3">Clique para abrir o manual</p>
            <div className="flex items-center text-[#2E74FF] font-medium group-hover:text-[#DF5167] transition-colors duration-300">
              <Download className="w-4 h-4 mr-2" />
              <span>Baixar PDF</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center text-gray-500 text-sm mt-16">
        © {new Date().getFullYear()} EGP Indústria e Comércio de Equipamentos Eletrônicos Ltda.
      </div>
    </section>
  );
};

export default ManualPage;

