import LogoutButton from '@/components/actionButtons/logout-button';
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
    <div className='flex justify-center py-[10rem] font-bold flex-col w-full items-center'><p>Youre Logged In As {user.user.username}</p>
    <LogoutButton/>
     </div>
    </>
  )
}

export default Admin

