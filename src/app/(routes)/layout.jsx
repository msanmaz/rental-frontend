
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import { NextThemeProvider } from '@/components/theme-provider';
import AuthManager from '@/components/auth-manager';

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
          <AuthManager/>
          {children}
        </NextThemeProvider>
      </body>
    </html>
  );
}
