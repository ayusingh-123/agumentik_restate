import axios from 'axios';

const BASE_URL = 'http://your-backend-api-url/api/auth';

// Function to handle admin login
export const loginAdmin = async (adminCredentials: { adminId: string; password: string }) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, adminCredentials);
    // The backend should return a token upon successful login, which you can use for authentication.
    return response.data.token;
  } catch (error) {
    throw new Error('Authentication failed. Invalid admin ID or password.');
  }
};
