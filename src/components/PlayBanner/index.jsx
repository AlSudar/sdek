import { gameLink } from '@/data/links';
import styles from './index.module.scss';
import cn from 'classnames';
import './index.module.scss';
import { useEffect, useState } from 'react';

const PlayBanner = () => {
  const [bannerIsVisible, setBannerIsVisible] = useState(false);
  function onEntry(entry) {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        setBannerIsVisible(true);
        change.target.classList.add('playBannerAnimationStart');
      }
    });
  }

  useEffect(() => {
    let options = { threshold: [0.5] };
    let observer = new IntersectionObserver(onEntry, options);
    let element = document.querySelector('.playBannerAnimation');
    observer.observe(element);

    return () => {};
  }, []);

  return (
    <div
      className={cn(
        'playBannerAnimation',
        styles.wrapper,
        bannerIsVisible && styles.wrapperActive
      )}
    >
      <div className={styles.btn}></div>
      <div className={styles.btnBottom}></div>
      <p className={styles.desc}>
        Сможете избежать ошибок в&nbsp;своем бизнесе? Попробуйте в&nbsp;игре
      </p>
      <a
        className={styles.link}
        href='https://crpa.ru/game?utm_source=vedomosti&utm_medium=landing&utm_campaign=page '
      >
        Играть
      </a>
    </div>
  );
};

export { PlayBanner };
