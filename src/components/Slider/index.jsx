import styles from './index.module.scss';
import localFont from 'next/font/local';
import Image from 'next/image';
import { useState } from 'react';

const empireTl = localFont({ src: './empire-tl.ttf' });

const Slider = ({ imagesSrc }) => {
  const [current, setCurrent] = useState(0);
  const length = imagesSrc.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <aside className={`${styles.wrapper}`}>
      <span class={`${styles.count} ${empireTl.className}`}>
        {current + 1} / {imagesSrc.length}
      </span>
      {imagesSrc.map((imageSrc, index) => {
        return (
          <div
            key={index}
            className={`${styles.image} ${
              index === current ? styles.active : ''
            } ${index > current ? styles.disableNext : ''} ${
              index < current ? styles.disablePrev : ''
            }`}
          >
            <Image
              width={1120}
              height={700}
              priority={false}
              src={imageSrc}
              alt=''
            />
          </div>
        );
      })}
      <div className={styles.buttons}>
        {current !== 0 && (
          <button
            className={`${styles.button} ${styles.buttonPrev}`}
            onClick={prevSlide}
          ></button>
        )}
        {current < length - 1 && (
          <button
            className={`${styles.button} ${styles.buttonNext}`}
            onClick={nextSlide}
          ></button>
        )}
      </div>
    </aside>
  );
};

export { Slider };
