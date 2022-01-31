// import { json } from "stream/consumers";
import Bull from "bull";

import dotenv from "dotenv";

dotenv.config();

const { REDIS_URL } = process.env;

export const linkedinQueue = new Bull("linkedin-profile", REDIS_URL);
