// @hrcrm/linkedin-data

import { Job } from "bullmq";

// import linkedinData from "@hrcrm/linkedin-data";
/*
const linkedinUrl = async (linkedinUrl: string) => {
  console.log("Start Linkedin Scrapping processing");

  return { profile: { data: "sample" } };
};

export default linkedinUrl;
*/

const linkedinUrl = async (linkedinUrl: string) => {
  console.log("Start Linkedin Scrapping processing");

  return { profile: { data: "sample" } };
};

export async function linkedinProfile(job: Job) {
  const data = await linkedinUrl("profile-url");

  return `Linkedin app function return ${JSON.stringify(data)} ${job.data}`;
}
