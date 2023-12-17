import { WrapperBlock } from '@/layouts/WrapperBlock';
import styles from './index.module.scss';
import { Title } from '../Title';
import { Description } from '../Description';

const B2BSector = () => {
  return (
    <section className={styles.wrapper}>
      <WrapperBlock>
        <Title title='Прозрачность и&nbsp;коллегиальность<br />в&nbsp;B2B-секторе' />
        <div className={styles.cols}>
          <Description text='В&nbsp;нестабильных экономических условиях растет роль долгосрочных отношений как с&nbsp;покупателями, так&nbsp;и&nbsp;с&nbsp;партнерами. Некоторые компании сегмента B2B&nbsp;отметили, что их&nbsp;взаимоотношения с&nbsp;партнерами на&nbsp;данном этапе можно описать как&nbsp;Joint business planning, когда строится совместный бизнес, а&nbsp;не&nbsp;отношения по&nbsp;принципу &laquo;производитель&nbsp;&mdash; покупатель&raquo;. Кроме&nbsp;того, растет спрос на&nbsp;взаимоотношения в&nbsp;проекте &laquo;команда&nbsp;&mdash; команда&raquo; и&nbsp;инструменты, позволяющие его реализовать.' />
          <Description text='B2B-компании&nbsp;становятся более открытыми. Некоторые раскрывают рецептуру продукта с&nbsp;целью замещения какого-либо материала из&nbsp;состава, готовы сотрудничать с&nbsp;лабораториями, импортозамещать продукцию в&nbsp;изделии и&nbsp;сырье. В&nbsp;свою очередь, продавцы согласны помогать в&nbsp;импортозамещении и&nbsp;поддерживать своих&nbsp;клиентов.' />
        </div>
      </WrapperBlock>
    </section>
  );
};

export { B2BSector };
