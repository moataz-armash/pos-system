import axiosInstance from "../utils/axiosInstance";

export const fetchStoreInfo = async () => {
  try {
    const response = await axiosInstance.get(
      "/88294888-c25e-4b78-b4f8-dfdb6cd4c9b9"
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
