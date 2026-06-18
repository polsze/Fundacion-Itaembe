import Layout from "../components/Layout";
import Logo from "../assets/img/fundacion-itaembe-logo.webp";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className=" border-t border-slate-200 bg-slate-50">
      <Layout>
        <div className="grid gap-10 py-12 md:grid-cols-3">
          {/* Fundación */}

          <div>
            <Link
              to="/"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
            >
              <img src={Logo} alt="Fundación Itaembé" className="h-18 w-auto" />
            </Link>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-800 sm:block xl:text-2xl">
                Fundación Itaembé
              </span>
              <span className="text-sm font-bold text-gray-800 sm:block lg:mb-2">
                Personería Jurídica Nº A- 5.539, 2025
              </span>
            </div>

            <p className="leading-relaxed text-slate-600">
              Promovemos el desarrollo social, deportivo, educativo y
              tecnológico a través de programas que generan oportunidades para
              nuestra comunidad.
            </p>
          </div>

          {/* Navegación */}

          <div>
            <h4 className="mb-4 font-semibold text-slate-900">Navegación</h4>

            <ul className="space-y-3 text-slate-600">
              <li>
                <a href="#inicio" className="transition hover:text-green-700">
                  Inicio
                </a>
              </li>

              <li>
                <a href="#nosotros" className="transition hover:text-green-700">
                  Nosotros
                </a>
              </li>

              <li>
                <HashLink
                  to="/yaguaretes"
                  className="transition hover:text-green-700"
                >
                  Yaguaretés Softbol
                </HashLink>
              </li>
              <li>
                <HashLink
                  to="/ciencia-tecnologia"
                  className="transition hover:text-green-700"
                >
                  Ciencia y Tecnología
                </HashLink>
              </li>

              <li>
                <a href="#contacto" className="transition hover:text-green-700">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}

          <div>
            <h4 className="mb-4 font-semibold text-slate-900">Contacto</h4>

            <ul className="space-y-3 text-slate-600">
              <li>📍 Posadas, Misiones, Argentina</li>

              <li>📧 contacto@fundacionitaembe.org</li>

              <li>📞 +54 9 11 6056-5656</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}

        <div className="border-t border-slate-200 py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
            <p className="text-sm text-slate-500">
              © {year} Fundación Itaembé. Todos los derechos reservados.
            </p>

            <a
              href="https://pbxdigital.com.ar"
              target="_blank"
              className="text-sm text-slate-500"
            >
              Desarrollado por PBX Digital
            </a>
          </div>
        </div>
      </Layout>
    </footer>
  );
}
