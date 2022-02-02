import dotenv from "dotenv";
import * as redis from 'redis'
import * as kue from 'kue'


dotenv.config();

const { REDIS_URL } = process.env;

export const cvQueue = kue.createQueue({
  Prefix: 'cv', 
  redis: {createClientFactory: () => redis.createClient(process.env.REDIS_URL, 
      {tls: true}),
  },
});
