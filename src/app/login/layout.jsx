import { Inter } from 'next/font/google';
import '@/app/globals.css';
import { NextThemeProvider } from '@/components/theme-provider';
import { NavBar } from '@/components/nav-bar';

export const metadata = {
  title: "Login",
  description: "Attila Homes Login",
};

const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({ children }) {
  return ( 
<>
          <NavBar/>
          {children}
</>
  );
}
