# Victoria Galarza — Portafolio de Fotografía

Landing page de portafolio para la fotógrafa Victoria Galarza. Construido con
**Next.js 15 (App Router)**, **React 19** y **Tailwind CSS 4**.

## Instalación

```bash
npm install
```

⚠️ **Importante**: se quitaron `react-masonry-css` y `@types/express` de
`package.json` por no estar en uso en el proyecto. Como no pude regenerar
`package-lock.json` sin acceso a red, corre `npm install` después de copiar
estos archivos para que el lockfile se actualice solo.

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Estructura

```
app/
  layout.tsx              Layout raíz, metadata SEO, fuentes Geist
  globals.css
  page.tsx                 Home (galería)
  sobre-mi/page.tsx         Sobre Victoria Galarza
  espacios_atmosferas/page.tsx
  retratos/page.tsx
  servicios/page.tsx
  eventos/page.tsx
components/
  navbar/mainnavbar.tsx
  footer/mainfooter.tsx
  gallery/Gallery.tsx       Componente de galería reutilizado por Home, Retratos y Espacios y Atmósferas
public/
  (no incluido aquí — copia tus imágenes manualmente, ver más abajo)
```

## ⚠️ Antes de correr el proyecto: carpeta `public`

Este .zip **no incluye `public`** por su peso. Copia tu carpeta `public`
original (con las subcarpetas `home/`, `retratos/`, `espacios_atmosferas/`,
`SobreMi/`) dentro de la raíz del proyecto, al mismo nivel que `app/` y
`components/`.

Verifica especialmente que la carpeta `public/SobreMi/` (con
`victoriagalarza.jpg`) tenga exactamente ese nombre y mayúsculas, ya que así
quedó referenciada en `app/sobre-mi/page.tsx`. Si prefieres, puedes renombrar
esa carpeta a minúsculas (`sobremi`) y actualizar el `src` de la imagen en
ese archivo.

## Cambios realizados respecto a la versión anterior

- Se eliminó la referencia a la fuente `open-sauce-one` (nunca se cargaba);
  ahora el sitio usa solo Geist, que ya estaba correctamente configurada.
- Se agregó `metadata` real (title, description, Open Graph) en vez de los
  valores por defecto de `create-next-app`.
- Se corrigió `lang="en"` → `lang="es"` en `<html>`.
- Se renombró la ruta `/SobreMI` a `/sobre-mi` (minúsculas, consistente y
  segura para despliegues en Linux/Vercel, que distinguen mayúsculas).
- Se quitó el `<button>` que envolvía cada `<Link>` del navbar (HTML
  inválido) y se reemplazó por estilos directos en el propio `Link`.
- Se corrigió el link de Instagram en el footer, que tenía un espacio al
  final de la URL.
- Se extrajo un componente `Gallery` reutilizable para no repetir el mismo
  JSX en Home, Retratos y Espacios y Atmósferas.
- Se agregó el prop `sizes` a las imágenes de las galerías (recomendado por
  Next.js para `srcset` responsive) y `alt` descriptivo por sección.
- Se reestructuraron los datos de `servicios` y `eventos` a arrays de
  actividades en vez de campos sueltos `act, act2, act3, act4` (evita
  párrafos vacíos cuando un servicio tiene menos actividades que otro).
  `eventos` ahora lista las actividades como `<ul>` en vez de `<br />`
  sueltos.
- Se cambió `flex` por `grid` en las secciones de tarjetas de `servicios` y
  `eventos` para que se acomoden correctamente en mobile.
- Se quitaron las líneas de imágenes comentadas (52–65) en
  `espacios_atmosferas/page.tsx`. Si tienes esas imágenes, agrégalas de
  nuevo al array.
- Se eliminaron del `package.json` las dependencias `react-masonry-css` y
  `@types/express`, que no se usaban en el código.
- Se corrigió el `include` malformado de `tsconfig.json`.

## Despliegue

Recomendado: [Vercel](https://vercel.com/new).
