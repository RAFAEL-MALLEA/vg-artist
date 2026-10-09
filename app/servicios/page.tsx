import MainNavbar from "@/components/navbar/mainnavbar";
import Mainfooter from "@/components/footer/mainfooter";

interface ServicioFoto {
  title: string;
  desc: string;
  incluye: string;
}

interface ServicioTaller {
  title: string;
  detalles: string[];
}

const serviciosFotograficos: ServicioFoto[] = [
  {
    title: "Retrato artístico personal",
    desc: "Una sesión íntima y cuidada para retratarte tal como sos. Ideal para quienes desean habitar su imagen desde un lugar real, sensible y sin poses forzadas.",
    incluye:
      "Planificación previa, 1 a 2 horas de sesión, entrega de 25 fotos editadas en alta calidad.",
  },
  {
    title: "Fotografía para artistas",
    desc: "Dirigido a músicos, pintores, actores y creadores visuales. Creamos imágenes que representen tu universo personal y artístico, ya sea en tu espacio de trabajo, en escena o con propuestas conceptuales.",
    incluye:
      "Planificación personalizada, sesión de hasta 2 horas, entrega de 15 a 20 fotos editadas.",
  },
  {
    title: "Fotografía editorial / marcas",
    desc: "Retratos y fotografía lifestyle para marcas conscientes, proyectos culturales o colaboraciones editoriales. Trabajamos juntos la narrativa visual que tu proyecto necesita.",
    incluye:
      "Propuesta creativa, moodboard opcional, sesión de medio día, entrega de fotos editadas según requerimientos del proyecto.",
  },
  {
    title: "Sesiones de pareja / vínculos",
    desc: "Fotografía de vínculos reales: parejas, amistades, madres e hijos. Un espacio para registrar el afecto y la conexión en entornos cotidianos o naturales.",
    incluye: "1 hora de sesión en exterior o domicilio, entrega de 20 fotos editadas.",
  },
  {
    title: "Sesiones familiares / maternales",
    desc: "Registro cálido y cercano de momentos en familia o procesos de gestación y crianza. Se realiza con respeto al ritmo y hogar.",
    incluye: "Hasta 1 hora y media de sesión, entrega de 15 fotos editadas.",
  },
];

const talleres: ServicioTaller[] = [
  {
    title: "Edición fotografía profesional",
    detalles: [
      "Servicio de edición en Lightroom para fotógrafos o proyectos que necesiten una postproducción sensible y coherente con su identidad visual.",
      "Modalidad: online.",
      "Incluye: revisión de estilo, colorimetría y tratamiento personalizado.",
    ],
  },
  {
    title: "Taller de retrato fotográfico para mujeres",
    detalles: [
      "Encuentro fotográfico en el Jardín Botánico de Viña del Mar, enfocado en la experiencia colectiva, la luz natural y la expresión íntima.",
    ],
  },
  {
    title: "Taller teórico-práctico de retrato fotográfico con modelo",
    detalles: [
      "Sesiones realizadas en Valparaíso y Viña del Mar. Se abordan fundamentos técnicos y creativos del retrato, explorando el vínculo entre fotógrafo y retratado.",
    ],
  },
  {
    title: "Clases online de Lightroom",
    detalles: [
      "Clases personalizadas enfocadas en desarrollar tu estilo, aprender herramientas clave de edición y mejorar tu flujo de trabajo desde una mirada narrativa y emocional.",
    ],
  },
  {
    title: "Curso de iniciación a la fotografía presencial y online",
    detalles: [
      "Dirigido a personas de todas las edades y niveles. Un recorrido desde lo básico hacia una mirada personal, práctica y sensible del mundo fotográfico.",
    ],
  },
];

export default function ServiciosPage() {
  return (
    <>
      <MainNavbar />

      <main className="text-white">
        <section className="text-center py-10">
          <h1 className="text-5xl font-bold">Ofrezco Servicios Profesionales</h1>
          <p className="text-xl">Talleres y Fotografías</p>
        </section>

        <section>
          <p className="text-center text-4xl font-bold py-5">
            Servicios Fotográficos y Formación
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviciosFotograficos.map((service) => (
              <div key={service.title} className="shadow-xl rounded-2xl p-6">
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-gray-300">{service.desc}</p>
                <p className="mt-2 text-gray-300">{service.incluye}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-4xl font-bold py-8">Clases y talleres</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {talleres.map((taller) => (
              <div key={taller.title} className="shadow-xl rounded-2xl p-6">
                <h3 className="text-2xl font-semibold">{taller.title}</h3>
                {taller.detalles.map((detalle) => (
                  <p key={detalle} className="mt-2 text-gray-300">
                    {detalle}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </section>
      </main>

      <Mainfooter />
    </>
  );
}
