import axios from 'axios';

// This is my Django API base URL
const API_BASE_URL = 'http://localhost:8000/api';

export const getResults = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/eplresults/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching results:', error);
    throw error;
  }
};

export const createResult = async (result) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/eplresults/`, result);
    return response.data;
  } catch (error) {
    console.error('Error creating result:', error);
    throw error;
  }
};
