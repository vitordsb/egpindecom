import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import catalogoPDF from '../assets/CatalogoEGP2025.pdf';
import { Link } from 'react-router-dom';
import controle2b from '../assets/products/controles/controle2bcinza.png';
import central12v from '../assets/products/central/central12v.png';
import sirene from '../assets/products/sirenes/Sirene.png';
import acoinox from '../assets/products/fiodeaco.jpg';
import haste from '../assets/products/haste.jpg';
import concertina from '../assets/products/concertinaSemFundo.png';

const Products = () => {
  const products = [
    {
      image: central12v,
      name: 'Eletrificadores',
      category: 'central',
      description: 'Central de Choque ou Alarme com alta eficiência e durabilidade.',
    },
    {
      image: controle2b,
      name: 'Controles',
      category: 'controle',
      description: 'Central de Choque ou Alarme com tecnologia econômica.',
    },
    {
      image: sirene,
      name: 'Sirenes',
      category: 'sirene',
      description: 'Sirene de alta potência para sistemas de segurança.'
    },
    {
      image: acoinox,
      name: 'Aço Inox',
      category: 'fioinox',
      description: 'Fio de alta qualidade para instalação de cercas elétricas.'
    },
    {
      image: haste,
      name: 'Hastes',
      category: 'haste',
      description: 'Hastes resistentes para fixação de cercas.'
    },
    {
      image: concertina,
      name: 'Concertina',
      category: 'concertina',
      description: 'Controles remotos para sistemas de segurança.'
    }
  ];

  return (
    <section id="produtos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Catálogo de Produtos
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Confira nossa linha completa de produtos para segurança eletrônica
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white"
            onClick={() => window.open(catalogoPDF, '_blank')}
          >
            <Download className="mr-2" />
            Baixar Catálogo Completo 2025
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-xl transition-all duration-300 group border border-gray-200 hover:border-primary"
            >
              <div className="flex justify-center mb-4">
                <img src={product.image} alt={product.name} className="h-32" />
              </div>
              <div className="text-center">
                <p className="text-sm text-primary font-semibold mb-2">
                  {product.category}
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600">
                  {product.description}
                </p>
                <div className="flex justify-center mt-4 gap-2">
                  <Link to={`/products/${index}`}>
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      Especificações
                    </Button>
                  </Link>

                  <Link to={`/products/related/${product.category}`}>
                    <Button
                      variant="default"
                      className="border-primary hover:bg-primary hover:text-white"
                    >
                      Ver relacionados
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Manuais de Instalação
          </h3>
          <p className="text-gray-700 mb-6">
            Confira os manuais de todos os nossos produtos!
          </p>
          <Link to="/manuais">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              Ver Manuais
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;

