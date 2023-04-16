"use client";
import { useState } from "react";
import { ProductType, ProductType_Keyboard, ProductType_Laptop, ProductType_Mouse, ProductType_Mobile, ProductType_PC, ProductType_Tablet } from "@/utils/types/productTypes";
import { IoIosCreate } from "react-icons/io";
import { Input } from "../ui/Input";


function AddProductForm() {
    const [productType, setProductType] = useState("");
    const [product, setProduct] = useState<ProductType>({ name: "", imgUrl: "", desc: "", stock: 0, isShowcase: false, type: "Keyboard", typeSpecific: { connection: "USB", wireless: false, switches: "MX brown" } as ProductType_Keyboard });
    return (
        <form className="w-full max-w-sm " onSubmit={(e) => handleSubmit(e, product)}>

            <Input obj={product} inputType={"name"} setObj={setProduct} />
            <Input obj={product} inputType={"imgUrl"} setObj={setProduct} />
            <Input obj={product} inputType={"desc"} setObj={setProduct} />
            <Input obj={product} inputType={"stock"} setObj={setProduct} />
            <Input obj={product} inputType={"isShowcase"} setObj={setProduct} />
            <Input obj={product} inputType={"type"} setObj={setProduct} />

            {/* Something for the typespecific */}
            {(() => {
                switch (product.type) {
                    case "PC":
                        return renderTypeSpecificInputs(product.type, product.typeSpecific, setProduct); break;
                    case "Laptop":
                        return <Input obj={product.typeSpecific} inputType="gpu" setObj={setProduct} />;
                    case "Keyboard":
                        return <Input obj={product.typeSpecific} inputType="layout" setObj={setProduct} />;
                    default:
                        return null;
                }
            })()}








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

function renderTypeSpecificInputs(type: any, typeSpecific : any, setObj: any) {
   
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

