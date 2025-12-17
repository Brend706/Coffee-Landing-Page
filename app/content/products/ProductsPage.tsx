import products from "../../data/products";
import ProductCard from "./ProductCard";

export default function ProductsPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      
      <h1 className="text-4xl font-bold text-center text-gray-800">
        Nuestro Café
      </h1>

      <p className="text-center text-gray-500 mt-4 max-w-xl mx-auto">
        Descubre nuestra selección de café en grano y molido,
        cuidadosamente seleccionados para los amantes del buen café.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </section>
  );
}
