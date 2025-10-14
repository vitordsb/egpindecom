import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logoegpsemfundo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: 'Início', href: '/' },
    { name: 'Sobre Nós', href: '/about' },
    { name: 'Produtos', href: '/products' },
    { name: 'Comércio Exterior', href: '/international' },
    { name: 'Localização', href: '/location' },
    { name: 'Contato', href: '/contact' },
    { name: 'politica de privacidade', href: '/politica-de-privacidade' },
  ];

  return (
    <nav className="bg-white shadow-md sticky w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="#inicio">
              <img src={logo} alt="Grupo EGP" className="h-16 w-auto" />
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md font-medium transition-colors duration-200"
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

