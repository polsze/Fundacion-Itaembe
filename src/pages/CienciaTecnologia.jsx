import Layout from "../components/Layout";

import HeroImage from "../assets/img/tecnologia-innovacion-fundacion-itaembe.jpg";
import { HashLink } from "react-router-hash-link";
import { Helmet } from "react-helmet-async";

export default function CienciaTecnologia() {
  return (
    <>
      <Helmet>
        <title>
          Ciencia, Tecnología e Innovación | Fundación Itaembé | Posadas,
          Misiones
        </title>

        <meta
          name="description"
          content="Conocé el programa de Ciencia, Tecnología e Innovación de Fundación Itaembé. Impulsamos educación tecnológica, alfabetización digital, innovación social y desarrollo científico en Posadas, Misiones."
        />

        <meta
          name="keywords"
          content="Fundación Itaembé, ciencia y tecnología, innovación, educación tecnológica, alfabetización digital, inclusión digital, desarrollo científico, Posadas, Misiones, ONG, fundación en Misiones"
        />

        <meta
          property="og:title"
          content="Ciencia, Tecnología e Innovación | Fundación Itaembé"
        />

        <meta
          property="og:description"
          content="Promovemos la ciencia, la tecnología y la innovación como herramientas para el desarrollo social, educativo y comunitario en Posadas y Misiones."
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:image"
          content="https://fundacionitaembe.org/tecnologia-innovacion-fundacion-itaembe.jpg"
        />

        <link
          rel="canonical"
          href="https://fundacionitaembe.org/ciencia-tecnologia"
        />
      </Helmet>

      <main>
        {/* HERO */}

        <section className="relative">
          <div
            className="h-[400px] md:h-[550px] bg-cover bg-center"
            style={{
              backgroundImage: `url(${HeroImage})`,
            }}
          >
            <div className="flex h-full items-center bg-black/60">
              <Layout>
                <div className="max-w-3xl text-white">
                  <span className="mb-4 block text-sm font-semibold uppercase tracking-[4px]">
                    Fundación Itaembé
                  </span>

                  <h1 className="mb-6 text-4xl font-bold md:text-6xl">
                    Ciencia, Tecnología e Innovación
                  </h1>

                  <p className="text-lg md:text-xl">
                    Impulsamos proyectos educativos, científicos y tecnológicos
                    que generan oportunidades de aprendizaje, desarrollo y
                    crecimiento para la comunidad de Posadas y Misiones.
                  </p>
                </div>
              </Layout>
            </div>
          </div>
        </section>

        {/* INTRODUCCIÓN */}

        <section className="py-16 lg:py-24">
          <Layout>
            <div className="mx-auto max-w-4xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[3px] text-cyan-700">
                Desarrollo e Innovación
              </span>

              <h2 className="mt-3 mb-8 text-3xl font-bold text-slate-900 md:text-5xl">
                Impulsando el futuro a través de la ciencia, la tecnología y la
                innovación
              </h2>

              <p className="text-lg leading-relaxed text-slate-600">
                Desde Fundación Itaembé trabajamos para promover el acceso al
                conocimiento científico, la educación tecnológica y la
                innovación como herramientas fundamentales para el desarrollo
                social en Posadas y toda la provincia de Misiones.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 p-8 text-center">
                <div className="mb-5 text-5xl">🔬</div>

                <h3 className="mb-3 text-xl font-bold">Ciencia</h3>

                <p className="text-slate-600">
                  Fomentamos el pensamiento crítico, la investigación y la
                  divulgación científica para generar nuevas oportunidades
                  educativas.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-8 text-center">
                <div className="mb-5 text-5xl">💻</div>

                <h3 className="mb-3 text-xl font-bold">Tecnología</h3>

                <p className="text-slate-600">
                  Promovemos habilidades digitales y el acceso a herramientas
                  tecnológicas para reducir brechas y ampliar oportunidades.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-8 text-center">
                <div className="mb-5 text-5xl">🚀</div>

                <h3 className="mb-3 text-xl font-bold">Innovación</h3>

                <p className="text-slate-600">
                  Impulsamos soluciones innovadoras orientadas al crecimiento
                  sostenible y al desarrollo de la comunidad.
                </p>
              </div>
            </div>
          </Layout>
        </section>

        {/* EJES DE TRABAJO */}

        <section className="bg-slate-50 py-16 lg:py-24">
          <Layout>
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-[3px] text-cyan-700">
                Áreas de Acción
              </span>

              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                Cómo generamos impacto
              </h2>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <h3 className="mb-4 text-xl font-bold">
                  Alfabetización Digital
                </h3>

                <p className="text-slate-600">
                  Promovemos el acceso al conocimiento tecnológico y al uso
                  responsable de herramientas digitales.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <h3 className="mb-4 text-xl font-bold">
                  Formación Tecnológica
                </h3>

                <p className="text-slate-600">
                  Generamos espacios educativos orientados a las competencias
                  necesarias para el mundo actual.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <h3 className="mb-4 text-xl font-bold">Innovación Social</h3>

                <p className="text-slate-600">
                  Impulsamos proyectos que utilizan la innovación para mejorar
                  la calidad de vida de las personas.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <h3 className="mb-4 text-xl font-bold">Educación Científica</h3>

                <p className="text-slate-600">
                  Acercamos la ciencia a niños, jóvenes y adultos mediante
                  actividades de aprendizaje y divulgación.
                </p>
              </div>
            </div>
          </Layout>
        </section>

        {/* VALORES */}

        <section className="bg-cyan-50 py-16 lg:py-24">
          <Layout>
            <div className="mx-auto max-w-4xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[3px] text-cyan-700">
                Visión de Futuro
              </span>

              <h2 className="mt-3 mb-8 text-4xl font-bold text-slate-900">
                Preparando a Posadas y Misiones para los desafíos del mañana
              </h2>

              <p className="text-lg leading-relaxed text-slate-600">
                La Fundación Itaembé promueve la ciencia, la tecnología y la
                innovación como motores de transformación social, inclusión y
                desarrollo sostenible para las nuevas generaciones.
              </p>
            </div>
          </Layout>
        </section>

        {/* CTA */}

        <section className="py-16 lg:py-24">
          <Layout>
            <div className="rounded-3xl bg-slate-900 p-10 text-center text-white md:p-16">
              <h2 className="mb-4 text-3xl font-bold">
                ¿Querés impulsar proyectos de innovación?
              </h2>

              <p className="mx-auto mb-8 max-w-2xl text-slate-300">
                Sumate a las iniciativas de Fundación Itaembé para promover la
                educación, la ciencia y la tecnología como motores de desarrollo
                para Posadas y Misiones.
              </p>

              <HashLink
                smooth
                to="/#contacto"
                className="rounded-full bg-green-700 px-6 py-3 font-medium text-white transition hover:bg-green-800"
                
              >
                Contactate
              </HashLink>
            </div>
          </Layout>
        </section>
      </main>
    </>
  );
}
