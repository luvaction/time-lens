import axios from "axios";

const BASE_URL = "172.17.57.133:52001"; // 여기에 실제 base URL을 입력하시면 됩니다.

export const getUser = async (userId: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/user/${userId}`);
    return response.data;
  } catch (error) {
    // 에러 처리 코드
    console.error(error);
  }
};

export const getUserList = async (
  page: string,
  ipp: string,
  end_date: string,
  user_id: string,
  password: string,
  searchOption: string
) => {
  try {
    const response = await axios.get(`${BASE_URL}/user/list`, {
      params: {
        page,
        ipp,
        end_date,
        "userInfo[user_id]": user_id,
        "userInfo[password]": password,
        searchOption,
      },
    });

    return response.data;
  } catch (error) {
    // 에러 처리 코드
    console.error(error);
  }
};
