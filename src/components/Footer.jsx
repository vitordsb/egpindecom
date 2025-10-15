
import { Smartphone } from 'lucide-react';
import logo from '../assets/logoegpsemfundo.png';
import googlePlay from '../assets/googleplayicon.png';
import appStore from '../assets/applestoreicon.png';
import APK from '../assets/apkicon.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* LOGO E DESCRIÇÃO */}
          <div className="text-center md:text-left">
            <img
              src={logo}
              alt="Grupo EGP"
              className="h-14 sm:h-16 w-auto mx-auto md:mx-0 mb-4"
            />
            <p className="text-gray-400 text-sm sm:text-base">
              Indústria e Comércio de Equipamentos Eletrônicos
            </p>
            <p className="text-gray-400 mt-2 text-sm sm:text-base max-w-sm mx-auto md:mx-0">
              Experiência profissional de 18 anos no segmento de eletrificadores de cerca.
            </p>
          </div>

          {/* LINKS RÁPIDOS */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-white">
              Links Rápidos
            </h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="/" className="text-gray-400 hover:text-[#DF5167] transition">Início</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-[#DF5167] transition">Sobre Nós</a></li>
              <li><a href="/products" className="text-gray-400 hover:text-[#DF5167] transition">Produtos</a></li>
              <li><a href="/international" className="text-gray-400 hover:text-[#DF5167] transition">Comércio Exterior</a></li>
              <li><a href="/location" className="text-gray-400 hover:text-[#DF5167] transition">Localização</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-[#DF5167] transition">Contato</a></li>
            </ul>
          </div>

          {/* DOWNLOAD DO APP */}
          <div className="text-center md:text-left">
            <h3 className="flex flex-col sm:flex-row items-center justify-center md:justify-start text-lg font-semibold mb-4 gap-2">
              <Smartphone className="w-8 h-8 sm:w-9 sm:h-9 text-[#DF5167]" />
              <span>Baixe nosso Aplicativo EGP PLUG IN</span>
            </h3>
            <p className="text-gray-400 mb-6 text-sm sm:text-base max-w-md mx-auto md:mx-0">
              O melhor aplicativo móvel para segurança perimetral da sua empresa e residência. Baixe agora e aproveite!
            </p>

            {/* BOTÕES DAS LOJAS */}
            <div className="grid grid-cols-2 sm:flex-row flex-wrap items-center justify-center md:justify-start gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=br.com.egp_app&hl=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-black rounded-xl px-4 py-3 w-full sm:w-48 hover:opacity-90 transition"
              >
                <img src={googlePlay} alt="Google Play" className="h-8 sm:h-10 w-auto" />
                <p className="text-sm sm:text-base font-medium">Google Play</p>
              </a>

              <a
                href="https://apps.apple.com/br/app/seuapp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-black rounded-xl px-4 py-3 w-full sm:w-48 hover:opacity-90 transition"
              >
                <img src={appStore} alt="App Store" className="h-8 sm:h-10 w-auto" />
                <p className="text-sm sm:text-base font-medium">Apple Store</p>
              </a>

              <a
                href="../assets/downloads/app-release.apk"
                download="../assets/downloads/app-release.apk"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-black rounded-xl px-4 py-3 w-full sm:w-48 hover:opacity-90 transition"
              >
                <img src={APK} alt="APK" className="h-8 sm:h-10 w-auto" />
                <p className="text-sm sm:text-base font-medium">Baixe o APK</p>
              </a>
            </div>

            <p className="text-gray-400 mt-3 text-xs sm:text-sm">
              Não está conseguindo pela loja? Baixe o APK acima.
            </p>
          </div>
        </div>

        {/* LINHA INFERIOR */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            © 2025 Grupo EGP. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

