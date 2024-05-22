import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React from "react";
import prisma from "../lib/db";
import { Card } from "@/components/ui/card";
import SettingsForm from "../components/SettingsForm";

async function getData(userId: string) {
  const data = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      firstName: true,
      lastName: true,
      email: true,
    },
  });
  return data;
}

async function SettingsPage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    throw new Error("Something went wrong");
  }
  const data = await getData(user.id);
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8">
      <Card>
        <SettingsForm
          email={data?.email as string}
          firstName={data?.firstName as string}
          lastName={data?.lastName as string}
        />
      </Card>
    </section>
  );
}

export default SettingsPage;
