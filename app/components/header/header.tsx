"use client";

import "./header.scss";
import { useState } from "react";
import { appLogo } from "../../assets";
import Image from "next/image";
import { ContactPopup } from "../contact-popup/popup/contact-popup";
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

            {isPopupOpen && <ContactPopup onClose={() => setIsPopupOpen(false)} />}
        </>
    );
};
