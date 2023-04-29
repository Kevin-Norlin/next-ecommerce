"use client";
import { FormEventHandler, useState } from "react";
import { IoIosLogIn } from "react-icons/io";
import { UserType } from "@/utils/types/generalTypes";
import { Input } from "../ui/Input";
import { signIn, signOut } from "next-auth/react";

function RegisterForm() {
    const [user, setUser] = useState<UserType>({ name: "", email: "", password: "", roles: ["default"] });
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const response = await signIn("credentials", {
            email: user.email,
            password: user.password,
            redirect: false
        });
        console.log(response);

    }

    /*
    const handleSubmit = async () => {
        try {
            const response = await fetch("api/validate-user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });
            const data = await response.json();
            if (!response.ok) {
                window.alert(data.error);
            }
            else {
                window.alert(data.message);
            }
            
        }
        catch (error) {
            console.error(error);
        }
    }
    */
    const updateUser = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setUser({...user, [name]: value});
    }
    return (
        
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
           <Input obj={user} inputType="email" handleChange={updateUser} />
           <Input obj={user} inputType="password" handleChange={updateUser} />
            <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                    <button type="submit" className="flex flex-row items-center justify-center gap-2 hover: cursor-pointer ">
                        <h1 className="font-bold">Log in</h1>
                        <IoIosLogIn className="" size="40" />
                    </button>
                    <button onClick={ ()=> (signOut())}> Sign out </button>
                </div>
            </div>
        </form>
        
       
    );
}


export default RegisterForm;



