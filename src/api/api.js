import axios from "axios";

export const generateAxiosInstance = () => {
  const instanceParameters = {
    baseURL: "https://workintech-fe-ecommerce.onrender.com",
  };

  const token = localStorage.getItem("token");
  if (token) {
    instanceParameters.headers = {
      Authorization: token,
    };
  }

  return axios.create(instanceParameters);
};

export let API = generateAxiosInstance();

export const renewAPI = () => {
  API = generateAxiosInstance();
};
