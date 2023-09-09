import { Badge } from "@mui/material";
import { useState } from "react";
import styles from "../style";
import useFakeUser from "../hooks/useFakeUser";
import { close, menu } from "../assets";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { navLinks } from "../constants";
import { useSelector } from "react-redux";
import {Link, useNavigate} from "react-router-dom"
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { currentUser } = useFakeUser();
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search?&keyword=${query}`);
  };

  const handleLogOut = () => {
    if (window.confirm("Bạn có chắc chắn muốn đăng xuất không ? ")) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
    navigate("/");
  };
  
  return (
    <div className={`${styles.paddingX} ${styles.flexCenter} bg-orange-400`}>
      <div className={`${styles.boxWidth}`}>
        <div className="w-full flex py-6 justify-between items-center navbar">
          <div className="flex flex-1 items-center">
            <Link to={"/"}>
              <div className="text-xl 2xl:text-3xl font-bold">TRUNG QUYEN</div>
            </Link>
          </div>

          <div className="text-center hidden sm:block sm:">
            <div className="flex items-center">
              <form className="bg-white rounded-full" onSubmit={handleSubmit}>
                <input
                  className="w-[350px]  px-3 py-2 outline-none rounded-s-full"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search"
                />
                <Search
                  style={{color: "black", fontSize: 30, cursor: "pointer" }}
                />
              </form>
            </div>
          </div>

          <ul className="list-none sm:flex sm:pl-5 hidden justify-end items-center flex-1">
            {currentUser ? (
              <>
                <li
                  className="font-poppins font-normal cursor-pointer text-[16px] ml-10 text-white"
                >
                  <div onClick={handleLogOut}>
                    <LogoutIcon />
                  </div>
                </li>
                <li
                  className="font-poppins font-normal cursor-pointer text-[16px] ml-10 text-white"
                >
                  <div className="avatar">
                    <img
                      onClick={() => setShow(!show)}
                      className="bg-black relative rounded-full  w-12 h-12"
                      src="https://i.stack.imgur.com/QLyI4.png"
                      alt=""
                    />

                    <div
                      className={`absolute top-18 right-20 w-[250px] ${
                        show ? "hidden" : "block"
                      } shadow-sm shadow-slate-500 right-16 z-50`}
                    >
                      <p className="bg-white text-black px-2 py-1">
                        {currentUser?.username}
                      </p>
                      <p className="bg-white text-black px-2 py-1">
                        {currentUser?.email}
                      </p>
                    </div>
                  </div>
                </li>
              </>
            ):(
              <>
                <li
                  className="font-poppins font-normal cursor-pointer text-[16px] mr-10 text-white"
                >
                  <Link to={`/login`}>Đăng Nhập</Link>
                </li>
                <li
                  className="font-poppins font-normal cursor-pointer text-[16px] mr-0 text-white"
                >
                  <Link to={`/login`}>Đăng Ký</Link>
                </li>
              </>
            )}

            <li
              className="font-poppins font-normal cursor-pointer text-[16px] ml-10 text-white"
            >
              <Link to={`/cart`}>
                <Badge badgeContent={cart?.products?.length} color="primary">
                  <ShoppingCartOutlined />
                </Badge>
              </Link>
            </li>
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
              onClick={() => setToggle((prev) => !prev)}
            />

            <div
              className={`${
                toggle ? "flex" : "hidden"
              } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl siderbar`}
            >
              <ul className="list-none flex flex-col justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-normal cursor-pointer text-[16px]${
                      index === navLinks.length - 1 ? "mr-0" : "mr-10"
                    } text-white`}
                  >
                    <Link to={`/${nav.id}`}>
                      <a href="#">{nav.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
