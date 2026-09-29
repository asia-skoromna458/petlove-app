import Image from "next/image";

interface ImageBlockProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}
export default function ImageBlock({
  src,
  alt,
  width,
  height,
}: ImageBlockProps) {
  return (
    <>
      <Image src={src} alt={alt} width={width} height={height} />
    </>
  );
}
