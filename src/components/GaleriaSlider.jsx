// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  } from "swiper/modules";
  
  import { Swiper, SwiperSlide } from "swiper/react";
  
  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import "swiper/css/scrollbar";
  
  export default () => {
  const images = [
    { src: "gallery/foto-4.jpg", alt: "Foto 14" },
    { src: "gallery/foto-5.jpg", alt: "Foto 16" },
    { src: "gallery/foto-7.jpg", alt: "Foto 17" },
    { src: "gallery/foto-3.jpg", alt: "Foto 15" },
    { src: "gallery/foto-2.jpg", alt: "Foto 13" },
    { src: "gallery/foto.jpg", alt: "Foto 11" },
    { src: "gallery/foto-8.jpg", alt: "Foto 18" },
    { src: "gallery/foto-9.jpg", alt: "Foto 19" },
    { src: "gallery/foto-10.jpg", alt: "Foto 20" },
    { src: "gallery/foto-6.jpg", alt: "Foto 21" },
  ];
  return (
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
    spaceBetween={1}
    slidesPerView={1}
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    breakpoints={{
      640: {
      slidesPerView: 2,
      spaceBetween: 20,
      },
      768: {
      slidesPerView: 3,
      spaceBetween: 20,
      },
      1024: {
      slidesPerView: 4,
      spaceBetween: 40,
      },
    }}
    >
    {images.map((image, index) => (
      <SwiperSlide key={index}>
      <img
        className="h-96 rounded-2xl w-full  my-auto object-cover mx-auto"
        src={image.src}
        alt={image.alt}
      />
      </SwiperSlide>
    ))}
    </Swiper>
  );
  };
