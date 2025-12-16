import { NavLink } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-amber-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h3 className="text-2xl font-bold text-amber-400">
            Coffee<span className="text-white">House</span>
          </h3>
          <p className="mt-4 text-sm text-gray-300">
            Café de especialidad en grano y molido.  
            Calidad, aroma y sabor en cada taza.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Navegación</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink to="/" className="hover:text-amber-400">
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="hover:text-amber-400">
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
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contacto</h4>
          <p className="text-sm text-gray-300">
            San Salvador, El Salvador  
          </p>
          <p className="text-sm text-gray-300 mt-2">
            contacto@coffeehouse.com  
          </p>
          <p className="text-sm text-gray-300 mt-2">
            +503 7000 0000
          </p>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-amber-500 py-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} CoffeeHouse. Todos los derechos reservados.
      </div>
    </footer>
  );
}
