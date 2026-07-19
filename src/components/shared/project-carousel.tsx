import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FolderKanban } from "lucide-react";

export function ProjectCarousel({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  if (images.length === 0) {
    return (
      <div className="flex aspect-video items-center justify-center rounded-t-xl bg-secondary/60">
        <FolderKanban
          size={32}
          className="text-muted-foreground"
          strokeWidth={1.25}
        />
      </div>
    );
  }

  return (
    <Carousel className="w-full ">
      <CarouselContent>
        {images.map((src, i) => (
          <CarouselItem key={src}>
            <div className="flex items-center justify-center rounded-t-xl bg-secondary/60">
              <img
                src={src}
                alt={`${alt} — screenshot ${i + 1}`}
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {images.length > 1 && (
        <>
          <CarouselPrevious className="left-3" />
          <CarouselNext className="right-3" />
        </>
      )}
    </Carousel>
  );
}
