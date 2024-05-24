import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { YachtCard } from "./yatch-card";

export function YatchCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
      {yachtData.map((yacht, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <YachtCard
                key={index}
                title={yacht.title}
                description={yacht.description}
                price={yacht.price}
                imageUrl={yacht.imageUrl}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}



const yachtData = [
    {
      title: 'Luxury Motor Yacht',
      description: 'Experience the ultimate in luxury and comfort on this stunning motor yacht.',
      price: '$10,000/day',
      imageUrl: '/placeholder.svg',
    },
    {
      title: 'Sailing Catamaran',
      description: 'Explore the open sea in style on this spacious and luxurious catamaran.',
      price: '$8,000/day',
      imageUrl: '/placeholder.svg',
    },
    {
      title: 'Classic Sailing Yacht',
      description: 'Experience the timeless elegance of sailing on this restored yacht.',
      price: '$12,000/day',
      imageUrl: '/placeholder.svg',
    },

    {
        title: 'Classic Sailing Yacht',
        description: 'Experience the timeless elegance of sailing on this restored yacht.',
        price: '$12,000/day',
        imageUrl: '/placeholder.svg',
      },
      {
        title: 'Classic Sailing Yacht',
        description: 'Experience the timeless elegance of sailing on this restored yacht.',
        price: '$12,000/day',
        imageUrl: '/placeholder.svg',
      },
      {
        title: 'Classic Sailing Yacht',
        description: 'Experience the timeless elegance of sailing on this restored yacht.',
        price: '$12,000/day',
        imageUrl: '/placeholder.svg',
      },
  ];