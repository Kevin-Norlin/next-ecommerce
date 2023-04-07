import { NavBar } from "./NavBar";
import { useState } from "react";

interface Props {
    name: string;
    email: string;
    age: number;
    showCart?: () => void;
    showNavBar?: () => void;
}

export const Header = (props: Props) => {

    return (
        <div className="Header">
            <div className="Header-elem1">
                <h1 className="Header-Logo">E-commerce</h1>
            </div>
            <div className="Header-elem2">
                <h3 className="Header-LoggedInUser">{props?.name}</h3>

                <button className="NavBar-button" onClick={props.showNavBar} >NavBar</button>
                <button className="Cart-button" onClick={props.showCart}>Cart</button>
            </div>
        </div>
    );
}