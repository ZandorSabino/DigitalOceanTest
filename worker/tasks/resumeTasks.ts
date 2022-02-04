import { Job } from "bullmq";

//import resumeParser from "@hrcrm/resume-parser";


const resumeParser = async (signedUrl: string) => {
  // const parser = new ResumeParser();
  console.log("Start resume processing");

  return { cv: { data: "sample" } };
};

export async function resumeData(job: Job) {
  const data = await resumeParser("profile-url");

  return `Resume app function return ${JSON.stringify(data)} ${job.data}`;
}
