"use client";
import { useState } from "react";
import { IoIosCreate } from "react-icons/io";
import { UserType } from "@/utils/types/generalTypes";
import { Input } from "../ui/Input";


function RegisterForm() {
    const [user, setUser] = useState<UserType>({ name: "", email: "", password: "", roles: ["default"] });
    const handleSubmit = async () => {
        try {
            const response = await fetch("api/register-user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });
            if (!response.ok) {
                throw new Error("Failed to create user...");
            }
            console.log("User creted successfully!" + JSON.stringify(response));
        }
        catch (error) {
            console.error(error);
        }

    }
    const updateUser = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setUser({...user, [name]: value});
    }
        return (
            <form className="w-full max-w-sm " onSubmit={handleSubmit}>

                <Input obj={user} inputType="name" handleChange={updateUser} />
                <Input obj={user} inputType="email" handleChange={updateUser} />
                <Input obj={user} inputType="password" handleChange={updateUser} />

                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <div className="flex flex-row items-center justify-center gap-2 hover: cursor-pointer " onClick={handleSubmit}>
                            <h1 className="font-bold">Register</h1>
                            <IoIosCreate className="" size="40" />
                        </div>
                    </div>
                </div>
            </form>
        );
    }

    export default RegisterForm;






