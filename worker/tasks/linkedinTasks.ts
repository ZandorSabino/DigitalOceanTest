// @hrcrm/linkedin-data

import { Job } from "bullmq";

import linkedinData from "@hrcrm/linkedin-data";

export async function linkedinProfile(job: Job) {
  const data = await linkedinData("profile-url");

  return `Linkedin app function return ${JSON.stringify(data)} ${job.data}`;
}
