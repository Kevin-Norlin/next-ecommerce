"use client";
import { useState } from "react";
import { ProductType, ProductType_Keyboard, ProductType_Laptop, ProductType_Mouse, ProductType_Mobile, ProductType_PC, ProductType_Tablet } from "@/utils/types/productTypes";
import { IoIosCreate } from "react-icons/io";
import { Input } from "../ui/Input";


function AddProductForm() {
    const [productType, setProductType] = useState("");
    const [product, setProduct] = useState<ProductType>({ name: "", imgUrl: "", desc: "", stock: 0, isShowcase: false, type: "Keyboard", typeSpecific: {connection: "USB", wireless:false, switches: "MX brown"} });
    return (
        <form className="w-full max-w-sm " onSubmit={(e) => handleSubmit(e,product)}>

            <Input obj={product} inputType={"name"} setObj={setProduct}/>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                        Image url:
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-logo" id="inline-email" type="text" value={product.imgUrl} onChange={(event) => setProduct({ ...product, imgUrl: event.target.value })} />
                </div>
            </div>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                        Description:
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-logo" id="inline-email" type="text" value={product.imgUrl} onChange={(event) => setProduct({ ...product, imgUrl: event.target.value })} />
                </div>
            </div>


            


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

/*
onChange={(event) => setProduct({ ...product, name: event.target.value })}
*/
export default AddProductForm;

