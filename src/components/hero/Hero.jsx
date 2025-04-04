import React from 'react'
import "./hero.scss"
import {motion} from "framer-motion"

const textVariants ={
  initial:{
    x:-300,
    opacity:0
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration: 1,
      staggerChildren: 0.1

    }
  },
  scrollButton:{
    opacity:1,
    y:15,
    transition:{
      duration:2,
      repeat:Infinity,
    }
  }
};


const logoVariants ={
  initial:{
    x:500,
    opacity:0
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration: 1,
      staggerChildren: 0.1

    }
  }
};

const slidingVariants ={
  initial:{
    x:0,
  },
  animate:{
    x:"-300%",
    transition:{
      repeat:Infinity,
      repeatType:"mirror",
      duration: 20

    }
  },
};

export const Hero = () => {

  return (
    <div className='hero'>
      <div className='wrapper'>
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>CHIKI GLAM</motion.h2>
          <motion.h1 variants={textVariants}>La Mejor Experencia Para los Mas Chicos</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.a variants={textVariants} href={"#Portfolio"}>Nuestros Planes</motion.a>
            <motion.a className="contact" variants={textVariants} href={"#Contact"}>Contactanos!</motion.a>
          </motion.div>
          <motion.i className="fa-solid fa-arrow-down scroll" style={{color:"#9a20f7", fontSize:"40px"}} variants={textVariants} animate="scrollButton"/>
          
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={slidingVariants} initial="initial" animate="animate">
        CHIKI GLAM 
      </motion.div>
      <motion.div className="imageContainer" variants={logoVariants} initial="initial" animate="animate">
        <img src='/logo.png' alt=''  />
      </motion.div>
    </div>
  )
}
