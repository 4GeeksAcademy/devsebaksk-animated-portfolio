import React,{useRef} from 'react'
import "./parallax.scss"
import {motion, useScroll, useTransform} from "framer-motion"

export const Parallax = ({type}) => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start", "end start"]
    })

    const yText = useTransform(scrollYProgress, [0,1],["0%","500%"])
    const yBg = useTransform(scrollYProgress, [0,1],["0%","100%"])
    const starsBg = useTransform(scrollYProgress, [0,1],["0%","-100%"])
    return (
        <div className='parallax' 
        ref={ref}
        style={{ 
            background: 
                type == "services" ? 
                    "linear-gradient(180deg, #D6EC9E, #84E6CD)"
                    :"linear-gradient(180deg, #73DCDE, #FE88DA)"
        }}>
            <motion.h1 style={{y:yText}}>{type == "services" ? "Nuestros Servicios" : "Nuestros Packs"}</motion.h1>
            <motion.div className='mountains'></motion.div>
            <motion.div className='planets' style={{x:yBg, backgroundImage:`url(${type=="services"?"/carpa1.png":"/sun.png"})`}}></motion.div>
            <motion.div className="stars" style={{x:starsBg}}></motion.div>
            <motion.div className='mountainsbd'></motion.div>
        </div>
    )
}
