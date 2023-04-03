import {createContext, useContext, useState} from "react";

interface globalContext {
    name: string;
    setName: Function;
    email: string;
    setEmail: Function;
    showCart: boolean;
    toggleShowCart: Function;
    showNavBar: boolean;
    toggleShowNavBar: Function;
    
}



const Context = createContext();
