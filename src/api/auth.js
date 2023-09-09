import { baseApi } from ".";
import {
  loginFailed,
  loginStart,
  loginSuccess,
} from "../redux/slices/userSlice";

export const registerApi = async (data) => {
  const res = baseApi.post(`/users/register`, data);

  return res;
};

export const loginApi = async (user, dispatch,navigate) => {
  dispatch(loginStart());

  try {
    const res = await baseApi.post(`/users/login`, user);
    dispatch(loginSuccess(res.data));
    navigate("/");
  } catch (error) {
    console.log(error);
    dispatch(loginFailed());
  }
};
