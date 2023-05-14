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
            const data = await response.json();
            if (!response.ok) {
                window.alert(data.error);
            }
            else { window.alert(data.message) };
        }
        catch (error) {
            console.error(error);

        }

    }
    const updateUser = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }
    return (
        <form className="w-full max-w-sm " onSubmit={handleSubmit}>

            <Input obj={user} inputType="name" handleChange={updateUser} />
            <Input obj={user} inputType="email" handleChange={updateUser} />
            <Input obj={user} inputType="password" handleChange={updateUser} />

            <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                    <div className="md:w-full flex md:items-center md:justify-center">
                        <button type="submit" className="flex self gap-2 bg-blue-500 items-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
                            <h1 className="font-bold">Register</h1>
                            <IoIosCreate className="" size="40" />
                        </button>
                    </div>
                </div>
            </div>

        </form>
    );
}

export default RegisterForm;






