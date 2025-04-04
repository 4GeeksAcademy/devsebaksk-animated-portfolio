import React from 'react'
import { motion } from "framer-motion"
import '/src/components/navbar/navbar.scss'
import { Sidebar } from '../sidebar/Sidebar'

export const Navbar = () => {
    return (
        <div className='navbar'>
            {/*Sidebar*/}
            <Sidebar/>
            <div className='wrapper'>
                <motion.span 
                initial={{ opacity: 0, scale: 0.5 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.5 }}>
                    Chiki Glam
                </motion.span>
                <div className='social'>
                    <a href='https://www.instagram.com/chiki.glam/'><i className="fa-brands fa-square-instagram" style={{ color: "white" }}></i></a>
                    <a href='https://wa.me/+5492995217901'><i className="fa-brands fa-square-whatsapp" style={{ color: "white" }}></i></a>
                </div>
            </div>
        </div>
    )
}
