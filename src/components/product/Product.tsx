"use client";
import { ProductType } from "@/utils/types/productTypes";
import Image from 'next/image';
import { firstToUpper } from "@/utils/functions/stringfunctions";
import { useState } from "react";
import {BsFillBoxSeamFill} from "react-icons/bs";
import { Input } from "../ui/Input";
export const Product : React.FC<ProductType> = (props) => {
    const [hovering, setHovering] = useState(false);
    // Fix indexing on typeSpecific
    if (hovering) {
        return (
            <div onMouseEnter={() =>  setHovering(true)} onMouseLeave={() => setHovering(false)} key={props.name} className="bg-red rounded-xl flex flex-col jusify-baseline items-center gap-5 p-10  h-fit w-96
                                        shadow-2xl hover:scale-110 cursor-pointer ">
            <h3 className="text-logo font-bold">{props.name}</h3>
            <img src={props.imgUrl} alt={props.name} width={100} height="auto"  /> 
            
            <p>{props.desc}</p>
            {Object?.keys(props.typeSpecific).map((key) => {
                    return <p>{firstToUpper(key) }: {props.typeSpecific[key.toString()]} </p> ;
                })}
            <BsFillBoxSeamFill color={props.stock ? "green" : "red"} />
        </div>
        )
    }
    return (
        
        <div onMouseEnter={() =>  setHovering(true)} onMouseLeave={() => setHovering(false)} key={props.name} className="bg-inherit rounded-xl flex flex-col jusify-baseline items-center gap-5 w-64 h-64 
                                        shadow-2xl hover:scale-110 cursor-pointer">
            <h3 className="text-logo font-bold">{props.name}</h3>
            <img src={props.imgUrl} alt={props.name} width={100} height="auto"  /> 
            <p>{hovering ? "Hovering" : "not hovering"}</p>
            <BsFillBoxSeamFill color={props.stock ? "green" : "red"} />
        </div>
    )
}

