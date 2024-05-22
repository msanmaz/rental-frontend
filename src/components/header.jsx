"use client"
import React from 'react'
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from './ui/button'
import { ModeToggle } from './ui/modeToggle'
import Image from 'next/image'
import LogoutButton from './actionButtons/logout-button'

const Header = () => {
  return (
    <>
          <header
        className="flex h-16 items-center justify-between border-b bg-white px-6 shadow-sm dark:bg-gray-950">
        <div className="flex items-center gap-4">
          <Link className="flex items-center gap-2 text-lg font-semibold" href="#">
            <Package2Icon className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <form className="relative">
            <SearchIcon
              className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              className="h-9 w-[300px] rounded-md bg-gray-100 pl-8 text-sm focus:bg-white focus:outline-none dark:bg-gray-800 dark:text-gray-50 dark:focus:bg-gray-700"
              placeholder="Search..."
              type="search" />
          </form>
        </div>

        <div className='flex-row flex items-center'>
          <div className='px-4'>
        <ModeToggle/>
          </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
              size="icon"
              variant="ghost">
              <Image
                alt="Avatar"
                className="rounded-full"
                height="32"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "32/32",
                  objectFit: "cover",
                }}
                width="32" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem><LogoutButton/></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        </div>
      </header>
    </>
  )
}



function Package2Icon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
        <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
        <path d="M12 3v6" />
      </svg>)
    );
  }



function SearchIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>)
    );
  }
  
  
  

export default Header