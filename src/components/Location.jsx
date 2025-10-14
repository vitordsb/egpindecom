import { MapPin, Phone, MessageCircle, Mail } from 'lucide-react';

const Location = () => {
  return (
    <section id="localizacao" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Localização
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Visite-nos ou entre em contato
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Informações de Contato
            </h3>

            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Endereço</h4>
                <p className="text-gray-600">
                  Rua São Francisco, Quadra F, Lote 24-86<br />
                  Vila Jovina, Cotia/SP - 06705-115
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Telefone</h4>
                <p className="text-gray-600">(11) 4703-5846</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">WhatsApp</h4>
                <p className="text-gray-600">
                  Compras: (11) 96689-3099<br />
                  Técnico 24h: (11) 94630-9034
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">E-mail</h4>
                <p className="text-gray-600">
                  Estaremos sempre online para lhe atender
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.2956255815093!2d-46.89794552404964!3d-23.593728462783307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf00af1e929da3%3A0xb79fd55d621002af!2sR.%20S%C3%A3o%20Francisco%2C%2086%20-%20Lajeado%2C%20Cotia%20-%20SP%2C%2006705-115!5e0!3m2!1spt-BR!2sbr!4v1760378241342!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Grupo EGP"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

