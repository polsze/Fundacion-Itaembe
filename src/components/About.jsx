import Layout from "../components/Layout";
import {
  GraduationCap,
  HeartHandshake,
  Atom,
  Users,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="nosotros"
      className="bg-slate-50 py-16 lg:py-24"
    >
      <Layout>

        {/* Header */}

        <div className="mx-auto max-w-4xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[3px] text-green-700">
            Sobre Fundación Itaembé
          </span>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-5xl">
            Comprometidos con el desarrollo social,
            educativo y tecnológico de nuestra comunidad
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-slate-600">
            Fundación Itaembé es una organización sin fines de lucro de
            Posadas, Misiones, dedicada a promover el desarrollo integral
            de niños, jóvenes y familias mediante iniciativas educativas,
            deportivas, científicas, tecnológicas y sociales.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Trabajamos para generar oportunidades que impulsen la inclusión,
            la participación comunitaria y el acceso al conocimiento,
            fortaleciendo el crecimiento sostenible de nuestra sociedad.
          </p>

        </div>

        {/* Valores */}

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            <GraduationCap
              size={40}
              className="mb-5 text-green-700"
            />

            <h3 className="mb-3 text-xl font-bold text-slate-900">
              Educación
            </h3>

            <p className="text-slate-600">
              Promovemos el acceso al conocimiento,
              la capacitación y el aprendizaje como
              herramientas de transformación social.
            </p>

          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            <HeartHandshake
              size={40}
              className="mb-5 text-green-700"
            />

            <h3 className="mb-3 text-xl font-bold text-slate-900">
              Deporte e Inclusión
            </h3>

            <p className="text-slate-600">
              Impulsamos actividades deportivas que
              fortalecen la integración, el trabajo
              en equipo y el desarrollo personal.
            </p>

          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            <Atom
              size={40}
              className="mb-5 text-green-700"
            />

            <h3 className="mb-3 text-xl font-bold text-slate-900">
              Ciencia y Tecnología
            </h3>

            <p className="text-slate-600">
              Apoyamos proyectos de innovación,
              investigación y desarrollo tecnológico
              con impacto positivo en la comunidad.
            </p>

          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            <Users
              size={40}
              className="mb-5 text-green-700"
            />

            <h3 className="mb-3 text-xl font-bold text-slate-900">
              Desarrollo Comunitario
            </h3>

            <p className="text-slate-600">
              Fomentamos la participación ciudadana,
              la cooperación y la construcción de
              oportunidades para todos.
            </p>

          </div>

        </div>

        {/* Frase destacada */}

        <div className="mt-16 rounded-3xl bg-green-700 p-10 text-center text-white md:p-14">

          <h3 className="text-2xl font-bold md:text-3xl">
            Construimos oportunidades a través de la educación,
            el deporte, la ciencia y el compromiso con nuestra comunidad.
          </h3>

        </div>

      </Layout>
    </section>
  );
}