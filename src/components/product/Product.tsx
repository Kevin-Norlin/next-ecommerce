import { ProductType } from "@/utils/types";
import Image from 'next/image';
import {BsFillBoxSeamFill} from "react-icons/bs";
export const Product : React.FC<ProductType> = (props) => {
    return (
        <div key={props.name} className="bg-inherit rounded-xl flex flex-col jusify-baseline items-center gap-5 flex-wrap w-64 h-64 
                                        shadow-2xl hover:scale-125 cursor-pointer transition-all">
            <h3 className="text-logo font-bold">{props.name}</h3>
            <Image  src={props.imgUrl} alt={props.name}height={1000} width={1000} className="w-28 h-28"  /> 
            <p>{props.desc}</p>
            <BsFillBoxSeamFill color={props.inStock ? "green" : "red"} />
        </div>
    )
}

