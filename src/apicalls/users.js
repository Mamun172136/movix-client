import { axiosInstance } from ".";

// Register a new user
export const RegisterUser = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "http://localhost:5000/api/users/register",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

// Login a user
export const LoginUser = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "http://localhost:5000/api/users/login",
      payload
    );
    return response.data;
  } catch (error) {
    console.error(error.message);
    return error.response;
  }
};

// Get current user
export const GetCurrentUser = async () => {
  try {
    const response = await axiosInstance.get(
      "http://localhost:5000/api/users/get-current-user"
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
