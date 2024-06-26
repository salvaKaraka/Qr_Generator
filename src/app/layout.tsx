import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";


export const metadata: Metadata = {
  title: "Generador de QR",
  description: "Un simple generador de QR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-neutral-900 overflow-x-hidden flex flex-col min-h-screen">
        <Header/>
        <section className="flex-1">{children}</section>
        <Footer/>  
      </body>
      
    </html>
  );
}
