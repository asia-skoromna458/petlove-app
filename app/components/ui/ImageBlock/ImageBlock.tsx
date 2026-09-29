import Image from "next/image";

interface ImageBlockProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  tabletSrc: string;
}
export default function ImageBlock({
  src,
  tabletSrc,
  alt,
  width,
  height,
}: ImageBlockProps) {
  return (
    <picture>
      <source
        media="(min-width: 768px) and (max-width: 1439px)"
        srcSet={tabletSrc}
      />

      <Image src={src} alt={alt} width={width} height={height} />
    </picture>
  );
}
