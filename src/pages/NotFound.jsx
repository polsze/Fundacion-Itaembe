import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="text-center">
        <span className="text-sm font-semibold uppercase tracking-[3px] text-green-700">
          Error 404
        </span>

        <h1 className="mt-4 text-5xl font-bold text-slate-900">
          Página no encontrada
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-slate-600">
          La página que estás buscando no existe o fue movida.
          Podés volver al sitio principal de Fundación Itaembé.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-green-700 px-8 py-4 font-medium text-white transition hover:bg-green-800"
        >
          Volver al Inicio
        </Link>
      </div>
    </main>
  );
}