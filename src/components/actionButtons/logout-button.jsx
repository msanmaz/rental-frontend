'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { signOut } from '@/app/actions/useractions';

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    const response = await signOut();
    if (response.success) {
      console.log(response)
      router.push('/login')
    } else {
     console.error(response,'response err')
    }
  };


  return <form action={handleLogout}><button>Logout</button></form>;
};

export default LogoutButton;
