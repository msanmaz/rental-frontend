import { Inter } from 'next/font/google';
import '@/app/globals.css';
import { NavBar } from '@/components/nav-bar';

export const metadata = {
  title: "Yatch Listings",
  description: "Attila Homes Login",
};



export default function RootLayout({ children }) {
  return ( 
<>
          <NavBar/>
          {children}
</>
  );
}
