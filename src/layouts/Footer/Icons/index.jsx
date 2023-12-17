import styles from './index.module.scss';

const Icons = () => {
  return (
    <>
      <a href='#' className={styles.icon}>
        <img
          src='/icons/vk.svg'
          alt='Logo VK'
          loading='lazy'
          className={styles.iconVk}
        />
      </a>
      <a href='#' className={styles.icon}>
        <img
          src='/icons/tg.svg'
          alt='Logo TG'
          loading='lazy'
          className={styles.iconTg}
        />
      </a>
    </>
  );
};

export { Icons };
