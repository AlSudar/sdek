import Image from 'next/image';
import styles from './index.module.scss';

const Footer = ({ width }) => {
  const isMobile = width <= 680;

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_wrapper}>
        <div className={styles.footer_content}>
          <div className={styles.footer_content_creators}>
            <div className={styles.footer_content_creators_name}>
              Отдел специальных и&nbsp;нативных проектов <br /> Директор
              по&nbsp;спецпроектам: <b>Виктория Чернышкина,</b>
              <br /> руководитель отдела продаж рекламы: <b>Юлия Чижикова,</b>
              <br /> дизайн и&nbsp;разработка сайта: <b>Екатерина Нестерова</b>
            </div>
            <div className={styles.footer_content_creators_mark}>!</div>
            {isMobile ? (
              <div className={styles.footer_content_creators_title}>
                Над проектом работали:
              </div>
            ) : (
              <div className={styles.footer_content_creators_title}>
                Над проектом работали
              </div>
            )}
          </div>
          <div className={styles.footer_content_links}>
            <div className={styles.footer_content_links_email}>
              По вопросам сотрудничества:
              <a href='mailto:special@vedomosti.ru'>special@vedomosti.ru</a>
            </div>
            <div className={styles.footer_content_links_social}>
              <a href='#'>
                <Image
                  className={styles.footer_content_links_social_logo}
                  src='/vk.svg'
                  width={40}
                  height={40}
                  alt='логотип VK'
                />
              </a>
              <a href='#'>
                <Image
                  className={styles.footer_content_links_social_logo}
                  src='/telegram.svg'
                  width={40}
                  height={40}
                  alt='логотип Teлеграм'
                />
              </a>
            </div>
          </div>
          <div className={styles.footer_content_advertisement}>
            Реклама / ООО «СДЭК-ГЛОБАЛ» <br />
            Erid:2VfnxvbiVPn
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
