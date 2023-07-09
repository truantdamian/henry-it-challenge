"use client";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavMenu = () => {
  const currentRoute = usePathname();
  return (
    <nav>
      <div className="flex items-center justify-center">
        <div>
          <Link href="/">
            <img src="/logo.png" alt="logo" />
          </Link>
        </div>
      </div>
      <section className="pt-16 flex items-center justify-center">
        <Link href={"/home"}>
          <div
            className={`w-12 h-12 border boder-[#999] flex items-center justify-center rounded-lg ${
              currentRoute === "/home" ? "bg-[#FFE84D]" : ""
            }
              text-[#999] `}
          >
            <DocumentTextIcon className="w-6" />
          </div>
        </Link>
      </section>
    </nav>
  );
};

export default NavMenu;
