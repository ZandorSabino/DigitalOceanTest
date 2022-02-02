import * as redis from 'redis'
import * as kue from 'kue'
import dotenv from "dotenv";


dotenv.config();

const { REDIS_URL } = process.env;

// 'rediss://default:3tjfwxeHJGLgEEUt@db-redis-tor1-57664-do-user-10735511-0.b.db.ondigitalocean.com:25061'
export const linkedinQueue = kue.createQueue({
    Prefix: 'linkedin', 
    redis: {createClientFactory: () => redis.createClient( process.env.REDIS_URL, 
        {tls: true}),
    },
});