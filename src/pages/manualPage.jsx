
import React from "react";
import { FileText, Download } from "lucide-react";

const ManualPage = () => {
  const manuals = [
    { name: "EGP12V / EGP15V / EGP20V", link: "/manuaisegp/eco12v/ManualEGP12v15v20v.pdf" },
    { name: "MÓDULO WIFI PLUGIN", link: "/manuaisegp/egpplugin/ManualModuloEGPPlugInWifi.pdf" },
    { name: "ECO 10.000 / EGP 12.000 / CHRONOS / 20.000", link: "/manuaisegp/eco12v/ManualEGP12v15v20v.pdf" },
    { name: "EGP NOBREAK / 12V3A / 12V6A", link: "/manuaisegp/egpnobreak/EGPNobreak.pdf" },
    { name: "EGP AUTOMATIZADOR 520/640/760", link: "/manuaisegp/centralmonofasicaEGP520/centralmonofasica.pdf" },
    { name: "TEKNOGAM", link: "/manuaisegp/teknogam/teknogam.pdf" },
    { name: "FONTE 12V 1,5A", link: "/manuaisegp/eco12v/ManualEGP12v15v20v.pdf" },
    { name: "ALARM LOCK", link: "/manuaisegp/alarm/alarmlock.pdf" },
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
          <div
            key={index}
            className="group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-[#DF5167] transition-all duration-300 flex flex-col items-center text-center"
          >
            {/* Abre o manual no navegador */}
            <a
              href={manual.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center w-full"
            >
              <div className="bg-gradient-to-br from-[#DF5167] to-[#2E74FF] p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 group-hover:text-[#DF5167] transition-colors duration-300">
                {manual.name}
              </h3>
              <p className="text-gray-500 text-sm mt-2 mb-3">
                Clique para abrir o manual
              </p>
            </a>

            {/* Baixa o arquivo diretamente */}
            <a
              href={manual.link}
              download
              className="flex items-center text-[#2E74FF] font-medium group-hover:text-[#DF5167] hover:underline transition-colors duration-300"
            >
              <Download className="w-4 h-4 mr-2" />
              <span>Baixar PDF</span>
            </a>
          </div>
        ))}
      </div>

      <div className="text-center text-gray-500 text-sm mt-16">
        © {new Date().getFullYear()} EGP Indústria e Comércio de Equipamentos Eletrônicos Ltda.
      </div>
    </section>
  );
};

export default ManualPage;

