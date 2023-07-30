// Define your initial state
const initialState = {
    address: 'Default Address',
    email: 'Default Email',
    phone: 'Default Phone',
  };
  
  // Define your reducer
  const contactDetailsReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'UPDATE_CONTACT_DETAILS':
        return { ...state, ...action.payload };
      default:
        return state;
    }
  };
  
  export default contactDetailsReducer;
  