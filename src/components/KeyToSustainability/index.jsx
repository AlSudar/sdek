import { WrapperBlock } from '@/layouts/WrapperBlock';
import { Title } from '../Title';
import styles from './index.module.scss';
import { Description } from '../Description';
import cn from 'classnames';

const diagrams = [
  { type: 'first', procent: '56' },
  { type: 'second', procent: '58' },
  { type: 'third', procent: '75' },
];

const KeyToSustainability = () => {
  return (
    <section className={styles.wrapper}>
      <WrapperBlock>
        <Title title='Гибкость — ключ к&nbsp;устойчивости' />
        <div className={styles.cols}>
          <Description text='Исследование показало, что&nbsp;для&nbsp;многих компаний решения, которые дают возможность быть&nbsp;гибкими в&nbsp;текущих условиях, лежат в&nbsp;области внедрения технологий. Но&nbsp;это&nbsp;только&nbsp;первая половина успеха для&nbsp;бизнеса, вторая&nbsp;&mdash; способность обрабатывать и&nbsp;реагировать на&nbsp;обратную связь от&nbsp;рынка, клиента и&nbsp;окружающей среды, а&nbsp;также решительность для&nbsp;быстрого принятия новых правил игры. Все&nbsp;это&nbsp;вместе&nbsp;становится главным конкурентным преимуществом на&nbsp;современном быстром и&nbsp;клиентоцентричном рынке.' />
          <div className={styles.diagramsWrapper}>
            <div className={styles.diagrams}>
              {diagrams.map((item, id) => {
                const currentClass =
                  item.type === 'first'
                    ? 'animation-without-transform-first'
                    : item.type === 'second'
                    ? 'animation-without-transform-second'
                    : 'animation-without-transform-third';
                return (
                  <div
                    className={cn(
                      styles.diagram,
                      styles[item.type],
                      currentClass
                    )}
                    key={id}
                  >
                    <span className={cn(styles.diagramText)}>
                      {item.procent}%
                    </span>
                  </div>
                );
              })}
            </div>
            <div className={styles.diagramsDescriptions}>
              <p className={styles.diagramsDescriptionsItem}>
                У&nbsp;56% компаний сегмента&nbsp;B2C, внедривших методику
                персональных предложений, увеличилась частота покупки.
              </p>
              <p className={styles.diagramsDescriptionsItem}>
                У&nbsp;58%&nbsp;вырос средний чек покупки клиентов.
              </p>
              <p className={styles.diagramsDescriptionsItem}>
                У&nbsp;75% компаний, не&nbsp;внедривших новые инструменты
                взаимодействия с&nbsp;клиентами, средний чек покупки снизился.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <a href='' className={styles.linkPrimary}>
            Скачать полную версию исследования
          </a>
          <a href='/pdf/politica_pdn_2.pdf' className={styles.linkOutline}>
            Политика конфиденциальности
          </a>
        </div>
      </WrapperBlock>
    </section>
  );
};

export { KeyToSustainability };
