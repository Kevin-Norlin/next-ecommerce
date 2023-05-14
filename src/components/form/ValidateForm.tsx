"use client";
import { FormEventHandler, useState } from "react";
import { IoIosLogIn } from "react-icons/io";
import { UserType } from "@/utils/types/generalTypes";
import { Input } from "../ui/Input";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

function RegisterForm() {
    const router = useRouter();
    const [user, setUser] = useState<UserType>({ name: "", email: "", password: "", roles: ["default"] });
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const response = await signIn("credentials", {
            email: user.email,
            password: user.password,
            redirect: false
        });
        if ( !response?.error) {
            window.alert("You are logged in");
            router.push("/myaccount");
        }
        else {
            window.alert("Wrong email or password...")
        }
    }

    const updateUser = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setUser({...user, [name]: value});
    }
    return (
        
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
           <Input obj={user} inputType="email" handleChange={updateUser} />
           <Input obj={user} inputType="password" handleChange={updateUser} />
            <div className="md:flex md:items-center ">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3 flex md:items-center md:justify-center">
                    <button type="submit" className="flex flex-row items-center w-fit justify-center gap-2 hover: cursor-pointer">
                        <h1 className="font-bold">Log in</h1>
                        <IoIosLogIn className="" size="40" />
                    </button>
                    
                </div>
            </div>
        </form>
        
       
    );
}


export default RegisterForm;



