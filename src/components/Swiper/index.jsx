import styles from './index.module.scss';
import localFont from 'next/font/local';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const empireTl = localFont({ src: './empire-tl.ttf' });

const CustomSwiper = ({ imagesSrc }) => {
  const pagination = {
    clickable: false,
    renderBullet: function (index, className) {
      return `<span class='${styles.count} ${className} ${
        empireTl.className
      }'>${index + 1} / ${imagesSrc.length}</span>`;
    },
  };

  return (
    <aside className={`${styles.wrapper}`}>
      <Swiper
        onInit={(swiper) => {
          swiper.slideTo(0);
        }}
        pagination={pagination}
        modules={[Pagination]}
        className={`mySwiper`}
      >
        {imagesSrc.map((imageSrc, id) => {
          return (
            <SwiperSlide key={id}>
              <Image
                className={`${styles.image}`}
                width={1120}
                height={700}
                priority={false}
                src={imageSrc}
                alt=''
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </aside>
  );
};

export { CustomSwiper };
