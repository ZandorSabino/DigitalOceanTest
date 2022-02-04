import dotenv from "dotenv";
import Redis from "ioredis";

import { Queue, RedisOptions } from "bullmq";


dotenv.config();

const { REDIS_URL } = process.env;

const connection = new Redis(process.env.REDIS_URL, <RedisOptions>{
  maxRetriesPerRequest: null,
  enableReadyCheck: false,
});


export const resumeQueue = new Queue("resume-parse", {
  connection: connection,
});


