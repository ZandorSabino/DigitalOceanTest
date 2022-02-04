import type { IncomingMessage, ServerResponse } from "http";
import { useBody } from "h3";

import s3Client from "../s3";
import { resumeQueue } from "../../tasks/cvExtraction";
import { linkedinQueue, } from "../../tasks/linkedinProfile";

export default async (
  req: IncomingMessage,
  res: ServerResponse
): Promise<string> => {
  const body = await useBody(req);

  const params = {
    Key: body.key,
    Bucket: process.env.STORAGE_NAME,
  };

  const url = await s3Client.getSignedUrlPromise("getObject", params);

  linkedinQueue.add("linkedin-profile", "PROFILE URL");
  resumeQueue.add("resume-parse", "RESUME URL");

  res.statusCode = 200;
  return url;
};