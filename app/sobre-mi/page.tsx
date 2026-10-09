import Image from "next/image";
import Link from "next/link";
import MainNavbar from "@/components/navbar/mainnavbar";
import Mainfooter from "@/components/footer/mainfooter";

export default function SobreMiPage() {
  return (
    <>
      <MainNavbar />
      <main className="flex flex-col md:flex-row gap-4">
        <div>
          <Image
            src="/SobreMI/victoriagalarza.jpg"
            alt="Victoria Galarza, fotógrafa"
            loading="lazy"
            width={1500}
            height={1000}
          />
        </div>

        <div className="flex flex-col gap-4 p-4">
          <p>
            Las fotografías de Victoria Galarza Marabini buscan conectar sin
            interferencias, como si la cámara desapareciera. Son espacios
            donde la luz y las emociones son una constante, y donde lo
            esencial sucede entre personas, sin forzar, sin pretender.
          </p>
          <p>
            Desde los 12 años experimenta con el retrato como una forma de
            observar y comprender. A los 20 ya era su modo de vida, y fue al
            migrar a Chile cuando esa búsqueda tomó forma definitiva. Estudió
            Artes Audiovisuales en la Universidad Nacional de La Plata, en
            Buenos Aires, y desde entonces ha dedicado su trabajo a explorar
            cómo nos comunicamos, cómo nos miramos, cómo nos mostramos.
          </p>
          <p>
            Sus imágenes reflejan lo frágil y lo material, lo íntimo y lo
            real. Hay en ellas un juego constante entre luz y sombra, color y
            contraste. La belleza está en lo simple, en lo verdadero, en la
            pausa. La calma y la tranquilidad son fundamentales en su proceso
            creativo; permiten que todo lo demás surja con honestidad.
          </p>

          <div className="flex gap-4 justify-center items-center">
            <Link
              href="https://www.instagram.com/fragilsosiego/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground/80 text-foreground"
            >
              Instagram
            </Link>
            <Link
              href="mailto:vickgalarza@gmail.com"
              className="hover:text-foreground/80 text-foreground"
            >
              Email
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=56955148483"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground/80 text-foreground"
            >
              WhatsApp
            </Link>
          </div>
        </div>
      </main>
      <Mainfooter />
    </>
  );
}
