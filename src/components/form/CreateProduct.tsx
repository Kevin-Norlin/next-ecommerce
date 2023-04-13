"use client";
import { useState } from "react";
import { ProductType } from "@/utils/types";
import { Checkbox } from "../ui/Checkbox";

function RegisterForm() {
    const [product, setProduct] = useState<ProductType>({ name: "", imgUrl: "", desc: "", inStock: true, isShowCase: true });
    const [checkedStock, setCheckedStock] = useState(false);
    const [checkedShowcase, setChekcedShowcase] = useState(false);
    const toggleCheckedStock = () => {setCheckedStock(!checkedStock)};
    const toggleCheckedShowcase = () => {setChekcedShowcase(!checkedShowcase)};
    
    return (
        <form onSubmit={(e) => handleSubmit(e, product)}>
            <label>
                Name:
                <input type="text" value={product.name} onChange={(event) => setProduct({ ...product, name: event.target.value })} />
            </label>
            <label>
                Description:
                <input type="text" value={product.desc} onChange={(event) => setProduct({ ...product, desc: event.target.value })} />
            </label>
            <label>
                Img-url:
                <input type="text" value={product.imgUrl} onChange={(event) => setProduct({ ...product, imgUrl: event.target.value })} />
            </label>
            <h1> In stock? </h1>
            <Checkbox checked={checkedStock} toggleChecked={toggleCheckedStock} />
            <h1> Showcase? </h1>
            <Checkbox checked={checkedShowcase} toggleChecked={toggleCheckedShowcase} />
          



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

