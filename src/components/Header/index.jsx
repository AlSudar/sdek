import Image from 'next/image';
import styles from './index.module.scss';
import useWindowDimensions from '@/utils';

const Header = ({ headerRef }) => {
  const { width } = useWindowDimensions();

  return (
    <header className={styles.header} ref={headerRef}>
      {width && (
        <video
          poster={
            width < 680
              ? '/header_background_mob.png'
              : '/header-background.png'
          }
          className={styles.video}
          playsInline
          autoPlay
          muted
          loop
        >
          <source src='/video.mp4' type='video/mp4' />
        </video>
      )}
      <div className={styles.header_wrapper}>
        <nav className={styles.logo}>
          <a
            href='https://www.cdek.ru/ru/'
            target='_blank'
            className={styles.logo_first}
          >
            <Image
              className={styles.logo_first_image}
              src='/sdek-logo.svg'
              width={158}
              height={24}
              alt='Логотип Сдэк'
            />
          </a>
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
            Маршрут российской логистики: с&nbsp;1990-х до&nbsp;наших дней
          </h1>
          <p className={styles.header_text}>
            Современный вид логистической отрасли сформировался
            за&nbsp;последние четверть века. Всё это время сфера стремительно
            меняется&nbsp;и, кажется, не&nbsp;планирует сбавлять обороты. Как
            это было в&nbsp;России&nbsp;&mdash; от&nbsp;зарождения рынка
            до&nbsp;сервиса мирового уровня&nbsp;&mdash; вспоминаем вместе
            со&nbsp;СДЭК, одним из&nbsp;крупнейших логистических операторов
            страны.
          </p>
        </div>
      </div>
    </header>
  );
};

export { Header };
