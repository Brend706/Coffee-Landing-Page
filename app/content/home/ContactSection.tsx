export default function ContactSection() {
  return (
    <section className="bg-black py-20">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">
          ¿Listo para probar nuestro café?
        </h2>

        <p className="text-amber-200 mb-8">
          Escríbenos y recibe asesoría personalizada.
        </p>

        <button className="bg-amber-600 hover:bg-amber-500 text-black font-semibold px-8 py-3 rounded-full transition">
          Contáctanos
        </button>
      </div>
    </section>
  );
}
