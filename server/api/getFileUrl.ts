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
  
  const jobLinkedin = linkedinQueue.create('linkedin', { data: "perfil-do-linkedin" }).save(function(err){
    if( !err ) console.log('Criado o Job linkedin', jobLinkedin.id );
  });

  const jobCv = cvQueue.create('cv', { data: "perfil-extraction" }).save(function(err){
    if( !err ) console.log('Criado o Job perfil-extraction', jobCv.id );
  });

  res.statusCode = 200;
  return url;
};
