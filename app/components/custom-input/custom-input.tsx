"use client";

import { InputHTMLAttributes } from "react";
import "./custom-input.scss";

type CustomInputProps = InputHTMLAttributes<HTMLInputElement> & {};

export const CustomInput = (props: CustomInputProps) => {
    return (
        <div className='custom-input-wrapper'>
            <input className={`custom-input`} {...props} />
        </div>
    );
};
