"use client";
import { useState } from "react";
import { ProductType, ProductSpec, getDefaultTypeSpecific } from "@/utils/types/productTypes";
import { Input } from "../ui/Input";
import { Dropdown } from "../ui/Dropdown";
import { useEffect } from "react";
import { BsDatabaseFillAdd } from "react-icons/bs";
import { TypeSpecForm } from "./TypeSpecForm";

function AddProductForm() {
    const [typeSpecific, setTypeSpecific] = useState<ProductSpec>(getDefaultTypeSpecific("PC"));
    const [product, setProduct] = useState<ProductType>({ name: "", imgUrl: "", desc: "", stock: 0, isShowcase: false, type: "Keyboard", price: 0, typeSpecific: typeSpecific });

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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
            console.log("Product creted successfully!" + JSON.stringify(response));
        }
        catch (error) {
            console.error(error);
        }
    }
    const updateProduct = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        // Sets Typespec to new default object uppon typechange in product
        if (name === "type") {
            switch (value) {
                case "PC": setTypeSpecific(getDefaultTypeSpecific("PC")); break;
                case "Laptop": setTypeSpecific(getDefaultTypeSpecific("Laptop")); break;
                case "Mobile": setTypeSpecific(getDefaultTypeSpecific("Mobile")); break;
                case "Tablet": setTypeSpecific(getDefaultTypeSpecific("Tablet")); break;
                case "Mouse": setTypeSpecific(getDefaultTypeSpecific("Mouse")); break;
            }
        }
        setProduct({ ...product, [name]: value })
    }
    const updateTypeSpecific = ((event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setTypeSpecific({ ...typeSpecific, [name]: value })
    })

    useEffect(() => {
        // Update typeSpec to product everytime the typeSpecific state changes
        setProduct((prevProduct) => ({
            ...prevProduct,
            typeSpecific: typeSpecific,
        }));
    }, [typeSpecific]);
    return (
        <div >
            <form onSubmit={handleSubmit} >

                <h1 className="text-logo text-xl p-10 text-center"> Base information</h1>
                {Object?.keys(product).map((key) => {
                    if (key !== "type" && key !== "typeSpecific") return <Input key={key} obj={product} inputType={key} handleChange={updateProduct} />;
                })}
                <Dropdown obj={product} inputType="type" handleChange={updateProduct} options={["PC", "Laptop", "Mobile", "Tablet", "Mouse"]} />
                <TypeSpecForm typeSpecific={typeSpecific} updateTypeSpecific={updateTypeSpecific} />
                <div className="flex items-center justify-center p-10">
                    <button type="submit" className="flex self gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
                        Submit product  <BsDatabaseFillAdd />
                    </button>
                </div>

            </form>
        </div>
    );
}


export default AddProductForm;

