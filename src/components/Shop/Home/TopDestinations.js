import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import CstImage from "@/components/CstView/CstImage";

const TopDestinations = ({ destinations = [], ...props }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {destinations.map((destination, idx) => (
          <Card key={idx}>
            <CardHeader>
              <CardTitle>{destination?.title}</CardTitle>
              <CardDescription>{destination?.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <CstImage />
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default TopDestinations;
