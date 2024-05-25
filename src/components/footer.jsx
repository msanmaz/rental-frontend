
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t-4 bg-gray-100 dark:bg-gray-950 dark:text-white text-black py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
          <div className="flex flex-col items-start">
            <Link className="inline-flex items-center" href="#">
              <SailboatIcon className="h-8 w-8 dark:text-gray-300 text-[#0a0807]" />
              <span className="ml-2 text-2xl font-bold">Yacht Rentals</span>
            </Link>
            <p className="mt-4 dark:text-gray-300 text-sm">
              Experience the ultimate luxury on the open waters with our exceptional yacht rentals.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <nav className="space-y-2">
              <Link className="dark:text-gray-300 pr-2 hover:text-[#C0A06F] transition-colors" href="#">
                Home
              </Link>
              <Link className="dark:text-gray-300 px-2 hover:text-[#C0A06F] transition-colors" href="#">
                Yachts
              </Link>
              <Link className="dark:text-gray-300 px-2 hover:text-[#C0A06F] transition-colors" href="#">
                About
              </Link>
              <Link className="dark:text-gray-300 hover:text-[#C0A06F] transition-colors" href="#">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="dark:text-gray-300">123 Yacht Club Drive, Miami, FL 33101</p>
            <p className="dark:text-gray-300 mt-2">Phone: (123) 456-7890</p>
            <p className="dark:text-gray-300 mt-2">Email: info@yachtrentals.com</p>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link className="dark:text-gray-300 hover:text-[#C0A06F] transition-colors" href="#">
                <FacebookIcon className="h-6 w-6" />
              </Link>
              <Link className="dark:text-gray-300 hover:text-[#C0A06F] transition-colors" href="#">
                <TwitterIcon className="h-6 w-6" />
              </Link>
              <Link className="dark:text-gray-300 hover:text-[#C0A06F] transition-colors" href="#">
                <InstagramIcon className="h-6 w-6" />
              </Link>
              <Link className="dark:text-gray-300 hover:text-[#C0A06F] transition-colors" href="#">
                <LinkedinIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function SailboatIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z" />
      <path d="M21 14 10 2 3 14h18Z" />
      <path d="M10 2v16" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}