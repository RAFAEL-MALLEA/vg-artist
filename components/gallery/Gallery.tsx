import Image from "next/image";

interface GalleryProps {
  images: string[];
  altPrefix: string;
}

export default function Gallery({ images, altPrefix }: GalleryProps) {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
      {images.map((src, i) => (
        <div key={src} className="break-inside-avoid">
          <Image
            src={src}
            alt={`${altPrefix} ${i + 1}`}
            width={500}
            height={500}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="w-full h-auto rounded-lg shadow"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
