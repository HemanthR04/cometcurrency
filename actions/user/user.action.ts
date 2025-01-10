import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function addUser(email: string, password: string) {
  await prisma.user.create({
    data: {
      email: "bH5X9@example.com",
      name: "John Doe",
    },
  });
}    

export async function getUser(email: string) {
  return await prisma.user.findFirst({
    where: {
      email: email,
    },
  });
}