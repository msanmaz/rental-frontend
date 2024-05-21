import { Inter } from 'next/font/google';
import '@/app/globals.css';
import { NextThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';

export const metadata = {
  title: "Dashboard",
  description: "Attila Homes Dashboard",
};

const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({ children }) {
  return ( 
    <>
          <Header/>
          {children}
          </>
  );
}
