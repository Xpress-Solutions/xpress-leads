import {
  ArrowDown,
  Beer,
  Coffee,
  Croissant,
  Flame,
  MapPin,
  Music,
  Search,
  ShoppingBasket,
  Sparkles,
  Star,
  Tag,
  Trophy,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type BrandIconName =
  | "coffee"
  | "bakery"
  | "market"
  | "food"
  | "beer"
  | "grill"
  | "soccer"
  | "music";

export const brandIcons: Record<BrandIconName, LucideIcon> = {
  coffee: Coffee,
  bakery: Croissant,
  market: ShoppingBasket,
  food: UtensilsCrossed,
  beer: Beer,
  grill: Flame,
  soccer: Trophy,
  music: Music,
};

export const eventIcons = {
  futebol: Trophy,
  musica: Music,
  "happy-hour": Beer,
  especial: Sparkles,
  promocao: Tag,
} as const;

export function BrandIcon({
  name,
  className,
}: {
  name: BrandIconName;
  className?: string;
}) {
  const Icon = brandIcons[name];
  return <Icon className={className} strokeWidth={1.75} aria-hidden />;
}

export function StarRating({
  className,
  starClassName,
}: {
  className?: string;
  starClassName?: string;
}) {
  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn("h-4 w-4 fill-current", starClassName)}
          strokeWidth={0}
        />
      ))}
    </div>
  );
}

export {
  ArrowDown,
  MapPin,
  Search,
  Trophy,
  UtensilsCrossed,
};
