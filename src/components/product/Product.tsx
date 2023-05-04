"use client";
import { ProductSpec, ProductType } from "@/utils/types/productTypes";
import { firstToUpper } from "@/utils/functions/stringfunctions";
import { useState } from "react";
import { BsFillBoxSeamFill } from "react-icons/bs";
export const Product: React.FC<ProductType> = (props: ProductType) => {
    const [hovering, setHovering] = useState(false);
    return (
        <div onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} key={props.name}
            className={`rounded-xl flex flex-col jusify-baseline items-center basis10 gap-5 p-10 ${hovering ? "absolute z-100 h-fit w-96" : "w-96 h-96"}
            shadow-2xl hover:scale-110 cursor-pointer transition-all`}>
            <h3 className="font-bold">{props.name}</h3>
            <div className="w-64 h-64 flex items-center justify-center">
                <img className="bg-red" src={props.imgUrl} alt={props.name} width={hovering ? 400 : 200}  />
            </div>
            {hovering && <p>{props.desc}</p>}
            {hovering && (Object?.keys(props.typeSpecific).map((key) => {
                return <p className="font-bold" key={key}>{firstToUpper(key)}: {props.typeSpecific[key as keyof (ProductSpec)]} </p>;
            }))}
            <div>
                <h3 className="font-bold"> Price: {props.price} kr</h3>
            </div>
            <div>
                <BsFillBoxSeamFill color={props.stock ? "green" : "red"} />
            </div>
        </div>
    )


}

