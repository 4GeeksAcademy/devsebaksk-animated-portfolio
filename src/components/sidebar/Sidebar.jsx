import React, { useState } from 'react'
import '/src/components/sidebar/sidebar.scss'
import { Links } from './links/Links'
import { ToggleButton } from './toggleButton/ToggleButton'
import { motion } from "framer-motion"

const variants = {
    open: {
        clipPath: "circle(1200px at 50px 50px)",
        transition: {
            type: "spring",
            stiffness: 30,
        }
    },
    closed: {
        clipPath: "circle(30px at 50px 50px)",
        transition: {
            delay: 0.4,
            type: "spring",
            stiffness: 450,
            damping: 40,
        }
    }
}


export const Sidebar = () => {
    const [open, setOpen] = useState(false);
    return (
        <motion.div className='sidebar' animate={open ? "open" : "closed"}>
            <motion.div className='bg' variants={variants}>
                <Links />
            </motion.div>
            <ToggleButton setOpen={setOpen} />
        </motion.div>
    )
}
