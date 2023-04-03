"use client";
import { useState } from "react";

interface User {
    email: string;
    password: string;
}

function LoginForm() {
    const [user, setUser] = useState<User>({ email: "", password: "" });
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch("api/post-user", {
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
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" value={user.email} onChange={(event) => setUser({ ...user, email: event.target.value })} />
            </label>
            <br />
            <label>
                Password:
                <input type="password" value={user.password} onChange={(event) => setUser({ ...user, password: event.target.value })} />
            </label>
            <br />
            <button type="submit">Create User</button>
        </form>
    );
}

export default LoginForm;


