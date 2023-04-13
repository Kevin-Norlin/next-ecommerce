"use client";
import { useState } from "react";
import { IoIosLogIn } from "react-icons/io";
import { UserType } from "@/utils/types";

function RegisterForm() {
    const [user, setUser] = useState<UserType>({ name: "", email: "", password: "", roles: ["default"] });
    const handleSubmit = async () => {

        try {
            const response = await fetch("api/validate-user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });
            if (!response.ok) {
                throw new Error("Failed to validate user...");
            }
            console.log("User validated successfully!" + JSON.stringify(response));
        }
        catch (error) {
            console.error(error);
        }

    }
    return (
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>

           

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
                        <h1 className="font-bold">Log in</h1>
                        <IoIosLogIn className="" size="40" />
                    </div>
                </div>
            </div>
        </form>

    );
}


export default RegisterForm;



/*
 <form className="" onSubmit={handleSubmit}>

            
            <div className="">
                <h1> Email: </h1>
                <input placeholder="Email" type="text" value={user.email} onChange={(event) => setUser({ ...user, email: event.target.value })} />
            </div>
            <div className="">
                <h1>Password: </h1>
                <input placeholder="Password" type="password" value={user.password} onChange={(event) => setUser({ ...user, password: event.target.value })} />
            </div>
            <div className="flex flex-row items-center justify-center gap-2 hover: cursor-pointer " onClick={handleSubmit}>
                <h1 className="font-bold">Log in</h1>
                <IoIosLogIn className="" size="40" />
            </div>
        </form>
*/