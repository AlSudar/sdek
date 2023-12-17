import { WrapperBlock } from '@/layouts/WrapperBlock';
import { Title } from '../Title';
import style from './index.module.scss';
import { Description } from '../Description';
import { useEffect, useRef } from 'react';
import cn from 'classnames';

const statistic = [
  {
    procent: '37',
    description:
      '37% респондентов отмечают, что&nbsp;отслеживают весь&nbsp;клиентский путь.',
    widthType: 'first',
  },
  {
    procent: '34',
    description:
      '34% компаний в&nbsp;сегменте B2B&nbsp;перестроили клиентский путь в&nbsp;связи с&nbsp;изменившимися экономическими условиями.',
    widthType: 'second',
  },
  {
    procent: '10',
    description:
      '10% опрошенных B2B-компаний внедрили методику омниканальной коммуникации.',
    widthType: 'third',
  },
];

const StatisticItem = ({ item }) => {
  return (
    <div className={cn(style.statisticWrapper, style[item.widthType])}>
      <div className={cn(style.statistic)}>
        <span className={style.procent}>{item.procent}%</span>
      </div>
      <span
        className={style.statisticDesc}
        dangerouslySetInnerHTML={{ __html: item.description }}
      />
    </div>
  );
};

const CJM = () => {
  const refToComponent = useRef();

  useEffect(() => {
    async function animate() {
      if (refToComponent.current) {
        const sr = (await import('scrollreveal')).default;
        sr().reveal(refToComponent.current, {
          distance: '100px', // Distance from which the element will appear
          origin: 'left', // Origin of the reveal ('top' to appear from the top)
          duration: 500, // Animation duration in milliseconds
          easing: 'linear',
          delay: 100,
        });
      }
    }
    animate();
  }, []);

  return (
    <section className={style.wrapper}>
      <WrapperBlock>
        <Title title='Инфлюенс-маркетинг <br /> и&nbsp;CJM-карты*' />
        <div className={style.cols}>
          <Description
            text='Постпандемийный бум e-commerce*, обилие новых площадок и&nbsp;высокая конкуренция мотивируют компании совершенствовать коммуникацию с&nbsp;клиентом и&nbsp;обращаться к&nbsp;нестандартным методам продвижения. Компании в&nbsp;сегменте B2B отмечают усиление роли социальных медиа, они используют их&nbsp;для продвижения своих товаров и&nbsp;услуг, а&nbsp;также для сбора обратной связи от&nbsp;клиентов. <br /><br />
            Меняется отношение к&nbsp;инфлюенс-маркетингу: если раньше он&nbsp;использовался в&nbsp;основном среди компаний-производителей потребительских товаров, то&nbsp;сейчас и&nbsp;промышленные компании начали работать с&nbsp;блогерами для продвижения бренда и&nbsp;своих продуктов.'
          />
          <Description text='Еще один тренд в маркетинге, общий для компаний из разных индустрий — совершенствование подходов к анализу пользовательского пути (CJM-карт*): с помощью данных CRM-систем* и аналитики, которая помогает комплексно отслеживать путь клиента с момента его первого соприкосновения с брендом до совершения покупки товара или услуги, сохраняя его лояльность и увеличивая средний чек. Продвинутые пользователи CRM* в B2C-сегменте сокращают клиентский путь с помощью предзаполнения форм заказа данными, собранными о клиенте на его «пути» (например, контактами, полученными из профиля в соцсети).' />
        </div>
        <div ref={refToComponent} className={style.statistics}>
          {statistic.map((item, id) => (
            <StatisticItem key={id} item={item} />
          ))}
        </div>
      </WrapperBlock>
    </section>
  );
};

export { CJM };
