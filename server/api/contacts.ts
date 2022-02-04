import { Contacts } from "@prisma/client";
import prisma from "../prisma";

export default async (req, res): Promise<Contacts[]> => {
  const contacts = await prisma.contacts.findMany();

  return contacts;
};
