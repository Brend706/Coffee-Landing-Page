const products = [
  {
    title: "Café en Grano",
    description: "Granos seleccionados, tueste perfecto y aroma intenso.",
  },
  {
    title: "Café Molido",
    description: "Listo para preparar, manteniendo todo su sabor.",
  },
  {
    title: "Café de Especialidad",
    description: "Variedades únicas para paladares exigentes.",
  },
];

export default function ProductsSection() {
  return (
    <section className="bg-black py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-white text-4xl font-bold text-center mb-12">
          Nuestros Cafés
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.title}
              className="bg-amber-950 p-6 rounded-xl text-center"
            >
              <h3 className="text-xl font-semibold mb-3 text-amber-400">
                {product.title}
              </h3>
              <p className="text-amber-100">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
