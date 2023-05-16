import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay } from 'swiper';
import styles from './polaroid.module.scss'

function Polaroid() {
	return (
		
							
						<div className={styles.polaroid}>
						<Swiper
						  loop={true}
							modules={[Autoplay]}
							autoplay={{delay:1000}}
							spaceBetween={50}
							slidesPerView={1}
							direction={'vertical'}
							
    				>
      <SwiperSlide><Image src="/corona.png" alt="corona" width={200} height={100}/></SwiperSlide>
      <SwiperSlide><Image src="/budweiser.png" alt="budweiser"  width={200} height={100}/></SwiperSlide>
      <SwiperSlide><Image src="/heineken.png" alt="heineken"  width={200} height={100}/></SwiperSlide>
      <SwiperSlide><Image src="/hoegaarden.png" alt="hoegaarden"  width={200} height={100}/></SwiperSlide>
    				</Swiper>
							<Image src="/emojiThinking.png" alt="emojiThinking" width={200} height={200}/>
							</div>
	
	)
}

export default Polaroid
