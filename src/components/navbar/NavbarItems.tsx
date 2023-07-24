"use client";

import { navItems } from "@/data/navitems";
import Link from "next/link";
import { usePathname } from "next/navigation";


const NavbarItems = () => {
  const currentRoute = usePathname();

  return (
    <section className="hidden sm:flex">
      <div className="flex items-center gap-x-1">
        {navItems.map((navItem) => (
          <Link
            href={navItem.path}
            key={navItem.id}
            className={`px-2 sm:px-3 text-clampSm active:text-blue-600 ${
              currentRoute === navItem.path ? "text-blue-600 font-semibold" : ""
            }`}
          >
            {navItem.name}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default NavbarItems;
