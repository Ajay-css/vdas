import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center flex-col gap-4">
      <h1 className="text-5xl font-bold">404</h1>

      <p>Page Not Found</p>

      <Link
        to="/"
        className="group
relative
overflow-hidden
rounded-full
bg-white/70
backdrop-blur-xl
border border-white/60
px-7
py-3
font-medium
text-slate-800
shadow-[8px_8px_20px_rgba(15,23,42,.08),-8px_-8px_20px_rgba(255,255,255,.95)]
transition-all
duration-300
hover:-translate-y-1
hover:shadow-[0_0_35px_rgba(16,185,129,.35)]
active:scale-95
"
      >
        Go Home
      </Link>
    </div>
  );
}