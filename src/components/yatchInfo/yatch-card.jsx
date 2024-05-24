import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from  "@/components/ui/card"


export const YachtCard = ({ title, description, price, imageUrl }) => (
  <Card className="w-full">
    <CardHeader>
      <img
        alt="Yacht"
        className="aspect-video object-cover"
        height="200"
        src={imageUrl}
        width="350"
      />
    </CardHeader>
    <CardContent>
      <div className="flex flex-col">
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <div className="text-right">
          <span className="text-lg font-semibold">{price}</span>
        </div>
        </div>
      </CardContent>
  </Card>
);
