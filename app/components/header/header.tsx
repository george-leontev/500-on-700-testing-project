"use client";

import { useState } from "react";
import { appLogo } from "../../assets";
import Image from "next/image";
import "./header.scss";
import { ContactUsPopup } from "../contact-us-popup/popup/contact-us-popup";
import Link from "next/link";

export const Header = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <>
            <div className='header'>
                <Link href={"/news"}>
                    <Image src={appLogo} className='logo-icon' alt='app-logo' />
                </Link>
                <div>
                    <button className='custom-button' onClick={() => setIsPopupOpen(true)}>
                        Связаться с нами
                    </button>
                </div>
            </div>

            {isPopupOpen && <ContactUsPopup onClose={() => setIsPopupOpen(false)} />}
        </>
    );
};
