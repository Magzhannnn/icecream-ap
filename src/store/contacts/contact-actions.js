export const ADD_CONTACT = "ADD_CONTACT";

export const addContact = (email) => ({
  type: ADD_CONTACT,
  email,
});
