import { Inter } from "next/font/google";
import "@/app/globals.css";

export const metadata = {
  title: "Dashboard",
  description: "Attila Homes Dashboard",
};

export default function AdminLayout({ children }) {
  return <div>{children}</div>;
}
