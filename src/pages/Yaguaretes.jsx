import Layout from "../components/Layout";
import HeroImage from "../assets/img/JUGADORES-YAGUARETES-SOFTBOL-POSADAS.webp";
import BrasilImage from "../assets/img/YAGUARETES SOFTBOL EN BRASIL 2026.webp";
import { HashLink } from "react-router-hash-link";
import { Helmet } from "react-helmet-async";
import LogoYaguaretes from "../assets/img/yaguaretes-softbol-posadas-logo.png";

export default function Yaguaretes() {
  return (
    <>
      <Helmet>
        <title>Yaguaretés Softbol Posadas | Fundación Itaembé</title>

        <meta
          name="description"
          content="Yaguaretés Softbol Posadas es el primer club de sóftbol de Posadas, Misiones. Impulsado por Fundación Itaembé, promueve el deporte, la inclusión, el trabajo en equipo y el desarrollo de jóvenes y adultos mediante la práctica deportiva."
        />

        <meta
          name="keywords"
          content="Yaguaretés Softbol Posadas, sóftbol en Posadas, sóftbol Misiones, club de sóftbol Posadas, Fundación Itaembé, deporte en Posadas, deporte social Misiones, equipo de sóftbol Misiones, sóftbol Argentina"
        />

        <meta
          property="og:title"
          content="Yaguaretés Softbol Posadas | Fundación Itaembé"
        />

        <meta
          property="og:description"
          content="Conocé la historia del primer club de sóftbol de Posadas, Misiones. Formación deportiva, inclusión social y participación en competencias nacionales e internacionales."
        />

        <meta
          property="og:image"
          content="https://fundacionitaembe.org/JUGADORES-YAGUARETES-SOFTBOL-POSADAS.webp"
        />

        <meta property="og:type" content="website" />

        <meta property="og:locale" content="es_AR" />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://fundacionitaembe.org/yaguaretes" />
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
            <div className="flex h-full items-center bg-black/50">
              <Layout>
                <div className="max-w-3xl text-white">
                  <span className="mb-4 block text-sm font-semibold uppercase tracking-[4px]">
                    Fundación Itaembé
                  </span>

                  <h1 className="mb-6 text-4xl font-bold md:text-6xl">
                    Yaguaretés Softbol Posadas
                  </h1>

                  <p className="text-lg md:text-xl">
                    El primer club de sóftbol de Posadas, Misiones, promoviendo
                    el deporte, la integración y el trabajo en equipo.
                  </p>
                </div>
              </Layout>
            </div>
          </div>
        </section>

        {/* HISTORIA */}

        <section className="py-16 lg:py-24">
          <Layout>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <img
                  src={BrasilImage}
                  alt="Equipo Yaguaretés Softbol Posadas participando en torneo internacional en Brasil"
                  className="rounded-2xl shadow-lg"
                  loading="lazy"
                />
              </div>

              <div>
                <span className="text-sm font-semibold uppercase tracking-[3px] text-amber-700">
                  Nuestra Historia
                </span>

                <h2 className="mt-3 mb-6 text-3xl font-bold text-slate-900">
                  El nacimiento del sóftbol en Posadas
                </h2>

                <p className="mb-5 leading-relaxed text-slate-600">
                  Yaguaretés Softbol Posadas nació gracias a la iniciativa de un
                  grupo de venezolanos apasionados por este deporte, quienes
                  encontraron en Misiones una nueva oportunidad para compartir
                  su experiencia y promover la disciplina.
                </p>

                <p className="mb-5 leading-relaxed text-slate-600">
                  Con el paso del tiempo, jugadores argentinos se sumaron al
                  proyecto, formando una comunidad deportiva que hoy representa
                  la unión de culturas, el compañerismo y el trabajo en equipo.
                </p>

                <p className="leading-relaxed text-slate-600">
                  Actualmente, Yaguaretés se ha consolidado como el primer club
                  de sóftbol de Posadas y uno de los principales impulsores del
                  crecimiento de este deporte en la provincia de Misiones.
                </p>
              </div>
            </div>
          </Layout>
        </section>

        {/* INICIOS */}

        <section className="bg-slate-50 py-16 lg:py-24">
          <Layout>
            <div className="mx-auto max-w-4xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[3px] text-amber-700">
                Los Inicios
              </span>

              <h2 className="mt-3 mb-8 text-3xl font-bold text-slate-900">
                Impulsando el sóftbol desde las bases
              </h2>

              <p className="mb-6 leading-relaxed text-slate-600">
                El sóftbol comenzó a ganar fuerza en Posadas con la formación
                del equipo de mayores Yaguaretés y del conjunto juvenil Los
                Tucanes.
              </p>

              <p className="mb-6 leading-relaxed text-slate-600">
                Ambos equipos entrenan regularmente en las instalaciones del
                Club Educación, donde niños, jóvenes y adultos desarrollan
                habilidades deportivas mientras fortalecen valores como la
                disciplina, el respeto y el compromiso.
              </p>

              <p className="leading-relaxed text-slate-600">
                Actualmente más de 20 jugadores participan activamente de los
                entrenamientos y continúan trabajando para representar a
                Misiones en competencias regionales y nacionales.
              </p>
            </div>
          </Layout>
        </section>

        {/* LOGROS */}

        <section className="py-16 lg:py-24">
          <Layout>
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-[3px] text-amber-700">
                Logros
              </span>

              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                Nuestro recorrido deportivo
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 p-8 shadow-sm">
                <div className="mb-4 text-4xl">🏆</div>

                <h3 className="mb-3 text-xl font-bold">
                  Campeones en Corrientes
                </h3>

                <p className="text-slate-600">
                  Yaguaretés logró consagrarse campeón en competencias
                  disputadas en la provincia de Corrientes, representando a
                  Posadas y Misiones.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-8 shadow-sm">
                <div className="mb-4 text-4xl">🌎</div>

                <h3 className="mb-3 text-xl font-bold">
                  Torneos Internacionales
                </h3>

                <p className="text-slate-600">
                  Participación destacada en competencias realizadas en Foz do
                  Iguaçu, Brasil, enfrentando equipos de distintos países.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-8 shadow-sm">
                <div className="mb-4 text-4xl">⚾</div>

                <h3 className="mb-3 text-xl font-bold">
                  Crecimiento Constante
                </h3>

                <p className="text-slate-600">
                  Más de 20 jugadores integran actualmente el plantel,
                  impulsando el desarrollo del sóftbol en Misiones.
                </p>
              </div>
            </div>
          </Layout>
        </section>

        {/* VALORES */}

        <section className="relative overflow-hidden bg-amber-700 py-16 text-white">
          <Layout>
            <div className="text-center">
              <h2 className="mb-12 text-3xl font-bold">Nuestros Valores</h2>

              <div className="grid gap-8 md:grid-cols-4">
                <div>
                  <h3 className="mb-3 text-xl font-bold">Inclusión</h3>

                  <p>Integración entre venezolanos y argentinos.</p>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-bold">Disciplina</h3>

                  <p>Compromiso permanente con el entrenamiento.</p>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-bold">Equipo</h3>

                  <p>Construcción colectiva dentro y fuera del campo.</p>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-bold">Superación</h3>

                  <p>Crecimiento deportivo y personal constante.</p>
                </div>
              </div>
            </div>
          </Layout>
        </section>

        {/* CTA */}

        <section className="py-16 lg:py-24">
          <Layout>
            <div className="mx-auto max-w-4xl rounded-3xl bg-slate-900 px-8 py-10 text-center text-white md:px-12 md:py-16">
              <img
                src={LogoYaguaretes}
                alt="Logo de Yaguaretés Softbol Posadas"
                aria-hidden="true"
                loading="lazy"
                className="mx-auto mb-8 w-40 md:w-56"
              />

              <h2 className="mb-4 text-3xl font-bold">
                ¿Querés formar parte de Yaguaretés?
              </h2>

              <p className="mx-auto mb-8 max-w-2xl text-slate-300">
                Si te interesa aprender sóftbol o sumarte a nuestros
                entrenamientos, te invitamos a contactarnos y conocer más sobre
                nuestro club.
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
