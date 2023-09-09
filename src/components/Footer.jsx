import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Footer = () => {
  return (
    <>
      <div className="w-full h-full bg-orange-400 mt-8">
        <div
          className="grid sm:grid-cols-2 overflow-hidden xl:grid-cols-4 mx-12
       "
        >
          <div className="  mx-4 my-4">
            <p className="font-bold text-3xl">TRUNG QUYEN</p>
            <div className="flex items-center my-5">
              <div className="bg-white px-4 rounded-full py-4">
                <FmdGoodOutlinedIcon />
              </div>
              <p className="ml-4 text-lg font-semibold">Thanh Tri, Hà Nội</p>
            </div>
            <div className="flex items-center my-5">
              <div className="bg-white px-4 rounded-full py-4">
                <MailIcon />
              </div>
              <p className="ml-4 text-lg font-semibold">vtq2k1@gmail.com</p>
            </div>
            <div className="flex items-center">
              <div className="bg-white px-4 rounded-full py-4">
                <LocalPhoneIcon />
              </div>
              <p className="ml-4 text-lg font-semibold">+84 888888888</p>
            </div>
          </div>

          <div className=" mx-4 my-4">
            <p className="font-bold text-3xl">Solution</p>
            <p className="my-7 text-xl">Marketing</p>
            <p className="my-7 text-xl">Logistics</p>
            <p className="my-7 text-xl">Ecommerce</p>
            <p className="my-7 text-xl">Analytics</p>
          </div>

          <div className=" mx-4 my-4">
            <p className="font-bold text-3xl">Solution</p>
            <p className="my-7 text-xl">Marketing</p>
            <p className="my-7 text-xl">Logistics</p>
            <p className="my-7 text-xl">Ecommerce</p>
            <p className="my-7 text-xl">Analytics</p>
          </div>

          <div className=" mx-4 my-4">
            <p className="font-bold text-3xl">Company</p>
            <p className="my-7 text-xl">Marketing</p>
            <p className="my-7 text-xl">Logistics</p>
            <p className="my-7 text-xl">Ecommerce</p>
            <p className="my-7 text-xl">Analytics</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer