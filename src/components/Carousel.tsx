// Carousel.tsx
import { IonContent } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
// estilos de Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import config from '../Utils/Base_Api';
type Props = {
  images: string[];
};

export default function Carousel({ images }: Props) {
  return (
    <IonContent>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop
        speed={1300}
        
      >
        {images && images.length > 0 ? (
          images.map((url, i) => (
            <SwiperSlide key={i}>
              <img src={config.baseURL.replace("api", "storage/") + url} alt={`banner-${i}`} 
                style={{ width: "100%", height: "150%", objectFit: "cover" }}
              />
              
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <img src="https://via.placeholder.com/800x400" alt="default" />
          </SwiperSlide>
        )}
      </Swiper>
    </IonContent>
  );
}