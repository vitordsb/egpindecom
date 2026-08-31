import { Target, Eye, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Missão',
      description: 'A EGP é uma empresa 100% brasileira e está empenhada em garantir a excelência de nossos produtos, trazendo cada vez a mais alta qualidade para melhor atender as necessidades de nossos parceiros e colaboradores. Tudo que a EGP produz é pensando em oferecer o melhor e desse melhor trazer os melhores resultados.'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Visão',
      description: 'Nosso objetivo é ser uma grande referência no seguimento de eletrificador de cerca com a maior qualidade e preço justo do mercado, fazendo sempre um bom trabalho direcionando todos os nossos esforços para um melhor atendimento fechando parcerias duradouras.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Valores',
      description: 'Qualidade, transparência, seriedade e respeito. Tudo isso ouvindo e aceitando todas as críticas e opiniões para o crescimento de toda a empresa, aprimorando nossos trabalhos para melhor atender as expectativas de nossos parceiros conquistando a sua credibilidade e confiança.'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossa História
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Indústria de eletrificador de cerca, possuímos um diferencial que é a experiência profissional de 18 anos neste segmento. O que nos motivou a fundar a EGP, foi o fato de amar a área.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {value.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                {value.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

