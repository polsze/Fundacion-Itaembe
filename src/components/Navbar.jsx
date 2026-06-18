import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import Logo from "../assets/img/fundacion-itaembe-logo.webp";
import Layout from "../components/Layout";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Inicio", href: "/" },
    { label: "Nosotros", href: "/#nosotros" },
    { label: "Yaguaretes", href: "/yaguaretes" },
    { label: "Ciencia y Tecnología", href: "/ciencia-tecnologia" },
    { label: "Contacto", href: "/#contacto" },
  ];

  return (
    <Layout>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-1">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}

            <Link
              to="/"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="flex items-center gap-3"
            >
              <img src={Logo} alt="Fundación Itaembé" className="h-18 w-auto" loading="lazy" />
              <div className="flex flex-col">
                <span className=" text-sm font-bold text-gray-800 sm:block">
                  Fundación Itaembé
                </span>
                <span className=" text-xs font-italic text-gray-800 sm:block">
                  Personería Jurídica Nº A- 5.539, 2025
                </span>
              </div>
            </Link>

            {/* Desktop */}

            <nav className="hidden items-center gap-8 lg:flex">
              {links.map((link) => (
                <HashLink
                  key={link.label}
                  smooth
                  to={link.href}
                  className="text-gray-700 transition-colors hover:text-green-700"
                >
                  {link.label}
                </HashLink>
              ))}
            </nav>

            {/* CTA */}

            <div className="hidden lg:block">
              <HashLink
                smooth
                to="/#contacto"
                className="rounded-full bg-green-700 px-6 py-3 font-medium text-white transition hover:bg-green-800"
              >
                Colaborar
              </HashLink>
            </div>

            {/* Mobile */}

            <button onClick={() => setOpen(!open)} className="lg:hidden">
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}

        {open && (
          <div className="border-t bg-white lg:hidden">
            <div className="container mx-auto flex flex-col gap-5 px-4 py-6">
              {links.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-700"
                >
                  {link.label}
                </Link>
              ))}

              <a
                href="#contacto"
                className="mt-2 rounded-full bg-green-700 py-3 text-center font-medium text-white"
              >
                Colaborar
              </a>
            </div>
          </div>
        )}
      </header>
    </Layout>
  );
}
