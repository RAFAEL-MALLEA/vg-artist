import MainNavbar from "@/components/navbar/mainnavbar";
import Mainfooter from "@/components/footer/mainfooter";
import Gallery from "@/components/gallery/Gallery";

const images: string[] = [
  // Aún no hay fotos cargadas para esta sección.
  // Cuando tengas las imágenes, agrégalas aquí como "/espacios_atmosferas/1.jpg", etc.
];

export default function EspaciosAtmosferasPage() {
  return (
    <>
      <MainNavbar />
      <main className="text-white">
        {images.length > 0 ? (
          <Gallery images={images} altPrefix="Espacio y atmósfera fotografiada" />
        ) : (
          <section className="text-center py-20">
            <h1 className="text-3xl font-semibold mb-2">Espacios y Atmósferas</h1>
            <p className="text-gray-300">Esta galería estará disponible próximamente.</p>
          </section>
        )}
      </main>
      <Mainfooter />
    </>
  );
}