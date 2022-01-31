
export const fetchContacts = async () => {
  const contacts = await $fetch("/api/contacts");

  return contacts
};
