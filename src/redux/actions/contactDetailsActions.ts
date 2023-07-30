// Define your action types
const UPDATE_CONTACT_DETAILS = 'UPDATE_CONTACT_DETAILS';

// Define your action creators
export const updateContactDetails = (details: any) => ({
  type: UPDATE_CONTACT_DETAILS,
  payload: details,
});
