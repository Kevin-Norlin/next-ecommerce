import React from "react";
import { ProductType } from "@/utils/types";
import { Product } from "./Product";

interface ShowcaseProps {
    products: ProductType[];
  }
  
export const Showcase: React.FC<ShowcaseProps> = ({ products }) => {
    return (
        <div>
            {products.map((item: ProductType, index: number) => (
                <Product name={item.name} imgUrl={item.imgUrl} desc={item.desc} inStock={item.inStock} />
            ))}
        </div>
    )
}

// Fetch data once the page is requested
