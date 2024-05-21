
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import { NextThemeProvider } from '@/components/theme-provider';
import { NavBar } from '@/components/nav-bar';
import Header from '@/components/header';
import { cookies } from 'next/headers'

const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({ children }) {
  const cookieStore = cookies()
  const theme = cookieStore.get('token')
  console.log(theme,'token12312')
  return ( 
    <html suppressHydrationWarning={true} lang="en">
      <body className={inter.className}>
        <NextThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {theme?.value ? <Header /> : <NavBar />}
          {children}
        </NextThemeProvider>
      </body>
    </html>
  );
}
