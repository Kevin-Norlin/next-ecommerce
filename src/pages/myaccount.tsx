import CreateProduct from "@/components/form/CreateProduct";
import { GlobalContext } from "@/hooks/context/global";
import { useContext } from "react";

export default function myAccount() {
    const {user} = useContext(GlobalContext); 
    return (
        <div>
            {user && <CreateProduct />}
            {user.email}
        </div>
    )
}