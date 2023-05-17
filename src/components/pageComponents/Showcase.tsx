import { ProductType } from "@/utils/types/productTypes";
import { Product } from "../product/Product";
import { useState, useEffect } from "react";
import {BsArrowRightCircle, BsArrowLeftCircle} from "react-icons/bs";


interface ShowcaseProps {
    products: ProductType[];
}

export const Showcase: React.FC<ShowcaseProps> = (props) => {
    const showcaseProducts = props.products.filter((item) => item.isShowcase);
    function wrapSlice(array: ProductType[], start: number, end: number) {
        if (start < end) {
            return array.slice(start, end);
        } else {
            return array.slice(start).concat(array.slice(0, end));
        }
    }
    const [index, setIndex] = useState(0);
    const [items, setItems] = useState(wrapSlice(showcaseProducts, index, index +4));
    const handlePrevClick = () => {
        if (index - 4 < 0) {
            setIndex(0);
        }
        else {
            setIndex(index - 4);
        }
        setItems(wrapSlice(showcaseProducts, index, (index + 4) % showcaseProducts.length));
    }
    const handleNextClick = () => {
        if (index + 4 > showcaseProducts.length -1) {
            setIndex(0);
        } else {
            setIndex(index + 4);
        }
            
        setItems(wrapSlice(showcaseProducts, index, (index + 4) % showcaseProducts.length));
    }
    useEffect(() => {
        console.log(items);
        console.log("and this is the filtered: " + showcaseProducts.length)
    })
    return (
        <div className="relative flex justify-center flex-col items-center gap-20 flex-wrap w-screen">
            <div className="absolute top-48 left-4 hover:scale-125 transition-all">
                <button onClick={handlePrevClick}>
                    <BsArrowLeftCircle size={24} />
                </button>
            </div>
            <div className="flex flex-row gap-6">
                {items.map((item: ProductType, index: number) => (
                    item.isShowcase &&
                    <div key={index}>
                        <Product name={item.name} imgUrl={item.imgUrl} desc={item.desc} stock={item.stock} isShowcase={item.isShowcase} price={item.price} type={item.type} typeSpecific={item.typeSpecific} />
                    </div>
                ))}
            </div>
            <div className="absolute top-48 right-4 hover:scale-125 transition-all">
                <button className=""onClick={handleNextClick}>
                    <BsArrowRightCircle size={24} />
                </button>
            </div>
        </div>
    )
}

