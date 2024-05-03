'use client'
import { motion } from 'framer-motion'
import { ArrowDown } from '@/components/icons'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/constans'
const Scroll = () => {
  return (
    <motion.div
      initial='hidden'
      animate='show'
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className='my-10 flex items-center justify-center'
    >
      <div className='my-10 flex animate-pulse flex-col items-center justify-center md:my-20'>
        <motion.p variants={FADE_DOWN_ANIMATION_VARIANTS}>Scroll</motion.p>
        <motion.span variants={FADE_DOWN_ANIMATION_VARIANTS}>
          <ArrowDown className='mt-2 size-5 animate-bounce ' />
        </motion.span>
      </div>
    </motion.div>
  )
}
export default Scroll
