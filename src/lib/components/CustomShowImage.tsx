'use client';

import Image from 'next/image';

export const CustomShowImage = ({ src, alt }: { src: string; alt: string }) => {
  return <Image src={src} width={100} height={100} alt={alt} />;
};
