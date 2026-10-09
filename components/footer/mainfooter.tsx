import React from "react";
import { FaInstagram } from "react-icons/fa";

const MainFooter = () => {
  return (
    <footer className="py-12">
      <section className="grid grid-flow-col-dense gap-4 justify-center items-center text-center">
        <div className="grid grid-flow-col-dense gap-4">
          <a
            href="https://www.instagram.com/fragilsosiego/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground/80 text-foreground"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>

        <div className="grid grid-flow-col-dense gap-4">
          <p>
            <a
              href="mailto:vickgalarza@gmail.com"
              className="hover:text-foreground/80 text-foreground"
            >
              vickgalarza@gmail.com
            </a>
          </p>
        </div>

        <div className="grid grid-flow-col-dense gap-4">
          <a
            href="https://api.whatsapp.com/send?phone=56955148483"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground/80 text-foreground"
          >
            + (56) 9 5514 8483
          </a>
        </div>
      </section>

      <section className="grid grid-flow-col-dense gap-4 justify-center items-center text-center mt-5">
        <p>© 2025 Victoria Galarza. Todos los derechos reservados</p>
      </section>
    </footer>
  );
};

export default MainFooter;
