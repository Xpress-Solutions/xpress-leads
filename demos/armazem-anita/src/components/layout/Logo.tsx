import Image from "next/image";
import { images } from "@/data/images";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  priority?: boolean;
}

export function Logo({ className, priority = false }: LogoProps) {
  return (
    <Image
      src={images.logo}
      alt="Armazém Anita — o primeiro armazém e bar do Brasil"
      width={420}
      height={240}
      className={cn("h-11 w-auto md:h-14", className)}
      priority={priority}
    />
  );
}
