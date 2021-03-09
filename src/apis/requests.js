import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://dog.ceo/api/breeds/image",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getRandomDog() {
    return axiosInstance.get("/random");
  }
};

// axiosInstance.get((err, response) => {
//     if (response.data.status === "success") {
//         dogInfo = response.data.message
//     }
// })
