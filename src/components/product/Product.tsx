"use client";
import { ProductSpec, ProductType } from "@/utils/types/productTypes";
import { firstToUpper } from "@/utils/functions/stringfunctions";
import { useState } from "react";
import { BsFillBoxSeamFill } from "react-icons/bs";
export const Product: React.FC<ProductType> = (props) => {
    const [hovering, setHovering] = useState(false);
    return (
        <div onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} key={props.name}
            className="bg-red rounded-xl flex flex-col jusify-baseline items-center gap-5 p-10 {hovering ? h-fit w-96 : w-64 h-64}
            shadow-2xl hover:scale-110 cursor-pointer transition-all ">
            <h3 className="text-logo font-bold">{props.name}</h3>
            <img src={props.imgUrl} alt={props.name} width={100} height="auto" />
            {hovering && <p>{props.desc}</p>}
            {hovering && (Object?.keys(props.typeSpecific).map((key) => {
                return <p key={key}>{firstToUpper(key)}: {props.typeSpecific[key as keyof (ProductSpec)]} </p>;
            }))}
            <h3> Price: {props.price}</h3>
            <BsFillBoxSeamFill color={props.stock ? "green" : "red"} />
        </div>
    )


}

