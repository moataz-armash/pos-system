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
// de74a70b-59da-4641-b849-f3195dcc9b94
export const fetchProducts = async () => {
  try {
    const response = await axiosInstance.get(
      "/387ef227-7a92-4aae-88af-4497e4741ece"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Add more API service functions as needed
