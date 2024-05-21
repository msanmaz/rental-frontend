"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from 'next/navigation';
import { NavBar } from "./nav-bar";
import Header from "./header";

export default function AuthManager() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const getCookieValue = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  };

  useEffect(() => {
    const handleRouteChange = () => {
      const token = getCookieValue('token');
      setIsAuthenticated(!!token);
    };

    // Initial check
    handleRouteChange();

    // Listen for route changes
    router.push(pathname, handleRouteChange);

    // Cleanup the event listener
    return () => {
      router.push(pathname, handleRouteChange);
    };
  }, [pathname]);

  return isAuthenticated ? <Header /> : <NavBar />;
}
