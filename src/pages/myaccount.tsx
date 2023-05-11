import CreateProduct from "@/components/form/CreateProduct";
import UpdateProduct from "@/components/form/UpdateProduct";
import { useSession, signOut } from "next-auth/react";
import {  useState } from "react";
import { BsDatabaseFillAdd } from "react-icons/bs"; 
import { useRouter } from "next/router";

export default function myAccount() {
    const router = useRouter();
    const [ show, setShow ] = useState(false);
    const {data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
          router.push("/login");
        },
      })
    
      if (status === "loading") {
        return "Loading..."
      }
    
    
    return (
        <div className="flex items-center flex-col gap-5 min-h-screen">
            <h1 className="text-logo text-4xl"> Signed in as: {session?.user?.email} </h1>
            <button onClick={ ()=> (signOut())}> Sign out </button>
             <button className="hover:cursor-pointer flex gap-5" onClick={() => setShow(!show)}> Add product  <BsDatabaseFillAdd /> </button>
            
            {show && <CreateProduct />}
            
            {show && <h1> Update product </h1> && <UpdateProduct />}
            
        </div>
    )
}
