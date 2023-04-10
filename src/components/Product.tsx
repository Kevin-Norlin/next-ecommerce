import { ProductType } from "@/utils/types";
import Image from 'next/image';

export const Product : React.FC<ProductType> = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <Image src={props.imgUrl} alt={props.name} width={24} height="24"/>
            
            
        </div>
    )
}