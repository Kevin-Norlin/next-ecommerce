import React, { useState } from "react";
import { ProductType } from "@/utils/types/productTypes";
import { Product } from "../product/Product";

interface ShowcaseProps {
    products: ProductType[];
  }
  
export const Products: React.FC<ShowcaseProps> = ({ products }) => {
    
    return (
        <div className=" w-screen h-screen">
        <div className="flex justify-evenly m- items-baseline basis-0 flex-wrap">
            {products.map((item: ProductType, index: number) => (
                <div  key= {index}>
                <Product name={item.name} imgUrl={item.imgUrl} desc={item.desc} stock={item.stock} isShowcase={item.isShowcase} type={item.type} typeSpecific={item.typeSpecific} price={item.price} />
                </div>
            ))}
        </div>
        </div>
    )
}