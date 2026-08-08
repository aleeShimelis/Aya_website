import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/constants";

export function Logo() {
  return (
    <Link href="/" className="flex min-h-11 items-center gap-3" aria-label="Aya Dental Studio home">
      <Image
        src={siteConfig.logoPath}
        alt="Aya Dental Studio"
        width={1024}
        height={684}
        unoptimized
        className="h-auto w-36 md:w-44"
      />
    </Link>
  );
}
