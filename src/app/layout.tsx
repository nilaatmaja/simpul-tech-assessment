import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QuicksWidget from "@/components/Quicks/QuicksWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Nila Atmaja",
    description: "Simpul Technologies Assessment",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
                <QuicksWidget />
            </body>
        </html>
    );
}
