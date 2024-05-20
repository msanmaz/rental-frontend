// hooks/useLogout.js
import { useRouter } from 'next/navigation';

const useLogout = () => {
  const router = useRouter();

  const logout = async () => {
    try {
      const response = await fetch('http://localhost:3000/user/logout', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      const data = await response.json();
      if (response.ok) {
        router.push('/login');
      } else {
        console.log(data.error || 'Logout failed. Please try again.');
      }
    } catch (error) {
      console.log('An error occurred. Please try again.');
    }
  };

  return logout;
};

export default useLogout;
