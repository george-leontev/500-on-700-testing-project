import { InputHTMLAttributes } from "react";
import "./custom-checkbox.scss";
import { checkIcon } from "@/app/assets";
import Image from "next/image";

interface CustomCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export const CustomCheckbox = ({ label, ...props }: CustomCheckboxProps) => {
    return (
        <label className='custom-checkbox'>
            <input type='checkbox' {...props} required />
            <span className='box'>
                <Image src={checkIcon} alt='check-mark' />
            </span>
            {label && <span className='label'>{label}</span>}
        </label>
    );
};
