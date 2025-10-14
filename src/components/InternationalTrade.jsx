
import { Globe } from 'lucide-react'

const InternationalTrade = () => {
  const countries = [
    { name: 'Bolívia', code: 'bo' },
    { name: 'Chile', code: 'cl' },
    { name: 'Angola', code: 'ao' },
    { name: 'Uruguai', code: 'uy' },
    { name: 'Argentina', code: 'ar' },
    { name: 'Paraguai', code: 'py' },
    { name: 'México', code: 'mx' },
    { name: 'Venezuela', code: 've' },
    { name: 'Colômbia', code: 'co' },
    { name: 'Peru', code: 'pe' },
    { name: 'Guiana', code: 'gy' },
    { name: 'Suriname', code: 'sr' },
    { name: 'Equador', code: 'ec' },
    { name: 'Guatemala', code: 'gt' },
    { name: 'Nicarágua', code: 'ni' },
    { name: 'Porto Rico', code: 'pr' },
  ]

  return (
    <section id="comercio-exterior" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <Globe className="w-10 h-10 text-primary" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comércio Exterior
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Levamos nossos produtos de qualidade para diversos países da América Latina e além
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {countries.map((country, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 hover:border-primary group flex flex-col items-center justify-center"
            >
              <img
                src={`https://flagcdn.com/w40/${country.code}.png`}
                alt={`Bandeira de ${country.name}`}
                className="w-10 h-7 object-cover mb-3 rounded-sm border"
              />
              <p className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                {country.name}
              </p>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-4">
            Interessado em exportar nossos produtos?
          </p>
          <a
            href="#contato"
            className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
          >
            Entre em contato
          </a>
        </div>
      </div>
    </section>
  )
}

export default InternationalTrade

