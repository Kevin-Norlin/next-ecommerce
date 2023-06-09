import React, { useContext } from "react";
import { ProductType } from "@/utils/types/productTypes";
import { Product } from "../product/Product";
import { GlobalContext } from "@/hooks/context/global";

interface ShowcaseProps {
    products: ProductType[];
  }
  
export const Products: React.FC<ShowcaseProps> = ({ products }) => {
    const {search} = useContext(GlobalContext);
    return (
        <div className=" w-screen h-screen">
        <div className="flex justify-between gap-10 p-6 items-baseline flex-wrap">
            {products.filter((item: ProductType) => (item.name.toLowerCase().startsWith(search.toLowerCase()))).map((item: ProductType, index: number) => (
                
                <div className="" key= {index}>
                <Product name={item.name} imgUrl={item.imgUrl} desc={item.desc} stock={item.stock} isShowcase={item.isShowcase} type={item.type} typeSpecific={item.typeSpecific} price={item.price} />
                </div>
            ))}
        </div>
        </div>
    )
}