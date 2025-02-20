import styles from './index.module.scss';

const MOCK = [
  { title: '1990-e:', desc: 'время возможностей' },
  { title: '2000-e:', desc: 'торговля выходит<br /> в&nbsp;онлайн' },
  {
    title: '2010-e:',
    desc: 'перестройка логистической<br />инфраструктуры',
  },
  { title: '2020-е:', desc: 'маркетплейсы и&nbsp;открытые платформы' },
  {
    title: 'Взгляд в будущее:',
    desc: 'что изменится<br />в логистике завтра',
  },
];

const TimeLineMobile = ({ timeLineMobileRef }) => {
  return (
    <div className={styles.header} ref={timeLineMobileRef}>
      <ul className={styles.list} id='time-line-mobile'>
        {MOCK.map((item, id) => {
          return (
            <li key={id} className={styles.listItem}>
              <p
                dangerouslySetInnerHTML={{ __html: item.title }}
                className={styles.listItemTitle}
              />
              <span
                className={styles.listItemLine}
                id='time-line-mobile-item'
              />
              <span className={styles.listItemLineDisable} />
              <p
                dangerouslySetInnerHTML={{ __html: item.desc }}
                className={styles.listItemText}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { TimeLineMobile };
