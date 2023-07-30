import Image from 'next/image';
import styles from './index.module.scss';

const Footer = () => {
  let href = '';
  //TODO: поменять тут шеринг
  if (typeof window !== 'undefined') {
    href = 'http://domchkalov.vedomosti.ru/';
  }

  const shareVK = () => {
    const VK = 'https://vk.com/share.php?url=';
    window.open(VK + href, '_blank').focus();
  };

  return (
    <footer className={styles.wrapper}>
      <ul className={styles.list}>
        <li>
          Директор по&nbsp;спецпроектам:{' '}
          <span className={styles.colored}>Наталия&nbsp;Ставрогина</span>
        </li>
        <li>
          Менеджер по&nbsp;спецпроектам:{' '}
          <span className={styles.colored}>Анна&nbsp;Андреева</span>
        </li>
        <li>
          Руководитель отдела продаж рекламы{' '}
          <span className={styles.colored}>Юлия&nbsp;Чижикова</span>
        </li>
        <li>
          Разработка:{' '}
          <a className={styles.colored} href='https://ormt.io/' target='_blank'>
            Ornament&nbsp;Media
          </a>
        </li>
      </ul>
      <div className={styles.social}>
        <button className={styles.socialButton} onClick={shareVK}>
          <Image
            className={styles.socialIcon}
            width={40}
            height={40}
            alt='Кнопка шеринга VK'
            src='/footer/vk-icon.svg'
            priority={false}
          />
        </button>
        <p>Реклама, ООО «Эссет менеджмент», Erid: LdtCKRAdi</p>
      </div>
    </footer>
  );
};

export { Footer };
