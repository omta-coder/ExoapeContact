import { motion } from 'framer-motion'
import React from 'react'


const Marqee = () => {
  return (
    <div className='w-full py-5 whitespace-nowrap overflow-hidden  flex mt-24'>
        <motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease:"linear", duration:30}} className='line text-8xl font-regular leading-none tracking-tight'>
        Get in touch · 保持联系 · Ponerse en contacto · Neem contact op ·&nbsp;
        </motion.div>
        <motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease:"linear", duration:30}} className='line text-8xl font-regular leading-none tracking-tight'>
        Get in touch · 保持联系 · Ponerse en contacto · Neem contact op ·&nbsp;
        </motion.div>
    </div>
  )
}

export default Marqee