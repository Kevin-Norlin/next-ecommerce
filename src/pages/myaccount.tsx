import CreateProduct from "@/components/form/CreateProduct";
import { GlobalContext } from "@/hooks/context/global";
import { useSession } from "next-auth/react";
import { useContext } from "react";

export default function myAccount() {
    const { data: session, status } = useSession()
    return (
        <div>
            {session?.user ? <CreateProduct /> : <h1>Log in to add a product</h1>}
            {session?.user.email}
        </div>
    )
}