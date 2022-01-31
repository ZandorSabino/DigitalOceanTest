import Prisma from '@prisma/client'

const { PrismaClient } = Prisma;
const isDev = !(process.env.NODE_ENV === "production");

const prisma = new PrismaClient({
  log: isDev
    ? [
        {
          emit: "stdout",
          level: "query",
        },
        {
          emit: "stdout",
          level: "error",
        },
        {
          emit: "stdout",
          level: "info",
        },
        {
          emit: "stdout",
          level: "warn",
        },
      ]
    : [
        {
          emit: "stdout",
          level: "error",
        },
      ],
});

export default prisma;