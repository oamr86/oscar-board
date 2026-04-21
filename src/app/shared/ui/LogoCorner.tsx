import Image, { StaticImageData } from 'next/image';

export function LogoCorner({ src, name }: { src: string | StaticImageData; name: string }) {
  return (
    <div style={{
      position: 'fixed',
      top: 16,
      right: 16,
      zIndex: 1000,
    }}>
      <Image src={src} alt={name} width={60} height={60} className="rounded-full" />
    </div>
  );
}
