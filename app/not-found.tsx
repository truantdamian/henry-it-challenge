import Link from "next/link";

export default function NotFound() {
  return (
    <section className="md:flex flex-col justify-center items-center h-full">
      <div className="p-2 flex flex-col gap-5 items-center">
        <h1 className="font-semibold text-[#999] md:text-3xl">
          Página no Encontrada
        </h1>
        <Link href="/">Ir al inicio</Link>
      </div>
    </section>
  );
}
