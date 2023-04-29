import RegisterForm from "@/components/form/RegisterForm";
import ValidateForm from "@/components/form/ValidateForm";
import { useSession } from "next-auth/react";

export default function Login() {
    const {status, data} = useSession();
    return (
        <> 
        <div className="flex items-center justify-evenly flex-col w-screen h-screen text-logo text-center  ">
            <div className="flex gap-40 ">
            <h1 className="font-bold text-6xl text-center w-96 ">Create a user!</h1>
                <RegisterForm />
            </div>
            <div className="flex gap-40">
            <h1 className="font-bold text-6xl text-center w-96  ">Log in!</h1>
                <ValidateForm />
            </div>
            <div>
                {status}
            </div>
        </div>
        </>
    )
}