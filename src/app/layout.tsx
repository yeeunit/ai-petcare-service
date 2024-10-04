import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Layout/Header/Header";
import Footer from "@/components/Layout/Footer/Footer";

export const metadata: Metadata = {
  title: "AI Petcare Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div className="flex flex-col h-screen">
          <Header />
          <main className="flex-grow overflow-y-auto ">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
