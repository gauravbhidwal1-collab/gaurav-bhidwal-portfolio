import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { WHATSAPP_URL } from '../data/portfolio'

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      className="fab-whatsapp"
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat on WhatsApp"
      title="Message on WhatsApp"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.08, y: -3 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaWhatsapp className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden />
    </motion.a>
  )
}
