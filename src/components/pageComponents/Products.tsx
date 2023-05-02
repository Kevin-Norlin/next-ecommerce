import React from "react";
import { ProductType } from "@/utils/types/productTypes";
import { Product } from "../product/Product";

interface ShowcaseProps {
    products: ProductType[];
  }
  
export const Products: React.FC<ShowcaseProps> = ({ products }) => {
    return (
        <div className="flex justify-center items-baseline gap-10 flex-wrap w-screen h-screen">
            {products.map((item: ProductType, index: number) => (
                <div key= {index}>
                <Product name={item.name} imgUrl={item.imgUrl} desc={item.desc} stock={item.stock} isShowcase={item.isShowcase} type={item.type} typeSpecific={item.typeSpecific} />
                </div>
            ))}
        </div>
    )
}