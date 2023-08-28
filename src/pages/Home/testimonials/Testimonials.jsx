
import CommonTitle from "../../shared/commonTitle/CommonTitle";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { useEffect, useState } from "react";
import { FaQuoteLeft } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';






const Testimonials = () => {
    const [comments,setComments]=useState([])
    useEffect(()=>{
        fetch('comments.json')
        .then(res=>res.json())
        .then(data=>setComments(data))
    },[])

    return (
        <div>
            <CommonTitle subTitle="---What Our Clients Say---" title="TESTIMONIALS"></CommonTitle>
            <Rating
                style={{ maxWidth: 180 }}
                value={4}
                className="mx-auto w-12 h-12 my-14"
                readOnly
            />
            <FaQuoteLeft
                className="mx-auto w-24 h-24"
            ></FaQuoteLeft>
    


    <Swiper
        cssMode={true}
        navigation={true}
        // pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
       {
        comments.map(item=><SwiperSlide className="mx-auto text-center px-14" key={item._id}><p className="font-inter font-normal text-xl pt-11">{item.details}</p>
        <h3 className="font-inter font-medium text-3xl text-[#CD9003] uppercase">{item.name}</h3>
        </SwiperSlide>
        )
       }
      </Swiper>





        </div>
    );
};

export default Testimonials;