// components/RecentOrders.js
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";

export function RecentOrders() {
  const orders = [
    {
      image: "",
      invoice: "INV001",
      status: "Rented",
      amount: "$250.00",
      method: "Credit Card",
    },
    {
      image: "",
      invoice: "INV002",
      status: "Rental",
      amount: "$150.00",
      method: "Cash",
    },
    {
      image: "",
      invoice: "INV003",
      status: "On Sale",
      amount: "$350.00",
      method: "Bank Transfer",
    },
    {
      image: "",
      invoice: "INV004",
      status: "On Sale",
      amount: "$450.00",
      method: "Credit Card",
    },
    { invoice: "INV005", status: "Paid", amount: "$550.00", method: "PayPal" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Room</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.invoice}>
                <TableCell>
                <Image
                          alt="Invoice 4"
                          className="aspect-square rounded-md object-cover"
                          height={100}
                          src="/placeholder.svg"
                          width={100}
                        />
                </TableCell>
                <TableCell className="font-medium">{order.invoice}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>{order.method}</TableCell>
                <TableCell>{order.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
