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
                    Cleat
                </motion.span>
                <div className='social'>
                    <a href=''><i className="fa-brands fa-square-instagram" style={{ color: "#d3d3d3" }}></i></a>
                    <a href=''><i className="fa-brands fa-square-whatsapp" style={{ color: "#d3d3d3" }}></i></a>
                </div>
            </div>
        </div>
    )
}
