import Link from "next/link";

import { footerItems } from "@/data/footerItems";
import Logo from "./navbar/Logo";
import Container from "./Container";

const Footer = () => (
  <footer className="z-10">
    <Container>
      <div className="flex flex-col text-black-100  mt-5 border-t border-gray-100 ">
        <div className="flex flex-col md:flex-row flex-wrap justify-between gap-x-5 gap-y-10 px-6 py-10">
          <div className="flex flex-col gap-y-3">
            <Logo />
            <p className="max-w-[300px] text-gray-500">Our vision is to provide convenience and help increase your sales business</p>
          </div>

          <div className="flex-1 w-full flex md:justify-end flex-wrap gap-x-10 gap-y-5 px-2">
            {footerItems.map((item) => (
              <div key={item.title} className="flex flex-col gap-y-2 min-w-[160px]">
                <h3 className="font-bold mb-2">{item.title}</h3>
                <div className="flex flex-col gap-y-4">
                  {item.links.map((link) => (
                    <Link
                      key={link.title}
                      href={link.url}
                      className="text-gray-500 hover:text-blue-600"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10 text-sm">
          <p>@2023 CarHub. All rights reserved</p>

          <div className="flex-1 flex sm:justify-end justify-center gap-8">
            <Link href="/" className="text-gray-500">
              Privacy & Policy
            </Link>
            <Link href="/" className="text-gray-500">
              Terms & Condition
            </Link>
          </div>
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
