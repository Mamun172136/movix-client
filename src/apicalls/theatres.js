import { axiosInstance } from ".";

// Add a new theatre
export const AddTheatre = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "http://localhost:5000/api/theatres/add-theatre",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

// get all theatres
export const GetAllTheatres = async () => {
  try {
    const response = await axiosInstance.get(
      "http://localhost:5000/api/theatres/get-all-theatres"
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

// get all theatres by owner
export const GetAllTheatresByOwner = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "http://localhost:5000/api/theatres/get-all-theatres-by-owner",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

// update theatre
export const UpdateTheatre = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "http://localhost:5000/api/theatres/update-theatre",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

// delete theatre
export const DeleteTheatre = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "http://localhost:5000/api/theatres/delete-theatre",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

// add show
export const AddShow = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/theatres/add-show",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};
