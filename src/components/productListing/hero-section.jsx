import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[500px] overflow-hidden">
      <Image
        alt="Yacht Hero"
        className="absolute inset-0 w-full h-full object-cover"
        height={1080}
        src="/listing-hero.webp"
        style={{
          aspectRatio: "1920/1080",
          objectFit: "cover",
        }}
        width={1920}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent" />
      <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4 md:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          Discover the Luxury of Yacht Rentals
        </h1>
        <p className="mt-4 max-w-3xl text-lg md:text-xl">
          Explore the open waters in style with our premium yacht rentals. From intimate getaways to grand
          celebrations, we have the perfect vessel for your next adventure.
        </p>
      </div>
    </section>
  )
}
