"use client";

import { ContactRequestModel } from "@/app/models/contact-request-model";
import { CustomCheckbox } from "../../custom-checkbox/custom-checkbox";
import { CustomInput } from "../../custom-input/custom-input";
import "./contact-form.scss";
import { useRef, useState, useCallback, SyntheticEvent, ChangeEvent } from "react";

type ContactFormProps = {
    onClose: () => void;
};

export const ContactForm = ({ onClose }: ContactFormProps) => {
    const [agreement, setAgreement] = useState(false);

    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = useCallback(
        (e: SyntheticEvent) => {
            e.preventDefault();

            if (formRef.current) {
                const formData = new FormData(formRef.current);

                const data: ContactRequestModel = {
                    name: formData.get("name") as string,
                    phone: formData.get("phone") as string,
                    email: formData.get("email") as string,
                };

                console.log("Contact us form data:", data);

                onClose();
            }
        },
        [onClose],
    );

    return (
        <form ref={formRef} onSubmit={handleSubmit} className='popup-form'>
            <CustomInput type='text' name='name' placeholder='Имя' required />

            <CustomInput type='tel' name='phone' placeholder='Номер телефона' required />

            <CustomInput type='email' name='email' placeholder='Email' required />

            <CustomCheckbox
                name='agreement'
                checked={agreement}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setAgreement(e.target.checked);
                }}
                label='Я СОГЛАСЕН (-А) НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ'
                required
            />

            <div className='form-actions'>
                <button type='submit' className='custom-button'>
                    Отправить
                </button>
            </div>
        </form>
    );
};
