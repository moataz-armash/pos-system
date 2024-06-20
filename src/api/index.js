import axiosInstance from "../utils/axiosInstance";

export const fetchStoreInfo = async () => {
  try {
    const response = await axiosInstance.get(
      "/7058ccd4-7339-4256-b33d-49cf060be0d6"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching store info:", error);
    throw error;
  }
};

export const fetchProducts = async () => {
  try {
    const response = await axiosInstance.get(
      "/e2a66d55-a1fa-44ca-a550-28f182edd987"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Add more API service functions as needed
