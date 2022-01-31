import { linkedinQueue } from "../../tasks/linkedinProfile";
import { cvQueue } from "../../tasks/cvExtraction";
import s3Client from "../s3";

import type { IncomingMessage, ServerResponse } from "http";
import { useBody } from "h3";

export default async (
  req: IncomingMessage,
  res: ServerResponse
): Promise<string> => {
  const body = await useBody(req);

  const params = {
    Key: body.key,
    Bucket: process.env.BUCKETEER_BUCKET_NAME,
  };

  const url = await s3Client.getSignedUrlPromise("getObject", params);

  //await linkedinQueue.add("linkedin", { data: "perfil-do-linkedin" });
  //await cvQueue.add("cv-extraction", { data: "cv" });

  res.statusCode = 200;
  return url;
};
