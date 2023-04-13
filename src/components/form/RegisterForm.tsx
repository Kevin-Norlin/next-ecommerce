"use client";
import { useState } from "react";
import { IoIosCreate } from "react-icons/io";
import { UserType } from "@/utils/types";


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
    return (
        <form className="w-full max-w-sm " onSubmit={handleSubmit}>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                        Full Name
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-logo" id="inline-full-name" type="text" value={user.name} onChange={(event) => setUser({ ...user, name: event.target.value })} />
                </div>
            </div>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                        Email
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-logo" id="inline-email" type="text" value={user.email} onChange={(event) => setUser({ ...user, email: event.target.value })} />
                </div>
            </div>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                        Password
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-logo" id="inline-password" type="password" placeholder="******************" onChange={(event) => setUser({ ...user, password: event.target.value })} />
                </div>
            </div>


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






