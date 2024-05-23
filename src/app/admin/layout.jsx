import { Inter } from 'next/font/google';
import '@/app/globals.css';
import { NextThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import { Sidebar } from '@/components/dashboard/side-bar';

export const metadata = {
  title: "Dashboard",
  description: "Attila Homes Dashboard",
};



export default function RootLayout({ children }) {
  return ( 
    <>
          <Header/>
          <div key="1" className="flex min-h-screen w-full flex-col">
      <div className="flex h-full flex-1">
        <Sidebar />
          {children}
          </div>
          </div>
          </>
  );
}
