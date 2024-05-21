// hooks/useToken.ts
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export function useToken() {
  const [hasToken, setHasToken] = useState(null);

  useEffect(() => {
    const checkToken = () => {
      const token = Cookies.get();
      console.log(token,'token')
      setHasToken(!!token);
    };

    checkToken(); // Initial check

    const handleStorageChange = () => {
      checkToken();
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return hasToken;
}
