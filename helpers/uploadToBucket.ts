export const uploadToBucket = async (data: { [key: string]: string }) => {
  const resp = await $fetch("/api/uploadBucket", {
    body: data,
    headers: { "Content-Type": "application/json" },
    method: "POST",
  });

  return resp;
};
