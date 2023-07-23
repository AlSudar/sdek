import styles from './index.module.scss';
import localFont from 'next/font/local';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const empireTl = localFont({ src: './empire-tl.ttf' });

const Slider = ({ imagesSrc }) => {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    if (window && window.innerWidth) {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  const pagination = {
    clickable: false,
    renderBullet: function (index, className) {
      return `<span class='${styles.count} ${className} ${
        empireTl.className
      }'>${index + 1} / ${imagesSrc.length}</span>`;
    },
  };

  if (windowWidth) {
    return (
      <aside className={`${styles.wrapper}`}>
        {/* <span className={`${styles.count} ${empireTl.className}`}>
          1 / {imagesSrc.length}
        </span> */}
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          width={windowWidth - 48}
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
  } else {
    return <></>;
  }
};

export { Slider };
