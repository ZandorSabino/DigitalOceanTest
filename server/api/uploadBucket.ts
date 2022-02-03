import type { IncomingMessage, ServerResponse } from "http";
import s3Client from "../s3";
import { useBody } from "h3";

export default async (
  req: IncomingMessage,
  res: ServerResponse
): Promise<string | null> => {
  const body = await useBody(req);

  const fileDecoded = Buffer.from(body.file.split(";base64,").pop(), "base64");

  const params = {
    Key: body.key,
    Bucket: process.env.STORAGE_NAME,
    Body: fileDecoded,
    ContentType: "application/pdf",
  };

  const response = await s3Client.putObject(params, function put(err, data) {
    if (err) {
      return;
    }
  });

  res.statusCode = 200;

  return "ACK";
};
