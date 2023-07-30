import axios from 'axios';

const BASE_URL = 'http://your-backend-api-url/api/content';

// Function to fetch hero banner content
export const getHeroBannerContent = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/hero-banner`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch hero banner content.');
  }
};

// Function to update hero banner content
export const updateHeroBannerContent = async (content: { title: string; subtitle: string }) => {
  try {
    const response = await axios.put(`${BASE_URL}/hero-banner`, content);
    return response.data;
  } catch (error) {
    throw new Error('Failed to update hero banner content.');
  }
};

// Function to fetch contact details
export const getContactDetails = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/contact-details`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch contact details.');
  }
};

// Function to update contact details
export const updateContactDetails = async (details: { address: string; email: string; phone: string }) => {
  try {
    const response = await axios.put(`${BASE_URL}/contact-details`, details);
    return response.data;
  } catch (error) {
    throw new Error('Failed to update contact details.');
  }
};
