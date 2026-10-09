import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="py-7">
      <div className="grid grid-flow-col-dense justify-around items-center">
        <div className="grid grid-flow-col-dense gap-4">
          <p>Victoria Galarza</p>
          <p>-</p>
          <p>Fotógrafa</p>
        </div>

        <nav className="grid grid-flow-col-dense gap-4">
          <Link href="/" className="hover:text-foreground/80 text-foreground">
            Home
          </Link>
          <Link href="/sobre-mi" className="hover:text-foreground/80 text-foreground">
            Sobre mi
          </Link>
          <Link href="/espacios_atmosferas" className="hover:text-foreground/80 text-foreground">
            Espacios y Atmosferas
          </Link>
          <Link href="/retratos" className="hover:text-foreground/80 text-foreground">
            Retratos
          </Link>
          <Link href="/servicios" className="hover:text-foreground/80 text-foreground">
            Fotografia y Formacion
          </Link>
          <Link href="/eventos" className="hover:text-foreground/80 text-foreground">
            Eventos y participacion
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
