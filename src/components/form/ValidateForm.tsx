"use client";
import { useState } from "react";
import { IoIosLogIn } from "react-icons/io";
interface User {
    email: string;
    password: string;
}

function RegisterForm() {
    const [user, setUser] = useState<User>({ email: "", password: "" });
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
        <form className=" flex justify-center items-center flex-col gap-20 text-logo shadow-xl w-96 h-96" onSubmit={handleSubmit}>


            <div className="flex items-center justify-center flex-col gap-5">
                <h1> Email: </h1>
                <input placeholder="Email" type="text" value={user.email} onChange={(event) => setUser({ ...user, email: event.target.value })} />
            </div>
            <div className="flex items-center justify-center flex-col gap-5">
                <h1>Password: </h1>
                <input placeholder="Password" type="password" value={user.password} onChange={(event) => setUser({ ...user, password: event.target.value })} />
            </div>
            <div className="flex flex-row items-center justify-center gap-2 hover: cursor-pointer " onClick={handleSubmit}>
                <h1 className="font-bold">Log in</h1>
                <IoIosLogIn className="" size="40" />
            </div>
        </form>
    );
}

export default RegisterForm;


