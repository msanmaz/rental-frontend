import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image";

export function Hero() {
  return (
    (<section className="relative w-full h-[80vh] min-h-[600px] overflow-hidden">
     <Image
        alt="Hero Image"
        src="/placeholder.svg"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
        priority
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent" />
      <div
        className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center text-gray-50">
        <h1
          className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">Find Your Dream Home</h1>
        <p className="mt-4 max-w-3xl text-lg md:text-xl">
          Discover the perfect property for you, whether youre looking to buy, rent, or invest.
        </p>
        <div className="mt-8 w-full max-w-2xl">
          <form className="flex items-center rounded-lg bg-white p-2 shadow-lg">
            <Input
              className="flex-1 border-r border-gray-200 px-4 py-2 focus:outline-none"
              placeholder="Location"
              type="text" />
            <Input
              className="flex-1 border-r border-gray-200 px-4 py-2 focus:outline-none"
              placeholder="Price Range"
              type="text" />
            <Input
              className="flex-1 px-4 py-2 focus:outline-none"
              placeholder="Bedrooms/Bathrooms"
              type="text" />
            <Button
              className="ml-2 rounded-md bg-gray-900 px-6 py-2 text-white transition-colors hover:bg-gray-800"
              type="submit">
              Search
            </Button>
          </form>
        </div>
      </div>
    </section>)
  );
}
