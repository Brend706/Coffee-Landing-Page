import type { Product } from "../../data/products";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-800">
          {product.name}
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          {product.type}
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-amber-600 font-semibold">
            {product.price}
          </span>

          <button className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm transition">
            Comprar
          </button>
        </div>
      </div>

    </div>
  );
}
