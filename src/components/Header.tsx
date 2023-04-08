import { GlobalContext } from "@/hooks/context/global";
import { NavBar } from "./NavBar";
import { useContext, useState } from "react";



export const Header = () => {
    const { name, toggleNavBar, toggleCart} = useContext(GlobalContext);
    return (
        <div className="Header">
            <div className="Header-elem1">
                <h1 className="Header-Logo">E-commerce</h1>
            </div>
            <div className="Header-elem2">
                <h3 className="Header-LoggedInUser">{name}</h3>

                <button className="NavBar-button" onClick={toggleNavBar} >NavBar</button>
                <button className="Cart-button" onClick={toggleCart}>Cart</button>
            </div>
        </div>
    );
}