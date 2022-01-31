import aws from "aws-sdk";

const { S3 } = aws;

const s3Client = new S3({
  endpoint: process.env.BUCKETEER_ENDPOINT,
  accessKeyId: process.env.BUCKETEER_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.BUCKETEER_AWS_SECRET_ACCESS_KEY,
  region: process.env.BUCKETEER_REGION, //"us-east-1",

});

export default s3Client;
