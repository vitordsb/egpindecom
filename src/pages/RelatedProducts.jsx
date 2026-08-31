
import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { allProducts } from "./ProductDetails";

export default function RelatedProducts() {
  const { category } = useParams();
  const navigate = useNavigate();

  const related = allProducts.filter((p) => p.category === category);

  return (
    <section className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-[#DF5167] hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </button>

        <h1 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Produtos Relacionados – {category}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {related.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-32 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                {product.name}
              </h3>
              <p className="text-gray-600 text-center mb-4">
                {product.description}
              </p>

              <div className="flex justify-center">
                <Link to={`/products/${product.id}`}>
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    Ver Especificações
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

