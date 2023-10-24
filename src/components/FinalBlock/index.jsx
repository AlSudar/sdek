import Image from 'next/image';
import styles from './index.module.scss';
import { gameLink } from '@/data/links';
import cn from 'classnames';
import TypeIt from 'typeit-react';
import { useState, useEffect } from 'react';

const FinalBlock = () => {
  const [textVisible, setTextVisible] = useState(false);
  function onEntry(entry) {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        setTextVisible(true);
      }
    });
  }

  useEffect(() => {
    let options = { threshold: [0.5] };
    let observer = new IntersectionObserver(onEntry, options);
    let element = document.querySelector('.finalBlockTextAnimation');
    observer.observe(element);

    return () => {};
  }, []);
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>
        {textVisible && (
          <span>Сможете избежать ошибок в&nbsp;собственном бизнесе?</span>
        )}
        {!textVisible && <br />}
      </h2>
      <div className={`${styles.contentWrapper} finalBlockTextAnimation`}>
        <div className={styles.content}>
          <p className={styles.contentItem}>
            Попробовать можно в&nbsp;интерактивном квесте &laquo;Карты, деньги
            и&nbsp;три «О». Игру разработали специалисты &laquo;Центра
            по&nbsp;работе с&nbsp;проблемными активами&raquo;&nbsp;&mdash; одной
            из&nbsp;ведущих российских консалтинговых компаний. Сюжет
            сопровождают видеокомментарии опытных экспертов в&nbsp;области
            предпринимательства и&nbsp;права.
          </p>
          {textVisible && (
            <TypeIt options={{ speed: 40 }} className={styles.contentItem}>
              Квест интересно проходить несколько раз, используя новые знания
              и&nbsp;подбирая варианты действий, которые помогут компании
              не&nbsp;просто остаться на&nbsp;плаву, но&nbsp;и&nbsp;достичь
              настоящего успеха.
            </TypeIt>
          )}
        </div>
        <div className={styles.images}>
          <Image
            alt=''
            width={216}
            height={163}
            src='/FinalBlock/finalBlockMan.png'
            className={cn(styles.image, styles.imageMan)}
          />
          <Image
            alt=''
            width={216}
            height={163}
            src='/FinalBlock/finalBlockWoman.png'
            className={cn(styles.image, styles.imageWoman)}
          />
        </div>
      </div>
      <a className={styles.link} href={gameLink}>
        Играть
      </a>
    </section>
  );
};

export { FinalBlock };
