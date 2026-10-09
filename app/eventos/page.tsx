import MainNavbar from "@/components/navbar/mainnavbar";
import Mainfooter from "@/components/footer/mainfooter";

interface Evento {
  title: string;
  desc: string;
  actividades: string[];
}

const eventos: Evento[] = [
  {
    title: "Exposiciones colectivas",
    desc: "He participado en muestras que abordan la memoria, el territorio y el retrato desde una mirada íntima:",
    actividades: [
      "Festival Internacional de Fotografía de Valparaíso (FIFV) — Muestra colectiva de las Brigadas Fotográficas, Valparaíso, Chile.",
      "Primer Festival de Fotografía Editorial – CityLab, GAM — Exposición colectiva junto a artistas destacados de la escena nacional como Rocío Aguirre Venegas, Santiago de Chile.",
      "Feria FAST – 'El sueño habita en la piedra' — Exposición colectiva para Renato Órdenes San Martín, Santiago de Chile.",
      "Festival de la Imagen Margen Fest 2024 — Exposición colectiva para Renato Órdenes San Martín, Toluca, México.",
    ],
  },
  {
    title: "Publicaciones y medios digitales",
    desc: "Mi trabajo ha sido compartido en medios independientes y revistas internacionales:",
    actividades: [
      "immemorymag — Revista digital con base en Reino Unido.",
      "Vistelacalle — Fotografía para la artista Bárbara Rose Artt, Chile.",
      "Fisheye Magazine #408: Ardiendo brillantemente — Revista digital de fotografía contemporánea, Francia.",
    ],
  },
  {
    title: "Colaboraciones y gestión artística",
    desc: "He participado activamente en proyectos de arte público y muralismo, colaborando en pintura, coordinación y acompañamiento artístico:",
    actividades: [
      "Mural conmemorativo por los 60 años de Los Jaivas — Ayudante de pintura, Metro Cal y Canto, Santiago de Chile.",
      "Mural por los 40 años de democracia — Ayudante de pintura, Ciudad de Buenos Aires, Argentina.",
      "Murales en calle Condell, Valparaíso — Coordinadora de artistas y gestora de terreno. Encargada de convocatoria, logística y acompañamiento durante el proceso.",
    ],
  },
  {
    title: "Talleres y formación",
    desc: "Acompaño procesos formativos con una mirada sensible y cercana. Mis talleres y clases son espacios de exploración, confianza y conexión con la imagen:",
    actividades: [
      "Taller de retrato fotográfico para mujeres — Encuentro fotográfico en el Jardín Botánico de Viña del Mar, centrado en la experiencia colectiva y la luz natural.",
      "Taller teórico-práctico de retrato fotográfico — Sesiones en Valparaíso y Viña del Mar, donde abordamos técnica y vínculo con la persona retratada.",
      "Clases online de Lightroom — Edición con enfoque narrativo y emocional, para desarrollar estilo y flujo de trabajo.",
      "Curso de iniciación a la fotografía — Para todas las edades y niveles. Una introducción al mundo de la imagen desde la observación y la práctica cotidiana.",
    ],
  },
];

export default function EventosPage() {
  return (
    <>
      <MainNavbar />

      <main className="text-white">
        <section className="text-center py-10">
          <h1 className="text-5xl font-bold">Eventos y participaciones</h1>
          <p>
            A lo largo de los años he formado parte de diversas experiencias
            artísticas, educativas y colaborativas, tanto en Chile como en el
            extranjero. Estas son algunas de ellas:
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {eventos.map((evento) => (
            <div key={evento.title} className="shadow-xl rounded-2xl p-6">
              <h3 className="text-2xl font-semibold">{evento.title}</h3>
              <p className="mt-2 text-gray-300">{evento.desc}</p>
              <ul className="mt-2 space-y-2 text-gray-300 list-disc list-inside">
                {evento.actividades.map((actividad) => (
                  <li key={actividad}>{actividad}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </main>

      <Mainfooter />
    </>
  );
}
