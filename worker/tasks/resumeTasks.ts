import { Job } from "bullmq";

import resumeParser from "@hrcrm/resume-parser";

export async function resumeData(job: Job) {
  const data = await resumeParser("profile-url");

  return `Resume app function return ${JSON.stringify(data)} ${job.data}`;
}
