import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Header } from "./components//header/header";

export const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Cool NextJS testing project",
    description: "A front-end news project built on the excellent NextJS framework.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${inter.variable}`}>
                <Header />
                {children}
            </body>
        </html>
    );
}
