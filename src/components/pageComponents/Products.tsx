import React from "react";
import { ProductType } from "@/utils/types/generalTypes";
import { Product } from "../product/Product";

interface ShowcaseProps {
    products: ProductType[];
  }
  
export const Products: React.FC<ShowcaseProps> = ({ products }) => {
    return (
        <div className="flex justify-center items-center gap-20 flex-wrap w-screen">
            {products.map((item: ProductType, index: number) => (
                <div key= {index}>
                <Product name={item.name} imgUrl={item.imgUrl} desc={item.desc} inStock={item.inStock} isShowcase={item.isShowcase} />
                </div>
            ))}
        </div>
    )
}