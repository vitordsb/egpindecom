
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import cerca1 from '../assets/images/cerca1.png'
import cerca2 from '../assets/images/cerca2.png'

const Hero = () => {
  const backgrounds = [
    cerca1, // substitua pelos nomes corretos no seu projeto
    cerca2,
  ]

  const currentBackground = backgrounds[0]
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 text-white"
      style={{
        backgroundImage: `url(${currentBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="text-white">TECNOLOGIA E SEGURANÇA EM</span>
          <br />
          <span className="">
            ALARMES E ELETRIFICADORES
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-gray-100 max-w-3xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Soluções modernas em <span className="text-[#DF5167] font-semibold">proteção perimetral</span>,
          integrando tecnologia, design e confiança para segurança residencial e comercial.
        </motion.p>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <Link to="/products">
            <Button
              size="lg"
              className="bg-[#DF5167] hover:bg-[#c24359] text-white px-10 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-[#DF5167]/30 transition-all group"
            >
              Nossos Produtos
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>

          <Link>
            <Button
              size="lg"
              className="bg-[#2E74FF] hover:bg-[#255fd9] text-white px-10 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-[#2E74FF]/30 transition-all group"
            >
              Fale com um Vendedor
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>

          <Link to="/manuais">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#DF5167] text-[#DF5167] hover:bg-[#DF5167] hover:text-white px-10 py-6 text-lg font-semibold rounded-xl transition-all duration-300"
            >
              Manuais de Instalação
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>

          <Link>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#2E74FF] text-[#2E74FF] hover:bg-[#2E74FF] hover:text-white px-10 py-6 text-lg font-semibold rounded-xl transition-all duration-300"
            >
              Solicite um Orçamento
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-7 h-12 border-2 border-[#DF5167]/70 rounded-full flex justify-center items-start">
          <div className="w-1 h-3 bg-[#DF5167]/70 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero

