"use client";
import React from "react";
import Link from "next/link";
import InputField from "@/components/input-field";
import FormLayout from "@/components/form-layout";
import { signIn } from "@/app/actions/useractions";
import { useRouter } from "next/navigation";
import SignInButton from "./actionButtons/login-button";

export function SignIn() {
  const router = useRouter();

  const handleSubmit = async (formData) => {
    const response = await signIn(formData);
    if (response.success) {
      console.log(response);
      router.push("/admin");
    } else {
      console.error(response);
    }
  };

  return (
    <FormLayout action={handleSubmit}>
      <InputField
        id="email"
        label="Email"
        type="email"
        placeholder="m@example.com"
      />
      <div className="space-y-2">
        <InputField
          id="password"
          label="Password"
          type="password"
          placeholder="Your password"
        />
        <div className="flex items-center justify-end">
          <Link
            className="text-sm font-medium text-gray-900 hover:underline dark:text-gray-50"
            href="#"
          >
            Forgot password?
          </Link>
        </div>
      </div>
      <SignInButton />
    </FormLayout>
  );
}
