import Image from 'next/image';
import styles from './index.module.scss';

const Header = () => (
  <header className={styles.header}>
    <video className={styles.video} playsInline autoPlay muted loop>
      <source src='/video.mp4' type='video/mp4' />
    </video>
    <div className={styles.header_wrapper}>
      <nav className={styles.logo}>
        <div className={styles.logo_first}>
          <Image
            className={styles.logo_first_image}
            src='/sdek-logo.svg'
            width={158}
            height={24}
            alt='Логотип Сдэк'
          />
        </div>
        <div className={styles.logo_second}>
          <Image
            className={styles.logo_second_image}
            src='/vedomosti-logo.svg'
            width={125}
            height={24}
            alt='Логотип Ведомости'
          />
          <p className={styles.logo_text}>Специальный проект 16+</p>
        </div>
      </nav>
      <div className={styles.header_content}>
        <h1 className={styles.header_title}>
          Маршрут российской логистики: с 1990-х до наших дней
        </h1>
        <p className={styles.header_text}>
          Современный вид логистической отрасли сформировался за последние
          четверть века. Всё это время сфера стремительно меняется и, кажется,
          не планирует сбавлять обороты. Как это было в России — от зарождения
          рынка до сервиса мирового уровня — вспоминаем вместе со СДЭК, одним из
          крупнейших логистических операторов страны.
        </p>
      </div>
    </div>
  </header>
);

export { Header };
