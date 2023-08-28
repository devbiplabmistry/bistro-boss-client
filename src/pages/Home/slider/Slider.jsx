
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import CommonTitle from "../../shared/commonTitle/CommonTitle";
import slider1 from "../../../assets/home/slide1.jpg"
import slider2 from "../../../assets/home/slide2.jpg"
import slider3 from "../../../assets/home/slide3.jpg"
import slider4 from "../../../assets/home/slide4.jpg"
import slider5 from "../../../assets/home/slide5.jpg"

const Slider = () => {
    return (
        <>
            <div className="mx-auto text-center">
                <CommonTitle subTitle="---From 11:00am to 10:00pm---" title="ORDER ONLINE"></CommonTitle>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={slider1} alt="" />
                        <h3 className="font-cinzel font-normal text-3xl uppercase -mt-20 text-white">salads</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider2} alt="" />
                        <h3 className="font-cinzel font-normal text-3xl uppercase -mt-20 text-white">soups</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider3} alt="" />
                        <h3 className="font-cinzel font-normal text-3xl uppercase -mt-20 text-white">pizzas</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider4} alt="" />
                        <h3 className="font-cinzel font-normal text-3xl uppercase -mt-20 text-white">desserts</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider5} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider3} alt="" />
                        <h3 className="font-cinzel font-normal text-3xl uppercase -mt-20 text-white">soups</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider2} alt="" />
                        <h3 className="font-cinzel font-normal text-3xl uppercase -mt-20 text-white">pizza</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider5} alt="" />
                        <h3 className="font-cinzel font-normal text-3xl uppercase -mt-20 text-white">salads</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider1} alt="" />
                        <h3 className="font-cinzel font-normal text-3xl uppercase -mt-20 text-white">desserts</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider5} alt="" />
                        <h3 className="font-cinzel font-normal text-3xl uppercase -mt-20 text-white">soups</h3>
                    </SwiperSlide>

                </Swiper>
            </div>
        </>
    );
};

export default Slider;