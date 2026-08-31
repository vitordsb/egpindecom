
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import cerca1 from '../assets/images/cerca1.png'
import cerca2 from '../assets/images/cerca2.png'

const Hero = () => {
  const backgrounds = [cerca1, cerca2]
  const currentBackground = backgrounds[0]

  return (
    <section
      id="inicio"
      className="relative flex items-center justify-center overflow-hidden text-white min-h-[90vh] sm:min-h-screen"
      style={{
        backgroundImage: `url(${currentBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay escuro para melhorar contraste do texto */}
      <div className="absolute inset-0 bg-black/40 sm:bg-black/20"></div>

      {/* Conteúdo */}
      <motion.div
        className="relative z-10 w-full max-w-6xl px-4 sm:px-8 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {/* Título */}
        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="block text-white">
            TECNOLOGIA E SEGURANÇA EM
          </span>
          <span className="block text-[#DF5167]">
            ALARMES E ELETRIFICADORES
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          className="text-base sm:text-lg md:text-2xl text-gray-200 max-w-2xl sm:max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Soluções modernas em{' '}
          <span className="text-[#DF5167] font-semibold">
            proteção perimetral
          </span>
          , integrando tecnologia e design para a sua segurança residencial e comercial.
        </motion.p>

        {/* Botões */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 justify-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <Link to="/products">
            <Button
              size="lg"
              className="w-full bg-[#DF5167] hover:bg-[#c24359] text-white px-8 py-5 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-[#DF5167]/30 transition-all group"
            >
              Nossos Produtos
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>

          <Button
            size="lg"
            className="w-full bg-[#2E74FF] hover:bg-[#255fd9] text-white px-8 py-5 text-base sm:text-md font-semibold rounded-xl shadow-lg hover:shadow-[#2E74FF]/30 transition-all group"
          >
            Falar com vendedor
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>

          <Link to="/manuais">
            <Button
              size="lg"
              variant="outline"
              className="w-full border-2 border-[#DF5167] text-[#DF5167] hover:bg-[#DF5167] hover:text-white px-8 py-5 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300"
            >
              Manuais
            </Button>
          </Link>

          <Link to="/eventos">
            <Button
              size="lg"
              variant="outline"
              className="w-full border-2 border-[#2E74FF] text-[#2E74FF] hover:bg-[#2E74FF] hover:text-white px-8 py-5 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300"
            >
              Nossos eventos
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Indicador de rolagem */}
      <motion.div
        className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 sm:w-7 h-10 sm:h-12 border-2 border-[#DF5167]/70 rounded-full flex justify-center items-start">
          <div className="w-1 h-3 bg-[#DF5167]/70 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero

