import MainNavbar from "@/components/navbar/mainnavbar";
import Mainfooter from "@/components/footer/mainfooter";
import Gallery from "@/components/gallery/Gallery";

const images = [
  "/retratos/1.jpg",
  "/retratos/2.jpg",
  "/retratos/3.jpg",
  "/retratos/4.jpg",
  "/retratos/5.jpg",
  "/retratos/6.jpg",
  "/retratos/7.jpg",
  "/retratos/8.jpg",
  "/retratos/9.jpg",
  "/retratos/10.jpg",
  "/retratos/11.jpg",
  "/retratos/12.jpg",
  "/retratos/13.jpg",
  "/retratos/14.jpg",
  "/retratos/15.jpg",
  "/retratos/16.jpg",
  "/retratos/17.jpg",
  "/retratos/18.jpg",
  "/retratos/19.jpg",
  "/retratos/20.jpg",
  "/retratos/21.jpg",
  "/retratos/22.jpg",
  "/retratos/23.jpg",
  "/retratos/24.jpg",
  "/retratos/25.jpg",
  "/retratos/26.jpg",
  "/retratos/27.jpg",
  "/retratos/28.jpg",
  "/retratos/29.jpg",
  "/retratos/30.jpg",
  "/retratos/31.jpg",
  "/retratos/32.jpg",
  "/retratos/33.jpeg",
  "/retratos/34.jpg",
  "/retratos/35.jpg",
  "/retratos/36.jpg",
  "/retratos/37.jpg",
  "/retratos/38.jpg",
  "/retratos/39.jpg",
  "/retratos/40.jpg",
  "/retratos/41.jpg",
  "/retratos/42.jpg",
  "/retratos/43.jpg",
  "/retratos/44.jpg",
  "/retratos/45.jpg",
  "/retratos/46.jpg",
  "/retratos/47.jpg",
  "/retratos/48.jpg",
  "/retratos/49.jpg",
  "/retratos/50.jpg",
  "/retratos/51.jpg",
  "/retratos/52.jpg",
  "/retratos/53.jpg",
  "/retratos/54.jpg",
  "/retratos/55.jpg",
  "/retratos/56.jpg",
  "/retratos/57.jpg",
  "/retratos/58.jpg",
  "/retratos/59.jpg",
  "/retratos/60.jpg",
  "/retratos/61.jpg",
  "/retratos/62.jpg",
  "/retratos/63.jpg",
  "/retratos/64.jpg",
  "/retratos/65.jpeg",
];

export default function RetratosPage() {
  return (
    <>
      <MainNavbar />
      <main>
        <Gallery images={images} altPrefix="Retrato fotográfico" />
      </main>
      <Mainfooter />
    </>
  );
}
