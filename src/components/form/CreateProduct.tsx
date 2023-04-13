"use client";
import { useState } from "react";
import { ProductType } from "@/utils/types";


function RegisterForm() {
    const [product, setProduct] = useState<ProductType>({ name: "", imgUrl: "", desc: "", inStock: true, isShowcase: true });
    return (
        <form onSubmit={(e) => handleSubmit(e, product)}>
            <div>
                Name:
                <input type="text" value={product.name} onChange={(event) => setProduct({ ...product, name: event.target.value })} />
            </div>
            <div>
                Description:
                <input type="text" value={product.desc} onChange={(event) => setProduct({ ...product, desc: event.target.value })} />
            </div>
            <div>
                Img-url:
                <input type="text" value={product.imgUrl} onChange={(event) => setProduct({ ...product, imgUrl: event.target.value })} />
            </div>
            <div>
                <h1> In stock? </h1>
                <input type="checkbox" checked={product.inStock} onChange={(event) => setProduct({ ...product, inStock: event.target.checked })} />
            </div>
            <div>
                <h1> Showcase? </h1>
                <input type="checkbox" checked={product.isShowcase} onChange={(event) => setProduct({ ...product, isShowcase: event.target.checked })} />
            </div>
            <button type="submit">Create User</button>
        </form>
    );
}

async function handleSubmit(e: React.FormEvent<HTMLFormElement>, product: ProductType) {
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




export default RegisterForm;

