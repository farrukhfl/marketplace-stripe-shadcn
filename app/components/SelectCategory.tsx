"use client";
import React, { useState } from "react";
import { categoryItem } from "../lib/categoryItem";
import { Card, CardHeader } from "@/components/ui/card";

function SelectCategory() {
  const [selectedCategory, setSelecctedCategory] = useState<string | null>(
    null
  );
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <input type="hidden" name="category" value={selectedCategory || ""} />
      {categoryItem.map((item) => (
        <div key={item.id} className="cursor-pointer">
          <Card
            className={
              selectedCategory === item.name
                ? "border-2 border-primary"
                : "border-2 border-primary/10"
            }
            onClick={() => setSelecctedCategory(item.name)}
          >
            <CardHeader>
              {item.image}
              <h3 className="font-mediumx">{item.title}</h3>
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default SelectCategory;
