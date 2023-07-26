import Image from 'next/image';
import styles from './index.module.scss';
import { useEffect, useState } from 'react';
// import LocomotiveScroll from 'locomotive-scroll';

const Preview = () => {
  const [visibleButtonDown, setVisibleButtonDown] = useState(true);

  const startScroll = () => {
    if (window.pageYOffset > 1) {
      document.removeEventListener('scroll', startScroll);
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth',
      });
      setVisibleButtonDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', startScroll);
  }, []);

  return (
    <section className={styles.previewWrapper}>
      <div className={styles.preview}>
        <div className={styles.logos}>
          <a href='https://www.domchkalov.com/' target='_blank'>
            <Image
              className={styles.logoChkalov}
              src='/preview/logo-header.svg'
              alt='Логотип компании Дом Chkalov'
              width={112}
              height={38}
              priority
            />
          </a>
          <a href='https://www.vedomosti.ru/' target='_blank'>
            <Image
              className={styles.logoVedomosty}
              src='/preview/logo-vedomosti.svg'
              alt='Логотип Ведомостей'
              width={112}
              height={38}
              priority
            />
          </a>
        </div>
        <Image
          className={`${styles.previewSlogan} element-animation`}
          src='/preview/preview-slogan.svg'
          alt='Слоган компании Дом Chkalov'
          width={400}
          height={382}
          priority
        />
        <a
          style={{ opacity: visibleButtonDown ? '1' : '0' }}
          href='#leed'
          className={styles.buttonDown}
          onClick={() => setVisibleButtonDown(false)}
        >
          <svg
            width='28'
            height='14'
            viewBox='0 0 28 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M26 2L14 12L2 2'
              stroke='white'
              strokeWidth='3'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </a>
      </div>
      <p className={`${styles.leed} element-animation`} id='leed'>
        Небоскреб премиум-класса на&nbsp;Садовом кольце расширяет представление
        о&nbsp;жизни в&nbsp;городе. Он&nbsp;создан для людей, которым важно быть
        в&nbsp;центре событий и&nbsp;управлять своим временем, оставаясь
        в&nbsp;безопасном личном пространстве, в&nbsp;среде своих социальных
        и&nbsp;деловых связей.
      </p>
    </section>
  );
};

export { Preview };
