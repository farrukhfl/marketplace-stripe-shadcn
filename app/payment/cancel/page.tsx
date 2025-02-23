import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { XCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function CancelRoute() {
  return (
    <section className="w-full min-h-[80vh] flex items-center justify-center">
      <Card className="w-[350px]">
        <div className="p-6">
          <div className="w-full flex justify-center">
            <XCircle className="w-12 h-12 rounded-full p-2 text-red-500 bg-red-500/30" />
          </div>
          <div className="mt-3 text-center sm:mt-5 w-full">
            <h3 className="text-lg leading-6 font-medium">Payment Canceled</h3>
            <p className="mt-2 text-muted-foreground text-sm">
                Something went wrong with your payment
            </p>

            <Button asChild className="mt-5 sm:mt-6 w-full" >
            <Link href={"/"}>Back to Homepage</Link>
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
}
