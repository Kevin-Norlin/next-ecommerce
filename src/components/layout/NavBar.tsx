"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {useEffect, useContext} from "react";
import { FaTimes, FaUserCircle } from "react-icons/fa";
import { FiUser, FiUserCheck } from "react-icons/fi";
import { GlobalContext } from "@/hooks/context/global";
import { useSession } from "next-auth/react";

// NavBar made using motion. 
export const NavBar = () => {
    const { toggleNavBar, showNavBar } = useContext(GlobalContext);
    const { status, data: session} = useSession();
    useEffect(() => {
        // Mounting
        document.body.style.overflowY = showNavBar ? "hidden" : "auto";

        // Unmounting
        return () =>  {
            document.body.style.overflowY = "auto";
        }
    })
    return (
        <div>
           {showNavBar &&  (
                
        <motion.div
        initial={{x:"100vw"}} 
        animate={{x:0}} 
        exit={{x:"100vw", transition: {duration: 0.5} }} 
        transition={{type: "spring", duration:0.5}}
        className=" fixed top-0 right-0 z-20 flex flex-col justify-baseline items-center gap-10 h-screen w-auto shadow-xl text-logo text-4xl font-bold bg-main pt-20">

            <FaTimes className="right-2 top-2 absolute bg-red hover:cursor-pointer"onClick={toggleNavBar} />
            <Link href={status === "authenticated" ? "/myaccount" : "/login"} onClick={toggleNavBar}> 
                { status === "authenticated" ?
                <FiUserCheck className="right-14 top-2 absolute bg-red hover:cursor-pointer text-black " />
                :
                <FiUser className="right-14 top-2 absolute bg-red hover:cursor-pointer text-black " />
                
                }
                </Link>

            <div className="flex flex-col justify-baseline p-20 items-center gap-10 right-0 h-screen w-full 
                            shadow-xl text-logo text-4xl font-bold">
            <Link href="/" className="NavBar-link" onClick={toggleNavBar}> Home </Link>
            <Link href="/shop" className="NavBar-link" onClick={toggleNavBar} > Shop </Link>
            </div>
        </motion.div>
            )}
            </div>
        
    );
};
