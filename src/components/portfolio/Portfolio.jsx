import React, { useRef } from 'react'
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const items = [
    {
        id: 1,
        title: "Pijamada",
        img: "https://images.pexels.com/photos/31263848/pexels-photo-31263848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos nostrum dignissimos fugiat facere molestiae eligendi dicta! Vitae recusandae necessitatibus tempore reiciendis exercitationem dolores, facere ducimus similique eius labore pariatur deleniti."
    },
    {
        id: 2,
        title: "Noche De Cine",
        img: "./nochecine.jpg",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos nostrum dignissimos fugiat facere molestiae eligendi dicta! Vitae recusandae necessitatibus tempore reiciendis exercitationem dolores, facere ducimus similique eius labore pariatur deleniti."
    },
    {
        id: 3,
        title: "Pijamada + SkinCare",
        img: "https://images.pexels.com/photos/31316960/pexels-photo-31316960/free-photo-of-trafico-nocturno-lluvioso-visto-a-traves-de-la-ventana.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos nostrum dignissimos fugiat facere molestiae eligendi dicta! Vitae recusandae necessitatibus tempore reiciendis exercitationem dolores, facere ducimus similique eius labore pariatur deleniti."
    },
    {
        id: 4,
        title: "Pijamada + Cine",
        img: "https://images.pexels.com/photos/30648527/pexels-photo-30648527/free-photo-of-paseo-tranquilo-por-el-rio-a-traves-de-bosques-frondosos.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos nostrum dignissimos fugiat facere molestiae eligendi dicta! Vitae recusandae necessitatibus tempore reiciendis exercitationem dolores, facere ducimus similique eius labore pariatur deleniti."
    },
    {
        id: 5,
        title: "Pijamada + Cine + SkinCare",
        img: "https://images.pexels.com/photos/30648527/pexels-photo-30648527/free-photo-of-paseo-tranquilo-por-el-rio-a-traves-de-bosques-frondosos.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos nostrum dignissimos fugiat facere molestiae eligendi dicta! Vitae recusandae necessitatibus tempore reiciendis exercitationem dolores, facere ducimus similique eius labore pariatur deleniti."
    }
];

const Single = ({ item }) => {

    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        //offset: ["start start","end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);


    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2 style={{ y }}>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>Contratar</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export const Portfolio = () => {

    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", 'start start']
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });
    return (
        <div className='portfolio' ref={ref} >
            <div className="progress">
                <h1>Nuestros Packs</h1>
                <motion.div className="progressBar" style={{ scaleX }}>

                </motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}
