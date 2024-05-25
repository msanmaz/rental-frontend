import Link from "next/link";
import { YachtCard } from "./yatch-card";
import { YatchCarousel } from "./yatch-carousel";

const InfoSection = () => {
    return (
      <section className="w-full py-12 md:py-24 lg:py-12 bg-gray-100 dark:bg-gray-950">
        <div className="container px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Featured Yachts
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Experience Luxury on the Water</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Discover our hand-picked selection of the most luxurious yachts available for rent. From sleek motor yachts to majestic sailing vessels, we have the perfect yacht for your next adventure.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl px-8 items-center gap-6 py-12 grid-cols-1 lg:gap-12">
            <YatchCarousel/>
          </div>
        </div>
        <div className="flex justify-center">
        <Link
            className="inline-flex h-12 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="/listings"
          >
            Browse Yachts
          </Link>
        </div>

      </section>
    );
  };
  
  export default InfoSection;