import styles from './index.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import cn from 'classnames';

const SwiperMobile = ({ content }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (_, className) {
      return `<span class='${styles.count} ${className}'></span>`;
    },
  };

  return (
    <Swiper
      onInit={(swiper) => {
        swiper.slideTo(0);
      }}
      pagination={pagination}
      modules={[Pagination]}
      className={styles.wrapper}
    >
      {content.map((item, id) => {
        return (
          <SwiperSlide key={id} className={styles.itemWrapper}>
            {item.map((item, itemId) => {
              return (
                <div key={itemId} className={styles.item}>
                  <p
                    className={styles.title}
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  <p
                    className={styles.description}
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>
              );
            })}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export { SwiperMobile };
