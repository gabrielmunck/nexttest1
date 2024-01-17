import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";
import { url } from "inspector";

const redHat = Red_Hat_Display({
    weight: ["400", "500", "600", "800", "700", "900"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    display: "swap",
    variable: "--Red-Hat",
});

export const metadata: Metadata = {
    title: "Lil Next text",
    description: "Primeiro projeto em next",
    openGraph: {
        title: "Lil Next text",
        description: "Primeiro projeto em next",
        url: "Mywebsiteinnext.com",
        siteName: "Nequistih",
        images: [
            {
                url: "/next.svg",
                width:1260, 
                height:800,
            },
        ],
        locale: 'pt-BR'
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <body className={redHat.className}>{children}</body>
        </html>
    );
}
