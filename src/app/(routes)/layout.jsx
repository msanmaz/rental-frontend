import { Inter } from "next/font/google";
import "@/app/globals.css"
import { NextThemeProvider } from "@/components/theme-provider";
import { NavBar } from "@/components/nav-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Attila Homes",
  description: "Generated by create next app",
};

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
            <NavBar/>
            {children}
          </NextThemeProvider>
      
      </body>
    </html>
  );
}