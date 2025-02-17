"use client";
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation, Pagination, EffectCreative } from 'swiper/modules';
import Image from 'next/image';




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
        effect={'creative'}
        creativeEffect={{
          prev: {
            translate: ['-100%',-10,-300],
            // rotate: [-45,-45,-45], //([rotate around the X-axis, rotate around the Y-axis, rotate around the Z-axis])
            scale:0.5
          },
          next: {
            translate: ['100%',20,-10],
            // rotate: [45,45,45], //([rotate around the X-axis, rotate around the Y-axis, rotate around the Z-axis])
            scale: 0.5
          },
        }}
        navigation={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        autoplay={true}
        pagination={true}
        modules={[EffectCreative, Pagination, Navigation]}
        className="horizionSwiper"
      >
        <SwiperSlide>
          <Image 
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            alt="Nature 1"
            width={600}
            height={400}
            style={{ borderRadius: 15 + 'px' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image 
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            alt="Nature 2"
            width={600}
            height={400}
            style={{ borderRadius: 15 + 'px' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image 
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            alt="Nature 3"
            width={600}
            height={400}
            style={{ borderRadius: 15 + 'px' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image 
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            alt="Nature 4"
            width={600}
            height={400}
            style={{ borderRadius: 15 + 'px' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image 
            src="https://swiperjs.com/demos/images/nature-5.jpg"
            alt="Nature 5"
            width={600}
            height={400}
            style={{ borderRadius: 15 + 'px' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image 
            src="https://swiperjs.com/demos/images/nature-6.jpg"
            alt="Nature 6"
            width={600}
            height={400}
            style={{ borderRadius: 15 + 'px' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image 
            src="https://swiperjs.com/demos/images/nature-7.jpg"
            alt="Nature 7"
            width={600}
            height={400}
            style={{ borderRadius: 15 + 'px' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image 
            src="https://swiperjs.com/demos/images/nature-8.jpg"
            alt="Nature 8"
            width={600}
            height={400}
            style={{ borderRadius: 15 + 'px' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image 
            src="https://swiperjs.com/demos/images/nature-9.jpg"
            alt="Nature 9"
            width={600}
            height={400}
            style={{ borderRadius: 15 + 'px' }}
          />
        </SwiperSlide>
      </Swiper>

         
            {/* Horizion slide show end */}
            <div className="text-center mt-6">
                    <button className="bg-[#212061] text-white px-6 py-2 w-[192px] h-[48px] rounded-full font-medium hover:bg-opacity-90 transition-colors">
                        Explore
                    </button>
                </div>
        </section>
        
        </>
       
    );
}

export default Horizons;