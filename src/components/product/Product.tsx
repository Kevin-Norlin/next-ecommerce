"use client";
import { ProductSpec, ProductType } from "@/utils/types/productTypes";
import { firstToUpper } from "@/utils/functions/stringfunctions";
import { useState } from "react";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { AiOutlineFullscreenExit } from "react-icons/ai";
export const Product: React.FC<ProductType> = (props: ProductType) => {
    const [hovering, setHovering] = useState(false);
    const [clicked, setClicked] = useState(false);
    const handleEnterHovering = () => {
        if (clicked) {
            return;
        }
        else {
            setHovering(true);
        }
    }
    const handleLeaveHovering = () => {
        if (clicked) {
            return;
        }
        else {
            setHovering(false);
        }
    }

    return (
        <div onClick={() => setClicked(!clicked)} onMouseEnter={handleEnterHovering} onMouseLeave={handleLeaveHovering} key={props.name}
            className={`rounded-xl flex flex-col bg-main jusify-baseline 
            items-center basis10 gap-5 p-10 
            ${clicked ? "h-full w-fill absolute p-40 z-100 top-20 left-0 right-0" : "w-96 h-96"}
            shadow-2xl transition-all ${hovering && "scale-110 cursor-pointer"}`}>
                <div className="absolute bg-red-500 right-20 top-30">
                {clicked && <AiOutlineFullscreenExit />}
                </div>
            <h3 className="font-bold">{props.name}</h3>
            <div className="w-64 h-64 flex items-center justify-center">
                <img className="bg-red" src={props.imgUrl} alt={props.name} width={200}  />
            </div>
            {clicked && <p>{props.desc}</p>}
            {clicked && (Object?.keys(props.typeSpecific).map((key) => {
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

