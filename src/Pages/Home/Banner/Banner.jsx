import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import "./customSwiper.css";
import { Pagination, Autoplay } from "swiper/modules";
import BannerContent from "../../../Component/BannerContent";
import B_1 from "../../../assets/banner/b-1.jpg";
import B_2 from "../../../assets/banner/b-2.jpg";
import B_3 from "../../../assets/banner/b-3.jpg";
import B_4 from "../../../assets/banner/b-4.jpg";

const Banner = () => {
  return (
    <section className="my-10 rounded-xl shadow-lg py-6 px-10">
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <BannerContent
            img={B_1}
            title={"Master Your Risk, Grow Your Account"}
            subTitle={
              "Learn powerful money management techniques that protect your capital and fuel long-term growth in any market condition."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerContent
            img={B_2}
            title={"Trade Smarter, Not Harder"}
            subTitle={"Discover tools and strategies to optimize every trade with precision, discipline, and smart capital allocation."}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerContent
            img={B_3}
            title={"Trade the Plan, Trust the Process"}
            subTitle={"Even the best trading plan fails without proper risk management — learn to balance reward and risk like a pro."}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerContent
            img={B_4}
            title={"Consistency is the Real Profit"}
            subTitle={"Build habits that create sustainable success. Focus on disciplined risk control for consistent returns over time."}
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
