export const getFileUrl = async (data: { [key: string]: string }) => {
  const resp = await $fetch("/api/getFileUrl", {
    body: data,
    headers: { "Content-Type": "application/json" },
    method: "POST",
  });

  return resp;
};
