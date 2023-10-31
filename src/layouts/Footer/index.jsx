import { useWindowDimensions } from '@/utils';
import styles from './index.module.scss';

const Footer = () => {
  const { width } = useWindowDimensions();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.infoBlock}>
          <div className={styles.iconInfo} />
          <p className={styles.infoContent}>
            Директор по спецпроектам: Наталия Ставрогина, <br />
            менеджер по спецпроектам: Анна Андреева, <br />
            руководитель отдела продаж рекламы: Юлия Чижикова
          </p>
          <p className={styles.infoTitle}>Над проектом работали:</p>
        </div>
        <div className={styles.logos}>
          <a href='https://vk.com/crpa_ru' target='_blank'>
            <img
              src='/Footer/logos/vkIcon.svg'
              loading='lazy'
              className={styles.logosVk}
            />
          </a>
          <a href='https://www.youtube.com/@crpa_ru/videos' target='_blank'>
            <img
              src='/Footer/logos/youtubeIcon.svg'
              loading='lazy'
              className={styles.logosYoutube}
            />
          </a>
        </div>
        <div className={styles.develop}>
          <p>Игра «Карты, деньги и три "О"» разработана экспертами ЦРПА</p>
        </div>
        {width <= 520 && (
          <div className={styles.developGroup}>
            <p className={styles.developGroupItem}>
              <span>Директор по спецпроектам</span>
              <br />
              Наталия Ставрогина
            </p>
            <p className={styles.developGroupItem}>
              <span>Менеджер по спецпроектам</span>
              <br />
              Анна Андреева
            </p>
            <p className={styles.developGroupItem}>
              <span>Руководитель отдела продаж рекламы</span>
              <br />
              Юлия Чижикова
            </p>
          </div>
        )}
      </div>
    </footer>
  );
};

export { Footer };
