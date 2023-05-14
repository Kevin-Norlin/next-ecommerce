import RegisterForm from "@/components/form/RegisterForm";
import ValidateForm from "@/components/form/ValidateForm";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Login() {
    const { status, data: session } = useSession();
    const [register, setRegister] = useState(true);
    return (
        <>
            <div className="flex items-center justify-start pt-40 flex-col w-screen h-screen text-logo text-center  ">
                {register ?
                    <div className="">
                        <div className="flex gap-40 ">
                            <h1 className="font-bold text-6xl text-center w-96 ">Create a user!</h1>
                            <RegisterForm />

                        </div>
                        <div className="flex p-10 justify-center items-center ">
                            <button onClick={() => setRegister(!register)}> Already have a user?</button>
                        </div>
                    </div>
                    :
                    <div>
                    <div className="flex gap-40">
                        <h1 className="font-bold text-6xl text-center w-96  ">Log in!</h1>
                        <ValidateForm />
                    </div>
                    <div className="flex p-10 justify-center items-center ">
                            <button onClick={() => setRegister(!register)}> Want to create an account?</button>
                        </div>
                    </div>
                }

            </div>
        </>
    )
}