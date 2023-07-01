import axios from "axios";

const BASE_URL = "http://172.17.57.133:52001"; // 실제 base URL을 입력하시면 됩니다.

interface LoginPayload {
  user_id: string;
  password: string;
}

export const login = async (payload: LoginPayload) => {
  try {
    const response = await axios.post(`${BASE_URL}/user/login`, payload);
    console.log(response.data);
    console.log(response.status);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      switch (error.response?.status) {
        case 401:
          console.error("Invalid password");
          break;
        case 404:
          console.error("User not found");
          break;
        case 405:
          console.error("Missing parameters");
          break;
        default:
          console.error(error);
          break;
      }
    }
    throw error; // Make sure to always throw an error
  }
};
