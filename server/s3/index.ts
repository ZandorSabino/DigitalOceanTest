import aws from "aws-sdk";

const { S3 } = aws;

const s3Client = new S3({
  endpoint: process.env.STORAGE_ENDPOINT,
  accessKeyId: process.env.STORAGE_ACCESS_KEY_ID,
  secretAccessKey: process.env.STORAGE_SECRET_ACCESS_KEY,
  s3ForcePathStyle: true,
  region: null,
});

export default s3Client;
/*
const aws = require("aws-sdk");
const { S3 } = aws;

const s3Client = new S3({
  endpoint: process.env.STORAGE_ENDPOINT,
  accessKeyId: process.env.STORAGE_ACCESS_KEY_ID,
  secretAccessKey: process.env.STORAGE_SECRET_ACCESS_KEY,
  region: null,
});
*/