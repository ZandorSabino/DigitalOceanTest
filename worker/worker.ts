import dotenv from "dotenv";
import Redis from "ioredis";

import { Queue, Worker, QueueEvents, Processor, RedisOptions } from "bullmq";

import { linkedinProfile } from "./tasks/linkedinTasks";
import { resumeData } from "./tasks/resumeTasks";

const queueAndFuncs: {
  [key: string]: Function;
} = {
  "linkedin-profile": linkedinProfile,
  "resume-parse": resumeData,
};

const bullMq = async () => {
  dotenv.config();

  console.log(process.env.REDIS_URL);
  const connection = new Redis(process.env.REDIS_URL, <RedisOptions>{
    maxRetriesPerRequest: null,
    enableReadyCheck: false,
  });

  dotenv.config();

  for (const queueName of Object.keys(queueAndFuncs)) {
    const queue = new Queue(queueName, {
      connection: connection,
    });

    const worker = new Worker(queueName, <Processor>queueAndFuncs[queueName], {
      connection,
    });

    const queueEvents = new QueueEvents(queueName, {
      connection: connection,
    });

    queueEvents.on("completed", ({ jobId, returnvalue }) => {
      console.log(`${jobId} has completed and returned ${returnvalue}`);
    });

    queueEvents.on("failed", ({ jobId, failedReason }) => {
      console.log(`${jobId} has failed with reason ${failedReason}`);
    });

    console.log("Set to start queue with the name", queueName);
  }

  console.log("Worker started");
};

bullMq();
