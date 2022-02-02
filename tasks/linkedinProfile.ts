import * as redis from 'redis'
import * as kue from 'kue'
import dotenv from "dotenv";


dotenv.config();

const { REDIS_URL } = process.env;


export const linkedinQueue = kue.createQueue({
    Prefix: 'linkedin', 
    redis: {createClientFactory: () => redis.createClient( process.env.REDIS_URL, 
        {tls: true}),
    },
});