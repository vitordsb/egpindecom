import { Smartphone } from 'lucide-react';
import logo from '../assets/logoegpsemfundo.png';
import googlePlay from '../assets/googleplayicon.png';
import appStore from '../assets/applestoreicon.png';
import APK from '../assets/apkicon.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src={logo} alt="Grupo EGP" className="h-16 w-auto mb-4" />
            <p className="text-gray-400">
              Indústria e Comércio de Equipamentos Eletrônicos
            </p>
            <p className="text-gray-400 mt-2">
              Experiência profissional de 18 anos no segmento de eletrificadores de cerca.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-[#DF5167] transition">Início</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-[#DF5167] transition">Sobre Nós</a></li>
              <li><a href="/products" className="text-gray-400 hover:text-[#DF5167] transition">Produtos</a></li>
              <li><a href="/international" className="text-gray-400 hover:text-[#DF5167] transition">Comércio Exterior</a></li>
              <li><a href="/location" className="text-gray-400 hover:text-[#DF5167] transition">Localização</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-[#DF5167] transition">Contato</a></li>
            </ul>
          </div>

          <div>
            <h3 className="flex items-center text-lg font-semibold mb-4">
              <Smartphone className="w-10 h-10 mr-2" />
              Baixe nosso Aplicativo EGP PLUG IN
            </h3>
            <p className="text-gray-400 mb-4">
              O melhor aplicativo móvel para segurança perimetral da sua empresa e residência. Baixe agora e aproveite!
            </p>

            <div className="grid grid-cols-2 sm:flex-row gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=br.com.egp_app&hl=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 justify-center bg-black rounded-xl px-4 py-3 hover:opacity-90 transition w-48"
              >
                <img src={googlePlay} alt="Google Play" className="h-10 w-auto" />
                <p> Google Play</p>
              </a>

              <a
                href="https://apps.apple.com/br/app/seuapp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 justify-center bg-black rounded-xl px-4 py-3 hover:opacity-90 transition w-48"
              >
                <img src={appStore} alt="App Store" className="h-10 w-auto" />
                <p>Apple Store</p>
              </a>
              <a
                href="../assets/downloads/app-release.apk"
                download="../assets/downloads/app-release.apk"
                rel="noopener noreferrer"
                className="flex items-center gap-2 justify-center bg-black rounded-xl px-4 py-3 hover:opacity-90 transition w-48"
              >
                <img src={APK} alt="App Store" className="h-10 w-auto" />
                <p>Baixe o APK</p>
              </a>
            </div>
            <p className="text-gray-400 mt-2 text-sm">Não está conseguindo pela loja? Baixe o APK acima</p>
          </div>
        </div>

        {/* Linha inferior */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Grupo EGP. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

