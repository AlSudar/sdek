import Image from 'next/image';
import styles from './index.module.scss';

const HREF = 'https://cdek25.vedomosti.ru';

const Footer = ({ width }) => {
  const isMobile = width <= 680;

  const shareVK = () => {
    if (window) {
      window.dataLayer = window.dataLayer || [];

      const VK = 'https://vk.com/share.php?url=';
      window.open(VK + HREF, '_blank').focus();
    }
  };

  const shareTG = () => {
    if (window) {
      window.dataLayer = window.dataLayer || [];

      const TG = 'https://telegram.me/share/url?url=';
      window.open(TG + HREF, '_blank').focus();
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_wrapper}>
        <div className={styles.footer_content}>
          <div className={styles.footer_content_creators}>
            <div className={styles.footer_content_creators_mark}>!</div>
            <div className={styles.footer_content_creators_name}>
              Отдел специальных и&nbsp;нативных проектов <br /> Директор
              по&nbsp;спецпроектам: <b>Виктория Чернышкина,</b>
              <br /> руководитель отдела продаж рекламы: <b>Юлия Чижикова,</b>
              <br /> дизайн и&nbsp;разработка сайта: <b>Екатерина Нестерова</b>
            </div>
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
              <div onClick={shareVK}>
                <Image
                  loading='lazy'
                  className={styles.footer_content_links_social_logo}
                  src='/vk.svg'
                  width={40}
                  height={40}
                  alt='логотип VK'
                />
              </div>
              <div onClick={shareTG}>
                <Image
                  loading='lazy'
                  className={styles.footer_content_links_social_logo}
                  src='/telegram.svg'
                  width={40}
                  height={40}
                  alt='логотип Teлеграм'
                />
              </div>
            </div>
          </div>
          <div className={styles.footer_content_advertisement}>
            Реклама / ООО «СДЭК-ГЛОБАЛ» <br />
            Erid:2VfnxwHVjHS
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
