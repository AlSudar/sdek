import styles from './index.module.scss';

const Icons = () => {
  let href = '';
  if (typeof window !== 'undefined') {
    href = 'https://nota-modus.vedomosti.ru/';
  }

  const shareVK = () => {
    if (window) {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('event', 'click_vk', {
        social_button_footer: 'vk',
      });

      const VK = 'https://vk.com/share.php?url=';
      window.open(VK + href, '_blank').focus();
    }
  };

  const shareTG = () => {
    if (window) {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('event', 'click_vk', {
        social_button_footer: 'vk',
      });

      const TG = 'https://t.me/share/url?url=';
      window.open(TG + href, '_blank').focus();
    }
  };

  return (
    <>
      <button onClick={shareVK} className={styles.icon}>
        <img
          src='/icons/vk.svg'
          alt='Logo VK'
          loading='lazy'
          className={styles.iconVk}
        />
      </button>
      <button onClick={shareTG} className={styles.icon}>
        <img
          src='/icons/tg.svg'
          alt='Logo TG'
          loading='lazy'
          className={styles.iconTg}
        />
      </button>
    </>
  );
};

export { Icons };
