"use client";
import { SetStateAction, useState } from "react";
import { ProductType, ProductSpec, ProductSpecType_Keyboard, ProductSpecType_Laptop, ProductSpecType_Mouse, ProductSpecType_Mobile, ProductSpecType_PC, ProductSpecType_Tablet, getDefaultTypeSpecific } from "@/utils/types/productTypes";
import { IoIosCreate } from "react-icons/io";
import { Input } from "../ui/Input";
import { Dropdown } from "../ui/Dropdown";
import { TypeSpecForm } from "./TypeSpecForm";
import { useEffect } from "react";

function AddProductForm() {
    const [typeSpecific, setTypeSpecific] = useState<ProductSpec>({ connection: "USB", wireless: false, switches: "MX brown" });
    const [product, setProduct] = useState<ProductType>({ name: "", imgUrl: "", desc: "", stock: 0, isShowcase: false, type: "Keyboard", typeSpecific: typeSpecific });
    
    const updateProduct = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        // Sets Typespec to new default object uppon typechange in product
        if (name === "type") {
            switch(value) {
                case "PC": setTypeSpecific(getDefaultTypeSpecific("PC")); break;
                case "Laptop": setTypeSpecific(getDefaultTypeSpecific("Laptop")); break;
                case "Mobile": setTypeSpecific(getDefaultTypeSpecific("Mobile")); break;
                case "Tablet": setTypeSpecific(getDefaultTypeSpecific("Tablet")); break;
                case "Mouse": setTypeSpecific(getDefaultTypeSpecific("Mouse")); break;
            }
        }
        setProduct({...product,[name]: value} )
        console.log("This is the typeSpecState: ")
        console.log(product.typeSpecific)
    }
    const updateTypeSpecific = ((event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setTypeSpecific({...typeSpecific, [name]: value })
    })

    useEffect(() => {
        // Update typeSpec to product everytime the typeSpecific state changes
        setProduct((prevProduct) => ({
          ...prevProduct,
          typeSpecific: typeSpecific,
        }));
        console.log(product.typeSpecific)
      }, [typeSpecific]); 
    
    return (
        <div>
        <form>
        <Dropdown obj={product} inputType="type" handleChange={updateProduct} options={["PC", "Laptop", "Mobile", "Tablet", "Mouse"]} />

        {/* Renders a input element for each typespecific property */}
        {Object?.keys(typeSpecific).map((key) => {
            return <Input key={key} obj={typeSpecific} inputType={key} handleChange={updateTypeSpecific} />;
        })}

        {product.type} 
        
            <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                    <div className="flex flex-row items-center justify-center gap-2 hover: cursor-pointer ">
                        <h1 className="font-bold">Add product</h1>
                        <button type="submit" />
                        <IoIosCreate className="" size="40" />
                    </div>
                </div>
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
        console.log("User creted successfully!" + JSON.stringify(response));
    }
    catch (error) {
        console.error(error);
    }

}

function renderTypeSpecificInputs(type: any, typeSpecific: any, setObj: any) {

    return Object.keys(typeof typeSpecific).map((prop) => (
        <Input
            obj={typeSpecific}
            inputType={prop}
            setObj={setObj}
        />
    ));
}

/*
onChange={(event) => setProduct({ ...product, name: event.target.value })}
*/
export default AddProductForm;

//const user = useState({name: "", age: "", ageSpecific: {stamina: 2, health: "GOOD"}});