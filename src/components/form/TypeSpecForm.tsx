"use client";
import { SetStateAction, useState } from "react";
import { ProductType, ProductSpec, ProductSpecType_Keyboard, ProductSpecType_Laptop, ProductSpecType_Mouse, ProductSpecType_Mobile, ProductSpecType_PC, ProductSpecType_Tablet } from "@/utils/types/productTypes";
import { IoIosCreate } from "react-icons/io";
import { Input } from "../ui/Input";
import { Dropdown } from "../ui/Dropdown";
import { useEffect } from "react";

export const TypeSpecForm = (props: any) => {
    return (
        <div>
            {/* Renders a input element for each typespecific property */}
            <h1 className="text-logo text-xl p-10 text-center"> Technical specs</h1>
            {Object?.keys(props.typeSpecific).map((key) => {
                return <Input key={key} obj={props.typeSpecific} inputType={key} handleChange={props.updateTypeSpecific} />;
            })}
        </div>
    )
}