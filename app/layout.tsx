import { ReactNode } from "react";
import "./globals.css";
import NavMenu from "../components/NavMenu";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="h-full bg-[#F2F2F2] flex flex-row-reverse md:flex-row md:h-screen">
        <section className="w-20 bg-white p-6 border border-[#E6E6E6] self-stretch flex flex-col item-center bottom-1 fixed md:relative">
          <NavMenu />
        </section>
        <main className="h-full p-6 flex-1 self-stretch">{children}</main>
      </body>
    </html>
  );
}
