import { Contacts } from "@prisma/client";
import pathToRegexp from "path-to-regexp";
import prisma from "../prisma";

const { match } = pathToRegexp;


type UrlParams = {
  id: string;
};

export default async (req, res): Promise<Contacts> => {
  const matchFn = match<UrlParams>("/api/contact/:id", {
    decode: decodeURIComponent,
  });
  const matchObj = matchFn(req.originalUrl);
  if (!matchObj) {
    res.statusCode = 404;
    return res.end();
  }
  const id = matchObj.params.id;

  const contact = await prisma.contacts.findUnique({where:{id:id}})
  return contact
};
