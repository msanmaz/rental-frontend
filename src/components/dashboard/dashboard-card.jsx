// components/DashboardCard.js
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import PropTypes from "prop-types";

export function DashboardCard({ title, icon: Icon, amount, percentage }) {
  return (

    <Card className="hover:bg-gray-100 hover:shadow-lg dark:hover:bg-gray-800 dark:hover:shadow-lg transition-all">
    <CardHeader className="flex items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <Icon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{amount}</div>
      <p className="text-xs text-gray-500 dark:text-gray-400">{percentage}</p>
    </CardContent>
  </Card>
  );
}

DashboardCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  amount: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
};


