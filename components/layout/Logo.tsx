import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/constants";

export function Logo() {
  const logoFile = path.join(process.cwd(), "public", "logo", "aya-dental-studio-logo.svg");
  const hasLogoAsset = fs.existsSync(logoFile);

  return (
    <Link href="/" className="flex min-h-11 items-center gap-3" aria-label="Aya Dental Studio home">
      {hasLogoAsset ? (
        <Image
          src={siteConfig.logoPath}
          alt="Aya Dental Studio"
          width={176}
          height={52}
          priority
          className="h-auto w-36 md:w-44"
        />
      ) : (
        <span className="flex flex-col leading-none">
          <span className="font-serif text-2xl font-semibold text-charcoal">Aya</span>
          <span className="text-xs font-semibold tracking-normal text-slate">Dental Studio</span>
        </span>
      )}
    </Link>
  );
}
