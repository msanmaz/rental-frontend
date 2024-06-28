'use server';

import { login, logout } from '@/lib/authService';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

export const signIn = async (formData) => {
  const email = formData.get('email');
  const password = formData.get('password');
  console.log(email,'email')
  console.log(password,'pass')
  try {
    const data = await login(email, password);
    if (!data.success) {
      throw new Error(data.message);
    }
    cookies().set({
      name: "token",
      value: data.token,
      path: "/admin",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });
    revalidatePath('/admin');
    return { success: true, message: "Login successful!" };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const signOut = async () => {
  try {
    const data = await logout();
    if (!data.success) {
      throw new Error(data.message);
    }
    cookies().set({
      name: "token",
      value: "",
      path: "/admin",
      maxAge: -1,
    });
    revalidatePath('/login');
    return { success: true, message: "Logout successful!" };
  } catch (error) {
    return { success: false, message: error.message };
  }
};