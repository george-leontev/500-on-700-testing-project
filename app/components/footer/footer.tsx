"use client";

import "./footer.scss";
import Image from "next/image";
import { appLogoWhite } from "@/app/assets";

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <Image src={appLogoWhite} alt='logo' className='footer-logo' />
                <h1 className='footer-text'>КРЕАТИВНОЕ АГЕНТСТВО 500NA700</h1>
            </div>
        </footer>
    );
};
