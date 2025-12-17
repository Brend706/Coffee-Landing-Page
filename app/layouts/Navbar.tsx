import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-amber-500">
          Coffee<span className="text-white">House</span>
        </div>

        {/* Links */}
        <ul className="hidden md:flex gap-8 text-sm font-medium text-white">
          <li>
            <NavLink to="/" className="hover:text-amber-400">
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className="hover:text-amber-400">
              Productos
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="hover:text-amber-400">
              Quiénes somos
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-amber-400">
              Contacto
            </NavLink>
          </li>
        </ul>

        {/* boton de compra para ver mas productos */}
        {/* <button className="hidden md:block bg-amber-600 hover:bg-amber-500 text-black px-5 py-2 rounded-full font-semibold transition">
          Comprar
        </button> */}
      </nav>
    </header>
  );
}
