import styles from './index.module.scss';
import localFont from 'next/font/local';
import Image from 'next/image';

const empireTl = localFont({ src: './empire-tl.ttf' });

const TitleSection = ({ text, srcImg }) => (
  <span className='element-animation'>
    <div className={styles.wrapper}>
      <h2
        className={`${styles.title} ${empireTl.className} element-animation`}
        dangerouslySetInnerHTML={{ __html: text }}
      />
      <Image
        className={`${styles.image} element-animation`}
        width={849}
        height={536}
        alt=''
        src={srcImg}
        priority={false}
      />
    </div>
  </span>
);

export { TitleSection };
