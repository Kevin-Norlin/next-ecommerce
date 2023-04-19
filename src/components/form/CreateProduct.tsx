"use client";
import { SetStateAction, useState } from "react";
import { ProductType, ProductSpec, ProductSpecType_Keyboard, ProductSpecType_Laptop, ProductSpecType_Mouse, ProductSpecType_Mobile, ProductSpecType_PC, ProductSpecType_Tablet, getDefaultTypeSpecific } from "@/utils/types/productTypes";
import { IoIosCreate } from "react-icons/io";
import { Input } from "../ui/Input";
import { Dropdown } from "../ui/Dropdown";

import { useEffect } from "react";

function AddProductForm() {
    const [typeSpecific, setTypeSpecific] = useState<ProductSpec>(getDefaultTypeSpecific("PC"));
    const [product, setProduct] = useState<ProductType>({ name: "", imgUrl: "", desc: "", stock: 0, isShowcase: false, type: "Keyboard", typeSpecific: typeSpecific });

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
        console.log("this is the object: ");
        console.log(product)
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
        console.log("UseEffect typespecific: ");
        console.log(product.typeSpecific);
        console.log("UseEffect product: ")
        console.log(product);

    }, [typeSpecific]);

    return (
        <div>
            <form>

            <h1 className="text-logo text-xl p-10 text-center"> Base information</h1>
                {Object?.keys(product).map((key) => {
                    if (key !== "type" && key !== "typeSpecific") return <Input key={key} obj={product} inputType={key} handleChange={updateProduct} />;
                })}
                <Dropdown obj={product} inputType="type" handleChange={updateProduct} options={["PC", "Laptop", "Mobile", "Tablet", "Mouse"]} />

                {/* Renders a input element for each typespecific property */}
                <h1 className="text-logo text-xl p-10 text-center"> Technical specs</h1>
                {Object?.keys(typeSpecific).map((key) => {
                    return <Input key={key} obj={typeSpecific} inputType={key} handleChange={updateTypeSpecific} />;
                })}
                        <div className="flex flex-row items-center justify-center p-10 gap-2 hover: cursor-pointer ">
                            <h1 className="font-bold text-center">Add product</h1>
                            <button type="submit" />
                            <IoIosCreate className="" size="40" />
                        </div> 
            </form>
        </div>
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
        console.log("Product creted successfully!" + JSON.stringify(response));
    }
    catch (error) {
        console.error(error);
    }

}

export default AddProductForm;

