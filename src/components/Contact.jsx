import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

export default function Contact() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setMessage("");

    const formData = new FormData(event.target);

    formData.append("access_key", "7076c68f-e655-47f0-889f-e84000c36184");
    formData.append(
      "subject",
      "Nuevo mensaje desde Fundación Itaembé"
    );
    formData.append(
      "from_name",
      "Sitio Web Fundación Itaembé"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (result.success) {
        setMessage(
          "✅ Consulta enviada correctamente. Le responderemos a la brevedad."
        );

        event.target.reset();

        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        setMessage(
          "❌ Ocurrió un error al enviar la consulta. Intente nuevamente."
        );
      }
    } catch (error) {
      setMessage(
        "❌ Ocurrió un error al enviar la consulta. Intente nuevamente."
      );
    }

    setLoading(false);
  };

  return (
    <section id="contacto" className="py-16 lg:py-24">
      <Layout>
        <div className="mx-auto max-w-3xl">

          <div className="mb-10 text-center">
            <span className="text-sm font-semibold uppercase tracking-[3px] text-green-700">
              Contacto
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Comunicate con Fundación Itaembé
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Si tenés consultas, propuestas o querés colaborar con
              nuestros proyectos, completá el siguiente formulario.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
          >

            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
            />

            <div className="grid gap-6 md:grid-cols-2">

              <div>
                <label
                  htmlFor="nombre"
                  className="mb-2 block font-medium text-slate-700"
                >
                  Nombre *
                </label>

                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  placeholder="Tu nombre"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-700"
                />
              </div>

              <div>
                <label
                  htmlFor="apellido"
                  className="mb-2 block font-medium text-slate-700"
                >
                  Apellido *
                </label>

                <input
                  type="text"
                  id="apellido"
                  name="apellido"
                  required
                  placeholder="Tu apellido"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-700"
                />
              </div>

            </div>

            <div className="mt-6">
              <label
                htmlFor="email"
                className="mb-2 block font-medium text-slate-700"
              >
                Correo electrónico *
              </label>

              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="ejemplo@email.com"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-700"
              />
            </div>

            <div className="mt-6">
              <label
                htmlFor="telefono"
                className="mb-2 block font-medium text-slate-700"
              >
                Teléfono *
              </label>

              <input
                type="tel"
                id="telefono"
                name="telefono"
                required
                placeholder="Tu número de contacto"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-700"
              />
            </div>

            <div className="mt-6">
              <label
                htmlFor="mensaje"
                className="mb-2 block font-medium text-slate-700"
              >
                Mensaje *
              </label>

              <textarea
                id="mensaje"
                name="mensaje"
                required
                rows="5"
                placeholder="Escribí tu consulta..."
                className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-700"
              />
            </div>

            {message && (
              <div className="mt-6 rounded-xl bg-green-50 p-4 text-center text-green-700">
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-8 w-full rounded-xl bg-green-700 px-6 py-4 font-semibold text-white transition hover:bg-green-800 disabled:opacity-70"
            >
              {loading
                ? "Enviando consulta..."
                : "Enviar consulta"}
            </button>

          </form>

        </div>
      </Layout>
    </section>
  );
}
