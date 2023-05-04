import { useState } from "react";
import { Input } from "../ui/Input";
import { ProductType, getDefaultProduct } from "@/utils/types/productTypes";


function updateProductForm() {
    const [product, setProduct] = useState<ProductType>(getDefaultProduct());
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setProduct({ ...product, [name]: value })
        console.log("this is the object: ");
        console.log(product)
    }
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const response = await fetch("api/update-product", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(product)
            });
            if (!response.ok) {
                throw new Error("Failed to update product");
            }
            console.log("Product updated successfully!" + JSON.stringify(response));
        }
        catch (error) {
            console.error(error);
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <Input obj={product} key="name" inputType="name" handleChange={(handleChange)} />
            <Input obj={product} key="desc" inputType="desc" handleChange={(handleChange)} />
            <Input obj={product} key="imgUrl" inputType="imgUrl" handleChange={(handleChange)} />
            <Input obj={product} key="stock" inputType="stock" handleChange={(handleChange)} />
            <Input obj={product} key="isShowcase" inputType="isShowcase" handleChange={(handleChange)} />
            <Input obj={product} key="type" inputType="type" handleChange={(handleChange)} />
            <Input obj={product} key="price" inputType="price" handleChange={(handleChange)} />
            {/* Add ability to change typeSpecific attributes later */}
            <button type="submit"> Submit </button>
            </form>
        </div>
        
    )
}
/*
name: String,
    desc: String,
    imgUrl: String,
    stock: Number,
    isShowcase: Boolean,
    type: String,
    price: Number,
    typeSpecific: Object

*/

export default updateProductForm;