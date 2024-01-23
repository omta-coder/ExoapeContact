import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const Image = () => {
  const [move, setMove] = useState({top:"50%",left:"50%"});
  useEffect(() => {
   window.addEventListener("mousemove",function(e){
    setMove({top:e.clientY+"px",left:e.clientX+"px"});
   })
  })
  
  return (
    <div>
      <motion.img
      initial={{top:move.top,left:move.left}} 
      animate={{top:move.top,left:move.left}}
      transition={{ease:[0.25,1,.5,1],duration:2}}
      className='fixed -translate-x-[50%] -translate-y-[50%] z-[2] w-[96] top-1/2 left-[60%]'
      src="https://a.storyblok.com/f/133769/758x1134/002f93a9b3/exo-ape-contact.jpg/m/270x404/filters:format(webp):quality(90)" alt="" />
    </div>
  )
}

export default Image