export default function HeaderSection() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-amber-900 to-black flex items-center">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
          Café de Origen, <br /> Directo a tu Taza
        </h1>

        <p className="text-amber-200 max-w-2xl mx-auto mb-8">
          Café en grano, molido y de especialidad. Seleccionado a mano
          para ofrecerte aroma, sabor y calidad en cada sorbo.
        </p>

        <button className="bg-amber-600 hover:bg-amber-500 text-black font-semibold px-8 py-3 rounded-full transition">
          Comprar ahora
        </button>
      </div>
    </section>
  );
}
