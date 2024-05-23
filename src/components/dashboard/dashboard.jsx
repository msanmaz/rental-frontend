import { Button } from "@/components/ui/button";
import { HomeIcon, Sidebar } from "./side-bar";
import { BadgeDollarSign } from 'lucide-react';
import { DashboardCard } from "./dashboard-card";
import { RecentOrders } from "./recent-orders";
import { Tag } from 'lucide-react';
import Link from "next/link";

export function Dashboard() {
  return (

        <main className="flex-1 p-6">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <Button size="sm"> <Link href='/admin/addhouse'>Add Product</Link></Button>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <DashboardCard title="Total Houses" icon={HomeIcon} amount="25" percentage="+20.1% from last month" />
            <DashboardCard title="For Rent" icon={BadgeDollarSign} amount="15" percentage="+180.1% from last month" />
            <DashboardCard title="For Sale" icon={Tag} amount="10" percentage="+19% from last month" />
            <DashboardCard title="Active Rent" icon={ActivityIcon} amount="5" percentage="+201 since last hour" />
          </div>
          <div className="mt-6">
            <RecentOrders />
          </div>
        </main>

  );
}


function ActivityIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path
          d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
      </svg>)
    );
  }
  
  
  function CreditCardIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <line x1="2" x2="22" y1="10" y2="10" />
      </svg>)
    );
  }
  
  
  function DollarSignIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <line x1="12" x2="12" y1="2" y2="22" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>)
    );
  }
  
  function PackageIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="m7.5 4.27 9 5.15" />
        <path
          d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5" />
        <path d="M12 22V12" />
      </svg>)
    );
  }
  
  