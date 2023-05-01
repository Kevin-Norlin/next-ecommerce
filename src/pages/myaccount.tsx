import CreateProduct from "@/components/form/CreateProduct";
import { GlobalContext } from "@/hooks/context/global";
import { useSession } from "next-auth/react";
import { useContext, useState } from "react";
import { BsDatabaseFillAdd } from "react-icons/bs"; 

export default function myAccount() {
    const { data: session, status } = useSession();
    const [ show, setShow ] = useState(false);
    
    return (
        <div className="flex items-center flex-col gap-5 min-h-screen">
            <h1 className="text-logo text-4xl"> Signed in as: {session?.user?.email} </h1>
             <button className="hover:cursor-pointer flex gap-5" onClick={() => setShow(!show)}> Add product  <BsDatabaseFillAdd /> </button>
            
            {session?.user && show && <CreateProduct />}
            
        </div>
    )
}