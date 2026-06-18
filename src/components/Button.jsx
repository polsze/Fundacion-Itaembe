import { Link } from "react-router-dom";

export default function Button({
  children,
  href = "#",
  backgroundImage,
}) {
  return (
    <Link
      to={href}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      className="
        group
        relative
        flex
        min-h-[180px]
        items-center
        justify-center
        overflow-hidden
        rounded-2xl
        bg-cover
        bg-center
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-2xl
      "
    >
      {/* Overlay */}

      <div className="absolute inset-0 bg-black/50 transition-all duration-300 group-hover:bg-black/40" />

      {/* Texto */}

      <span className="relative z-10 px-6 text-center text-2xl font-bold text-white">
        {children}
      </span>
    </Link>
  );
}