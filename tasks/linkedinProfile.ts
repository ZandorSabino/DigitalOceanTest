import dotenv from "dotenv";
import Redis from "ioredis";

import { Queue, RedisOptions } from "bullmq";

dotenv.config();

console.log(process.env.REDIS_URL);
const connection = new Redis(process.env.REDIS_URL, <RedisOptions>{
  maxRetriesPerRequest: null,
  enableReadyCheck: false,
});

export const linkedinQueue = new Queue("linkedin-profile", {
  connection: connection,
});

export const resumeQueue = new Queue("resume-parse", {
  connection: connection,
});