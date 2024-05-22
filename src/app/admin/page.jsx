import { Dashboard } from '@/components/dashboard/dashboard';
import { headers } from 'next/headers';
import React from 'react'

const Admin = () => {
  const headersList = headers();
  const userInfoHeader = headersList.get('x-user-info');


  let user = null;
  if (userInfoHeader) {
    try {
      user = JSON.parse(userInfoHeader);
    } catch (error) {
      console.error('Failed to parse user info:', error);
    }
  }
  console.log(user.user.username,'userinfo')
  return (
    <>
    <Dashboard/>
    </>
  )
}

export default Admin

