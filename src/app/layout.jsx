import { Inter } from 'next/font/google';
import '@/app/globals.css';
import { NextThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata = {
  title: "Dashboard",
  description: "Attila Homes Dashboard",
};

const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({ children }) {
  return ( 
    <html suppressHydrationWarning={true} lang="en">
      <body className={inter.className}>
        <NextThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Footer/>
        </NextThemeProvider>
      </body>
    </html>
  );
}
