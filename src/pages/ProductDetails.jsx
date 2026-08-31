
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

import central12v from "../assets/products/central/central12v.png";
import controle2b from "../assets/products/controles/controle2bcinza.png";
import controle4b from "../assets/products/controles/controle4bcopiador.png";
import sirenemag from "../assets/products/sirenes/sirenemag.jpg";
import sirene from "../assets/products/sirenes/Sirene.png";
import acoinox from "../assets/products/fiodeaco.jpg";
import haste from "../assets/products/haste.jpg";
import concertina from "../assets/products/concertinaSemFundo.png";

export const allProducts = [
  {
    id: 0,
    image: central12v,
    name: "Central EGP 12.000",
    category: "central",
    specs: [
      "Liga e Desliga por controle chave e App",
      "Tensão ajustável 8.000V 12.000V e 15.000V 20.000V",
      "Tensão de operação 12Vcc",
      "2 Setores de Alarme independentes",
      "Energia 0,5J 0,75J e 0,75J 2J",
      "Entrada para sensores com e sem fio",
      "Entrada para monitoramento",
      "Sistema anti-sabotagem",
      "Eletrifica de 0,1m a 1.400m e de 0,1m a 5.000m",
      "Saída de rele CO/NA/NF",
      "Saída Led Cerca",
      "Saída para Sirene",
      "Saída Bip de Sirene Liga Desliga",
      "Compatível com algumas das principais marcas",
      "Nobreak",
      "Saída de 12Vcc para alimentação de periféricos"
    ],
  },
  {
    id: 1,
    image: controle2b,
    name: "Controles",
    category: "controle",
    specs: [
      "Alarmes",
      "Cercas elétricas",
      "Automatizadores de portas e portões",
      "Learning code 433,92MHz"
    ],
  },
  {
    id: 2,
    image: sirene,
    name: "Sirene Piezzo",
    category: "sirene",
    specs: [
      "Toque 1 tom",
      "Potência sonora: 120dB à 1 metro",
      "Alimentação 12V",
      "Corrente: 1A"
    ],
  },
  {
    id: 3,
    image: acoinox,
    name: "Aço Inox",
    category: "fioinox",
    specs: [
      "Aço inoxidável",
      "Opções em: 0,45mm 0,60mm 0,70mm e 0,90mm"
    ],
  },
  {
    id: 4,
    image: haste,
    name: "Hastes",
    category: "haste",
    specs: [
      "Hastes reforçadas com isoladores",
    ],
  },
  {
    id: 5,
    image: concertina,
    name: "Concertina",
    category: "concertina",
    specs: [
      "Diâmetro: 45 cm",
      "Abertura entre lâminas: 15 cm",
      "Material: Aço galvanizado",
      "Comprimento: 10 metros"
    ],
  },
  {
    id: 8,
    image: central12v,
    name: "Central EGP 15.000 Plug IN",
    category: "central",
    specs: [
      "Liga e Desliga por controle chave e App",
      "Tensão ajustável 8.000V 12.000V e 15.000V 20.000V",
      "Tensão de operação 12Vcc",
      "2 Setores de Alarme independentes",
      "Energia 0,5J 0,75J e 0,75J 2J",
      "Entrada para sensores com e sem fio",
      "Entrada para monitoramento",
      "Sistema anti-sabotagem",
      "Eletrifica de 0,1m a 1.400m e de 0,1m a 5.000m",
      "Saída de rele CO/NA/NF",
      "Saída Led Cerca",
      "Saída para Sirene",
      "Saída Bip de Sirene Liga Desliga",
      "Compatível com algumas das principais marcas",
      "Nobreak",
      "Saída de 12Vcc para alimentação de periféricos"
    ],
  },
  {
    id: 6,
    image: central12v,
    name: "Central EGP 15.000 Guard On",
    category: "central",
    specs: [
      "Liga e Desliga por controle chave e App",
      "Tensão ajustável 8.000V 12.000V e 15.000V 20.000V",
      "Tensão de operação 12Vcc",
      "2 Setores de Alarme independentes",
      "Energia 0,5J 0,75J e 0,75J 2J",
      "Entrada para sensores com e sem fio",
      "Entrada para monitoramento",
      "Sistema anti-sabotagem",
      "Eletrifica de 0,1m a 1.400m e de 0,1m a 5.000m",
      "Saída de rele CO/NA/NF",
      "Saída Led Cerca",
      "Saída para Sirene",
      "Saída Bip de Sirene Liga Desliga",
      "Compatível com algumas das principais marcas",
      "Nobreak",
      "Saída de 12Vcc para alimentação de periféricos"
    ],
  },
  {
    id: 7,
    image: central12v,
    name: "Central EGP 20.000",
    category: "central",
    specs: [
      "Liga e Desliga por controle chave e App",
      "Tensão ajustável 8.000V 12.000V e 15.000V 20.000V",
      "Tensão de operação 12Vcc",
      "2 Setores de Alarme independentes",
      "Energia 0,5J 0,75J e 0,75J 2J",
      "Entrada para sensores com e sem fio",
      "Entrada para monitoramento",
      "Sistema anti-sabotagem",
      "Eletrifica de 0,1m a 1.400m e de 0,1m a 5.000m",
      "Saída de rele CO/NA/NF",
      "Saída Led Cerca",
      "Saída para Sirene",
      "Saída Bip de Sirene Liga Desliga",
      "Compatível com algumas das principais marcas",
      "Nobreak",
      "Saída de 12Vcc para alimentação de periféricos"
    ],
  },

  {
    id: 9,
    image: central12v,
    name: "Central EGP 12.000 Nobreak",
    category: "central",
    specs: [
      "Liga e Desliga por controle chave e App",
      "Tensão ajustável 8.000V 12.000V e 15.000V 20.000V",
      "Tensão de operação 12Vcc",
      "2 Setores de Alarme independentes",
      "Energia 0,5J 0,75J e 0,75J 2J",
      "Entrada para sensores com e sem fio",
      "Entrada para monitoramento",
      "Sistema anti-sabotagem",
      "Eletrifica de 0,1m a 1.400m e de 0,1m a 5.000m",
      "Saída de rele CO/NA/NF",
      "Saída Led Cerca",
      "Saída para Sirene",
      "Saída Bip de Sirene Liga Desliga",
      "Compatível com algumas das principais marcas",
      "Nobreak",
      "Saída de 12Vcc para alimentação de periféricos"
    ],
  },
  {
    id: 10,
    image: controle4b,
    name: "Controle 4 botões copiador",
    category: "controle",
    specs: [
      "Alarmes",
      "Cercas elétricas",
      "Automatizadores de portas e portões",
      "Learning code 433,92MHz"
    ],
  },
  {
    id: 11,
    image: sirenemag,
    name: "Sirene magnética",
    category: "sirene",
    specs: [
      "Toque 1 tom",
      "Potência sonora: 120dB à 1 metro",
      "Alimentação 12V",
      "Corrente: 1A"
    ],
  },
];

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = allProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-gray-500 mb-4">Produto não encontrado.</p>
        <Button onClick={() => navigate(-1)}>Voltar</Button>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-[#DF5167] hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </button>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded-lg"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {product.name}
            </h1>

            <h2 className="text-xl font-semibold mb-3 text-gray-800">
              Especificações Técnicas
            </h2>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              {product.specs.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

