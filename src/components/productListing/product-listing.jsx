
import { YachtCard } from "../yatchInfo/yatch-card"
import FilterForm from "./filter-form"
import HeroSection from "./hero-section"


const yachts = [
  {
    image: "/placeholder.svg",
    title: "Luxury Yacht",
    description: "Sleeps 8 | 80 ft",
    price: "$10,000/day"
  },
  {
    image: "/placeholder.svg",
    title: "Premier Yacht",
    description: "Sleeps 12 | 100 ft",
    price: "$15,000/day"
  },
  {
    image: "/placeholder.svg",
    title: "Mega Yacht",
    description: "Sleeps 16 | 120 ft",
    price: "$20,000/day"
  },
  {
    image: "/placeholder.svg",
    title: "Sailing Yacht",
    description: "Sleeps 6 | 60 ft",
    price: "$8,000/day"
  },
  {
    image: "/placeholder.svg",
    title: "Catamaran",
    description: "Sleeps 8 | 70 ft",
    price: "$12,000/day"
  },
  {
    image: "/placeholder.svg",
    title: "Superyacht",
    description: "Sleeps 20 | 150 ft",
    price: "$30,000/day"
  }
]

export default function ProductListing() {
  return (
    <>
      <HeroSection />
      <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-[1fr_3fr] gap-8">
            <FilterForm />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {yachts.map((yacht, index) => (
                <YachtCard price={yacht.price} key={index} title={yacht.title} description={yacht.description} imageUrl={yacht.image}/>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
