"use client";
import { useContext, useState } from "react";
import { IoIosLogIn } from "react-icons/io";
import { UserType } from "@/utils/types/generalTypes";
import { Input } from "../ui/Input";
import { GlobalContext } from "@/hooks/context/global";

function RegisterForm() {
    const {user, setUser} = useContext(GlobalContext);
    const [userState, setUserState] = useState<UserType>({ name: "", email: "", password: "", roles: ["default"] });
    const handleSubmit = async () => {
        try {
            const response = await fetch("api/validate-user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userState)
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
    const updateUser = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setUserState({...userState, [name]: value});
    }
    return (
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
           <Input obj={userState} inputType="email" handleChange={updateUser} />
           <Input obj={userState} inputType="password" handleChange={updateUser} />
            <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                    <div className="flex flex-row items-center justify-center gap-2 hover: cursor-pointer " onClick={handleSubmit}>
                        <h1 className="font-bold">Log in</h1>
                        <IoIosLogIn className="" size="40" />
                    </div>
                </div>
            </div>
        </form>

    );
}


export default RegisterForm;



