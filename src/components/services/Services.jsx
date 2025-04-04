import React, { useRef } from 'react'
import "./services.scss"
import {motion, useInView} from "framer-motion"

const variants = {
    initial:{
        x:-500,
        y:100,
        opacity:0,
    },
    animate:{
        x:0,
        y:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        }
    }
}

export const Services = () => {

    const ref = useRef()
    const isInView = useInView(ref, {margin:"-100px"})

  return (
    <motion.div className='services' variants={variants} initial="initial" ref={ref} animate={ window.innerWidth<= 900 ? "animate" : isInView && "animate"} >
        <motion.div className="textContainer">
            <p>Creamos la mejor experiencia
                <br/>de pijamadas
            </p>
            <hr/>
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src='/carpa.jpg' alt=''/>
                <h1>Ideas <motion.b whileHover={{color:"#9a20f7"}} >Unicas</motion.b></h1>
            </div>
            <div className="title">
                <h1><motion.b whileHover={{color:"#9a20f7"}}>Para tu </motion.b> Pijamada</h1>
                <button>Que Ofrecemos?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{background:"lemonchiffon", color:"black"}}>
                <h2>Carpa XL</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lemonchiffon", color:"black"}}>
                <h2>Proyector 4K</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lemonchiffon", color:"black"}}>
                <h2>SkinCare</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lemonchiffon", color:"black"}}>
                <h2>Decoración Unica</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <button>Go</button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}
