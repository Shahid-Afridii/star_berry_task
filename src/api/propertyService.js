import axios from "axios";

const API_URL = "https://mira-strapi-dev.q.starberry.com/api/properties/?_limit=50";

export const fetchProperties = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching properties:", error);
    return [];
  }
};
