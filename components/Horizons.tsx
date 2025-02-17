"use client";
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation, Pagination,EffectCoverflow } from 'swiper/modules';




function Horizons() {


    return (
        <>
         <section className="bg-[#F2F2FF] h-auto py-12">
           <h2 className="text-[30px] text-center font-bold text-[#212061] mb-2">Discover New Horizions</h2>
           <p className="text-center text-gray-600 mb-4 text-sm max-w-[1216px] mx-auto">
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
            <div className="text-center mt-6">
                    <button className="bg-[#212061] text-white px-6 py-2 w-[192px] h-[48px] rounded-full font-medium hover:bg-opacity-90 transition-colors">
                        Join Now
                    </button>
                </div>
        </section>
        
        </>
       
    );
}

export default Horizons;