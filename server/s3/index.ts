import aws from "aws-sdk";

const { S3 } = aws;

const s3Client = new S3({
  accessKeyId: process.env.BUCKETEER_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.BUCKETEER_AWS_SECRET_ACCESS_KEY,
  region: "us-east-1",
});

export default s3Client;
