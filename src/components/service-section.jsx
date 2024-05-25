import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import Image from "next/image"

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Discover Our Luxurious Yachts
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Explore the epitome of nautical elegance with our stunning fleet of yachts, designed to provide an
                unparalleled experience on the open waters.
              </p>
            </div>
            <Carousel className="w-full max-w-md">
              <CarouselContent>
                <CarouselItem>
                  <Image
                    alt="Yacht Exterior"
                    className="aspect-video object-cover rounded-md"
                    height="480"
                    src="/main-page-yatch.webp"
                    width="720"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt="Yacht Interior"
                    className="aspect-video object-cover rounded-md"
                    height="480"
                    src="/rolls-royce-logo.webp"
                    width="720"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt="Yacht Sunset"
                    className="aspect-video object-cover rounded-md"
                    height="480"
                    src="/placeholder.svg"
                    width="720"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <Image
            alt="Yacht Exterior"
            className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover"
            height="600"
            src="/yatch-cool.webp"
            width="800"
          />
        </div>
      </div>
    </section>
  )
}