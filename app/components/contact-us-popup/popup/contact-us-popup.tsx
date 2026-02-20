"use client";

import "./contact-us-popup.scss";
import { useCallback, MouseEvent } from "react";
import Image from "next/image";
import { closeIcon } from "@/app/assets";
import { ContactUsForm } from "../form/contact-us-form";

type ContactUsPopupProps = {
    onClose: () => void;
};

export const ContactUsPopup = ({ onClose }: ContactUsPopupProps) => {
    const handleOverlayClick = useCallback(
        (e: MouseEvent<HTMLDivElement>) => {
            if (e.target === e.currentTarget) {
                onClose();
            }
        },
        [onClose],
    );

    return (
        <div className='popup-overlay' onClick={handleOverlayClick}>
            <div className='popup-container'>
                <div className='popup-header'>
                    <h2 className='popup-title'>СВЯЗАТЬСЯ С НАМИ</h2>
                    <button className='popup-close' onClick={onClose}>
                        <Image src={closeIcon} alt='close-icon' />
                    </button>
                </div>
                <ContactUsForm onClose={onClose} />
            </div>
        </div>
    );
};
