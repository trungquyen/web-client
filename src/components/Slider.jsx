import { sliderItems } from "../utils/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation ,Autoplay} from "swiper/modules";

const Sliders = () => {
  return (
    <div className="mt-5 w-full 2xl:h-[80vh] h-[50vh] flex relative overflow-hidden">
      <Swiper
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper "
      >
        {sliderItems.map((p) => (
          <>
            <SwiperSlide key={p.img}>
              <div className="relative">
                <img
                  src={p.img}
                  className="z-20 md:h-[50vh] lg:h-[40vh] 2xl:h-[80vh] h-[50vh] w-full object-cover"
                />
                <p className="text-white 2xl:left-1/2 md:top-32 absolute top-20 left-1/3 text-2xl font-bold">
                  {p.title}
                </p>
                <p className="text-white 2xl:left-1/2 md:top-48 absolute top-32 text-xl left-1/3">
                  {p.desc}
                </p>
                <p className="text-black 2xl:left-1/2 md:top-64 bg-white px-3 py-2 cursor-pointer rounded-lg absolute top-60 text-xl left-1/3">
                  <button>SHOP NOW</button>
                </p>
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default Sliders;
