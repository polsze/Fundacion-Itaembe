import { useEffect, useState } from "react";
import Buttons from "./Buttons";
import Layout from "../components/Layout";
import hero1 from "../assets/img/YAGUARETES SOFTBOL EN BRASIL BY PBX DIGITAL.webp";
import hero2 from "../assets/img/tecnologia-innovacion-fundacion-itaembe.jpg";
import hero3 from "../assets/img/fundacion.jpg";

const images = [
  {
    src: hero1,
    alt: "Equipo Yaguaretés Softbol Posadas representando a Misiones",
  },
  {
    src: hero2,
    alt: "Programa de ciencia tecnología e innovación de Fundación Itaembé",
  },
  {
    src: hero3,
    alt: "Fundación Itaembé desarrollando proyectos sociales en Posadas Misiones",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 lg:py-16">
      <Layout>
        {/* HERO */}

        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Slider */}

          <div className="relative h-[320px] overflow-hidden rounded-2xl md:h-[500px]">
            {images.map((image, index) => (
              <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              loading="eager"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                current === index
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            />
            ))}
          </div>

          {/* Content */}

          <div className="flex flex-col justify-center">
            <span className="mb-4 text-sm font-semibold uppercase tracking-[3px] text-green-700">
              Fundación Itaembé
            </span>

            <h1 className="mb-6 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Impulsando el desarrollo social, educativo y tecnológico en
              Posadas, Misiones.
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-slate-600">
              En Fundación Itaembé promovemos el desarrollo integral de niños,
              jóvenes y familias de Posadas, Misiones, a través de programas
              educativos, deportivos, científicos, tecnológicos y sociales que
              fomentan la inclusión, la participación comunitaria y la igualdad
              de oportunidades.
            </p>
          </div>
        </div>

        {/* PROGRAMAS */}

        <div className="mt-16 border-t border-slate-200 pt-12">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-bold text-slate-900">
              Programas y proyectos de Fundación Itaembé{" "}
            </h3>

            <p className="mt-3 text-slate-600">
              Conocé las iniciativas educativas, deportivas, científicas y
              tecnológicas que desarrollamos para fortalecer el crecimiento
              comunitario, la inclusión social y el acceso a nuevas
              oportunidades en Posadas y Misiones.
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <Buttons />
          </div>
        </div>
      </Layout>
    </section>
  );
}
