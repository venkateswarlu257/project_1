import axios from "axios";

const API_URL = 'http://localhost:5000'; 

export const loginUser = async (data: any) => {
  try {
    const response = await axios.post(`${API_URL}/login`, data);
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error; 
  }
};

// `${API_URL}/login`

