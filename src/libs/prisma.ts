
import { PrismaClient } from "@prisma/client";

interface GlobalWithPrisma {
  prisma?: PrismaClient;
}

const globalForPrisma = global as GlobalWithPrisma | undefined;

export const prisma =
  globalForPrisma?.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query"] : undefined,
  });

if (globalForPrisma && process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
//se habilita consultas solo en ambito de desarrollo