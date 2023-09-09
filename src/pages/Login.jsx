import { useRef } from "react";
import styled from "styled-components";
import { mobile } from "../utils/responsive.js";
import { useDispatch, useSelector } from "react-redux";
import { loginApi } from "../api/auth.js";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://img.freepik.com/premium-photo/3d-rendering-shopping-cart-laptop_172660-170.jpg?w=1380")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;s
`;

const Wapper =styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Links = styled.span`
  margin: 5px 0px;
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const email = useRef();
  const password = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = async (e) => {
    e.preventDefault();
    const newUser = { 
      email: email.current.value, 
      password: password.current.value 
    };
    loginApi(newUser, dispatch, navigate);
    toast.success("Đặng nhập thành công.")
  }
  return (
    <Container>
      <div className="sm:w-[40%] w-[60%] p-[25px] bg-white">
        <Title>Đăng Nhập</Title>
        <Form>
          <Input
            placeholder="Email"
            type="email"
            required
            className="loginInput"
            ref={email}
          />
          <Input ref={password} placeholder="password" type="password" />
          <Button onClick={handleClick} disabled={isFetching}>
            Đăng nhập
          </Button>
          {error && <Error>Something went wrong...</Error>}
          <Links>Bạn chưa có tài khoản vui lòng đăng kí</Links>
          <Links>
            <Link className="text-blue-700" to={`/register`}>Tạo tài khoản</Link>
          </Links>
          <Links>
            Bạn muốn trở về {" "}
            <Link className="text-blue-700" to={`/`}>trang chủ</Link></Links>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
