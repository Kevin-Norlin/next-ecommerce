import CreateProduct from "@/components/form/CreateProduct";
import UpdateProduct from "@/components/form/UpdateProduct";
import { useSession, signOut } from "next-auth/react";
import {  useState } from "react";
import { BsDatabaseFillAdd } from "react-icons/bs"; 
import { useRouter } from "next/router";
import { Profile } from "@/components/pageComponents/Profile";

export default function myAccount() {
    const router = useRouter();
    const [ showAdd, setShowAdd ] = useState(false);
    const [ showUpdate, setShowUpdate ] = useState(false); 
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
            <Profile showAdd={showAdd} setShowAdd={setShowAdd} showUpdate={showUpdate} setShowUpdate={setShowUpdate} />
            
            {showAdd && <CreateProduct />}
            
            {showUpdate && <h1> Update product </h1> && <UpdateProduct />}
            
        </div>
    )
}
