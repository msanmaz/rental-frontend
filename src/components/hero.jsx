import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
} from "@/components/ui/select";

export function Hero() {
  return (
    <section className="relative w-full h-[50vh] sm:h-[80vh] min-h-[500px] overflow-hidden">
      <Image
        alt="Hero Image"
        src="/attilahomes-bg.webp"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center text-gray-50">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          Find Your Dream Yatch
        </h1>
        <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
        Explore the worlds most luxurious yachts and create unforgettable memories on the open sea. Book your dream yacht today.
        </p>
        <div className="mt-8 w-full max-w-2xl">
          <form className="flex justify-center items-center rounded-lg px-8 sm:px-4 p-2 bg-opacity-50 dark:bg-opacity-60 bg-white dark:bg-black shadow-lg">
            <div className="w-[42%] pr-4">
            <Select defaultValue="" id="cityId">
              <SelectTrigger>
                <SelectValue placeholder="Select Yatch" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Yatch Type 1</SelectItem>
                <SelectItem value="2">Yatch Type 2</SelectItem>
                <SelectItem value="3">Yatch Type 3</SelectItem>
              </SelectContent>
            </Select>
            </div>
            <div className="w-[40%]">
            <Select defaultValue="" id="cityId">
              <SelectTrigger>
                <SelectValue placeholder="Select Features" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Yatch Type 1</SelectItem>
                <SelectItem value="2">Yatch Type 2</SelectItem>
                <SelectItem value="3">Yatch Type 3</SelectItem>
              </SelectContent>
            </Select>
            </div> 
            <div>
            <Button
              className="ml-2 rounded-md bg-gray-900 px-6 py-2 text-white transition-colors hover:bg-gray-800"
              type="submit"
            >
              Search
            </Button>

            </div>


          </form>
        </div>
      </div>
    </section>
  );
}
