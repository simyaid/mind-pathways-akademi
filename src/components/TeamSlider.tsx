import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { team } from "@/pages/Team";

export const TeamSlider = () => (
  <section className="py-20 lg:py-28 bg-surface border-y border-border">
    <div className="container-tight">
      <div className="flex items-end justify-between mb-10">
        <div>
          <span className="eyebrow mb-5">Öğreticiler</span>
          <h2 className="font-display text-3xl lg:text-[2.5rem] text-navy-deep leading-tight font-medium mt-4">
            Akademi Psikodiyalektik<br />Öğreticileri
          </h2>
        </div>
        <Link
          to="/kadro"
          className="hidden sm:inline-flex items-center gap-1.5 text-sm text-navy-deep hover:text-amber transition-colors"
        >
          Tümünü gör <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <Carousel opts={{ align: "start", loop: true }} className="w-full">
        <CarouselContent className="-ml-4">
          {team.map((m) => (
            <CarouselItem key={m.slug} className="pl-4 sm:basis-1/2 lg:basis-1/3">
              <Link
                to={`/kadro/${m.slug}`}
                className="group block bg-card border border-border rounded-lg p-6 hover:border-navy-deep/40 hover:shadow-card transition-all h-full"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="h-14 w-14 rounded-md overflow-hidden">
                    {m.photo ? (
                      <img src={m.photo} alt={m.name} className="h-full w-full object-cover" />
                    ) : (
                      <div className="h-full w-full bg-navy-deep grid place-items-center text-amber font-display text-lg font-semibold">
                        {m.initials}
                      </div>
                    )}
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-amber transition-colors" />
                </div>
                <h3 className="font-display text-lg font-semibold text-navy-deep mt-1.5">{m.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">{m.bio}</p>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 -translate-x-1/2" />
        <CarouselNext className="right-0 translate-x-1/2" />
      </Carousel>

      <div className="mt-8 sm:hidden text-center">
        <Link to="/kadro" className="text-sm text-navy-deep hover:text-amber transition-colors inline-flex items-center gap-1.5">
          Tümünü gör <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  </section>
);
