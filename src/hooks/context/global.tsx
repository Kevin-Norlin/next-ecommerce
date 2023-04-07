
import { createContext, useContext, useState } from "react";

interface GlobalContextI {
    name: string;
    setName: (name: string) => void;
    email: string;
    setEmail: (email: string) => void;
    showCart: boolean;
    setCart: (showCart: boolean) => void;
    showNavBar: boolean;
    setNavBar: (showNavBar: boolean) => void;
    toggleCart: () => void;
    toggleNavBar: () => void;
}

// Global context used all over the application
export const GlobalContext = createContext<GlobalContextI>(
    {
        name: '',
        setName: () => { },
        email: '',
        setEmail: () => { },
        showCart: false,
        setCart: () => { },
        showNavBar: false,
        setNavBar: () => { },
        toggleCart: () => { },
        toggleNavBar: () => { }
    }
)

// Provider - not sure if im gonna use
export const GlobalProvider = ({ children }: { children?: React.ReactNode }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [showCart, setCart] = useState(false);
    const [showNavBar, setNavBar] = useState(false);
    const toggleCart = () => setCart(!showCart);
    const toggleNavBar = () => setNavBar(!showNavBar);
    return (
        <GlobalContext.Provider value={{ name, setName, email, setEmail, showCart, setCart, showNavBar, setNavBar, toggleCart, toggleNavBar }}>
          {children}
        </GlobalContext.Provider>
      );

}

