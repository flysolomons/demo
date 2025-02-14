"use client";
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation, Pagination,EffectCoverflow } from 'swiper/modules';




function Horizons() {


    return (
        <>
         <section className="bg-[#F2F2FF] h-auto pb-36">
           <h2 className="text-[32px] text-center font-bold text-[#212061] mb-4 pt-10">Discover New Horizions</h2>
           <p className="text-center text-gray-600 mb-12 max-w-[800px] mx-auto">
           Embark on extraordinary journeys to breathtaking destinations. From pristine beaches to majestic mountains, 
             let us guide you to your next unforgettable adventure.
            </p>

            {/* Horizion slide show */}

            <Swiper
        effect={'carousel'}
        navigation={true}
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={5}
        loop={true}
        autoplay={true}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="horizionSwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper>

         
            {/* Horizion slide show end */}
            
        </section>
        
        </>
       
    );
}

export default Horizons;