import { AnchorIcon, SailboatIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const ServiceSection = () => {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-16">
        <div className="container px-4 md:px-24">
          <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
            <img
              alt="Yacht"
              className="mx-auto aspect-[16/9] overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              height="650"
              src="/placeholder.svg"
              width="900"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Discover the Luxury of Yachting
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Explore our collection of premium yachts for rent or purchase, and embark on the ultimate nautical
                  adventure.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Browse Yachts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSection;
