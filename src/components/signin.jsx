import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SignIn() {
  return (
    (<div
      className="flex h-screen w-full items-center justify-center bg-gray-100 dark:bg-gray-950">
      <div
        className="w-full max-w-md space-y-6 rounded-lg bg-white p-8 shadow-lg dark:bg-gray-900">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Welcome back</h1>
          <p className="text-gray-500 dark:text-gray-400">Enter your email and password to access your dashboard.</p>
        </div>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="m@example.com" required type="email" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link
                className="text-sm font-medium text-gray-900 hover:underline dark:text-gray-50"
                href="#">
                Forgot password?
              </Link>
            </div>
            <Input id="password" required type="password" />
          </div>
          <Button className="w-full" type="submit">
            Sign in
          </Button>
        </form>
      </div>
    </div>)
  );
}
