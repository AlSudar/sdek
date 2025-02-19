import styles from './index.module.scss';

const MOCK = [
  { title: '1990-e:', desc: 'время возможностей' },
  { title: '2000-e:', desc: 'торговля выходит<br /> в&nbsp;онлайн' },
  {
    title: '2010-e:',
    desc: 'перестройка<br />логистической<br />инфраструктуры',
  },
  { title: '2020-е:', desc: 'маркетплейсы<br />и открытые<br />платформы' },
  {
    title: 'Взгляд<br />в будущее:',
    desc: 'что изменится<br />в логистике завтра',
  },
];

const TimeLineMobile = () => {
  return (
    <div className={styles.header}>
      <ul className={styles.list}>
        {MOCK.map((item, id) => {
          return <li key={id}></li>;
        })}
      </ul>
    </div>
  );
};

export { TimeLineMobile };
