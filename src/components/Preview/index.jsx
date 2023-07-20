import Image from 'next/image';
import styles from './index.module.scss';
import { useEffect, useState } from 'react';

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
  });

  return (
    <section className={styles.previewWrapper}>
      <div className={styles.preview}>
        <Image
          className={styles.logo}
          src='/preview/logo-header.svg'
          alt='Логотип компании Дом Chkalov'
          width={112}
          height={38}
          priority
        />
        <Image
          className={styles.previewSlogan}
          src='/preview/preview-slogan.svg'
          alt='Слоган компании Дом Chkalov'
          width={400}
          height={382}
          priority
        />
        {visibleButtonDown && (
          <a
            href='#leed'
            className={styles.buttonDown}
            onClick={() => setVisibleButtonDown(false)}
          ></a>
        )}
      </div>
      <p className={styles.leed} id='leed'>
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
