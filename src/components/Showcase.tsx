import React from "react";
import { ProductType } from "@/utils/types";
import { Product } from "./Product";

interface ShowcaseProps {
    products: ProductType[];
  }
  
export const Showcase: React.FC<ShowcaseProps> = ({ products }) => {
    return (
        <div className="flex justify-center items-center gap-20 flex-wrap w-screen">
            {products.map((item: ProductType, index: number) => (
                <div key= {index}>
                <Product name={item.name} imgUrl={item.imgUrl} desc={item.desc} inStock={item.inStock} />
                </div>
            ))}
        </div>
    )
}

// Fetch data once the page is requested
