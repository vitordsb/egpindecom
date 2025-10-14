
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

import central12v from "../assets/products/central/central12v.png";
import controle2b from "../assets/products/controles/controle2bcinza.png";
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
    description: "Central de choque ou alarme com alta eficiência e durabilidade.",
    specs: [
      "Tensão de saída: 12.000V pulsante",
      "Alimentação: 127/220V bivolt automático",
      "Consumo: 6W em operação",
      "Frequência de pulso: 1Hz",
      "Compatível com sensores de alarme"
    ],
  },
  {
    id: 1,
    image: controle2b,
    name: "Controles",
    category: "controle",
    description: "Controle remoto de longo alcance, com frequência de 433 MHz.",
    specs: [
      "Frequência: 433,92 MHz",
      "Alcance: até 100 metros (sem obstáculos)",
      "Bateria: 12V 23A inclusa",
      "Carcaça: ABS resistente"
    ],
  },
  {
    id: 2,
    image: sirene,
    name: "Sirenes",
    category: "sirene",
    description: "Sirene de alta potência para sistemas de segurança.",
    specs: [
      "Potência sonora: 120 dB",
      "Tensão: 12V DC",
      "Consumo: 300mA",
      "Material: ABS injetado"
    ],
  },
  {
    id: 3,
    image: acoinox,
    name: "Aço Inox",
    category: "fioinox",
    description: "Fio de aço inoxidável de alta qualidade para cercas elétricas.",
    specs: [
      "Material: Aço inox 304",
      "Bitola: 0,8 mm",
      "Resistência: 180 kgf",
      "Comprimento: 500 metros"
    ],
  },
  {
    id: 4,
    image: haste,
    name: "Hastes",
    category: "haste",
    description: "Hastes galvanizadas resistentes à corrosão.",
    specs: [
      "Material: Aço galvanizado",
      "Altura: 50 cm",
      "Diâmetro: 10 mm",
      "Ponta afiada para melhor fixação"
    ],
  },
  {
    id: 5,
    image: concertina,
    name: "Concertina",
    category: "concertina",
    description: "Concertina com lâminas duplas de alta proteção.",
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
    description: "Concertina com lâminas duplas de alta proteção.",
    specs: [
      "Diâmetro: 45 cm",
      "Abertura entre lâminas: 15 cm",
      "Material: Aço galvanizado",
      "Comprimento: 10 metros"
    ],
  },
  {
    id: 6,
    image: central12v,
    name: "Central EGP 15.000 Guard On",
    category: "central",
    description: "Concertina com lâminas duplas de alta proteção.",
    specs: [
      "Diâmetro: 45 cm",
      "Abertura entre lâminas: 15 cm",
      "Material: Aço galvanizado",
      "Comprimento: 10 metros"
    ],
  },
  {
    id: 7,
    image: central12v,
    name: "Central EGP 20.000",
    category: "central",
    description: "Concertina com lâminas duplas de alta proteção.",
    specs: [
      "Diâmetro: 45 cm",
      "Abertura entre lâminas: 15 cm",
      "Material: Aço galvanizado",
      "Comprimento: 10 metros"
    ],
  },

  {
    id: 9,
    image: central12v,
    name: "Central EGP 12.000 Nobreak",
    category: "central",
    description: "Concertina com lâminas duplas de alta proteção.",
    specs: [
      "Diâmetro: 45 cm",
      "Abertura entre lâminas: 15 cm",
      "Material: Aço galvanizado",
      "Comprimento: 10 metros"
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
            <p className="text-primary font-semibold mb-3">{product.category}</p>
            <p className="text-gray-700 mb-6">{product.description}</p>

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

