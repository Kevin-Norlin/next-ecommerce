"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {useEffect, useContext} from "react";

import { GlobalContext } from "@/hooks/context/global";

// NavBar made using motion. 
export const NavBar = () => {
    const { toggleNavBar, showNavBar } = useContext(GlobalContext);
    useEffect(() => {
        // Mounting
        document.body.style.overflowY = showNavBar ? "hidden" : "auto";

        // Unmounting
        return () =>  {
            document.body.style.overflowY = "auto";
        }
    })
    return (
        <AnimatePresence>
           {showNavBar &&  (
                
        <motion.div
        initial={{x:"100vh"}} 
        animate={{x:0}} 
        exit={{x:"100vh", transition: {duration: 0.5} }} 
        transition={{type: "spring", duration:0.5}}
        
        className="NavBar">
            <button onClick={toggleNavBar}> Exit</button>
            <Link href="/" className="NavBar-link" onClick={toggleNavBar}> Home </Link>
            <Link href="/login" className="NavBar-link" onClick={toggleNavBar}> Log in </Link>
            <Link href="/myaccount" className="NavBar-link" onClick={toggleNavBar}> My Account</Link>
            <Link href="/shop" className="NavBar-link" onClick={toggleNavBar} > Shop </Link>
        </motion.div>
            )}
        </AnimatePresence>
    );
};