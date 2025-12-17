export type Product = {
  id: number;
  name: string;
  type: string;
  price: string;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Café Premium",
    type: "Grano",
    price: "$12.00",
    image: "/app/images/cafe-grano.jpg",
  },
  {
    id: 2,
    name: "Café Molido Clásico",
    type: "Molido",
    price: "$10.00",
    image: "/app/images/cafe-molido.jpg",
  },
  {
    id: 3,
    name: "Café Especial",
    type: "Orgánico",
    price: "$15.00",
    image: "/app/images/cafe-especial.jpg",
  },
];

export default products;
