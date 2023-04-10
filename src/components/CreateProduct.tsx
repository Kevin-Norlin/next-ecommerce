"use client";
import { useState } from "react";
import { ProductType } from "@/utils/types";

function RegisterForm() {
    const [product, setProduct] = useState<ProductType>({ name: "", imgUrl: "", desc: "", inStock:true});
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch("api/post-product", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(product)
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
                Name:
                <input type="text" value={product.name} onChange={(event) => setProduct({ ...product, name: event.target.value })} />
            </label>
            <label>
                Description:
                <input type="text" value={product.desc} onChange={(event) => setProduct({ ...product,desc: event.target.value })} />
            </label>
            <label>
                Img-url:
                <input type="text" value={product.imgUrl} onChange={(event) => setProduct({ ...product, imgUrl: event.target.value })} />
            </label>
            
            <button type="submit">Create User</button>
        </form>
    );
}

export default RegisterForm;

