import { loginApi } from "../../api/auth";
import { loginFailed, loginStart, loginSuccess } from "../slices/userSlice";

export const login = async (user, dispatch) => {
  dispatch(loginStart());

  try {
    const res = await loginApi(user);

    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailed());
  }
};
