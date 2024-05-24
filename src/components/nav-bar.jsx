import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { ModeToggle } from "./ui/modeToggle";
import { NavigationMenuDemo } from "./navigation-slide";
import Image from "next/image";

export function NavBar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-sm dark:bg-gray-950 dark:text-gray-50">
      <div className="container flex h-16 items-center justify-between px-2 md:px-6">
        <div className="hidden items-center gap-1 font-normal text-sm md:flex">
          <NavigationMenuDemo />
        </div>

        <div className="flex items-center gap-1 text-sm sm:hidden">
            <ModeToggle />
          </div>
        <div className="px-4">
          <Link className="flex justify-center sm:justify-normal items-center md:ml-[12rem]" href="/">
            <Image
              alt="Logo Image"
              src="/attilahomes-logo.webp"
              layout="fill"
              objectFit="contain"
              className="!static !w-[34%]"
            />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex">
          <Link href="/docs" className="md:flex" legacyBehavior passHref>
            <Button variant="ghost">Contact</Button>
          </Link>
          </div>

          <div className="hidden items-center gap-1 text-sm md:flex">
            <ModeToggle />
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button className="md:hidden" size="icon" variant="outline">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 p-4">
                <Link href="#">Home</Link>
                <Link href="#">About</Link>
                <Link href="#">Services</Link>
                <Link href="#">Contact</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}


function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}


function PhoneIcon(props) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
