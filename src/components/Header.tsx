import { GlobalContext } from "@/hooks/context/global";
import { NavBar } from "./NavBar";
import { useContext, useState } from "react";
import { FaBars, FaShoppingCart } from "react-icons/fa";



export const Header = () => {
    const { name, toggleNavBar, toggleCart} = useContext(GlobalContext);
    return (
        <div className="flex flex-row justify-between items-center mx-auto px-20 sticky top-0 
                        bg-inherit w-screen h-24 
                        hover:shadow-lg duration-300">
            <div className="">
                <h1 className="text-logo text-4xl font-bold">E-commerce</h1>
            </div>
            <div className="flex flex-row justify-between items-center gap-20">
                <h3 className="">{name}</h3>
                <FaShoppingCart className="hover:cursor-pointer"size="38" onClick={toggleCart} />

                <FaBars className="hover:cursor-pointer"size="38" onClick={toggleNavBar} />
                
            </div>
        </div>
    );
}