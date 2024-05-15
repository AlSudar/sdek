import styles from "./index.module.scss";
import { SectionTitle } from "../../../components/SectionTitle/index";

const DATA = [
  {
    text: "Нестабильность цепочек поставок импортных продуктов вынуждает поставщиков увеличивать товарные запасы, а&nbsp;это требует больше площадей для хранения.",
  },
  {
    text: "Неравномерно развитая сеть складов и&nbsp;недостаточное количество современных складских комплексов в&nbsp;регионах усложняют процесс хранения и&nbsp;замедляют скорость доставки товаров, что приводит к&nbsp;увеличению спроса на&nbsp;уже существующие и&nbsp;новые склады.",
  },
  {
    text: "Недостаточное финансирование инфраструктурных проектов и&nbsp;ограниченный доступ застройщиков к&nbsp;финансированию замедляют темпы строительства складских помещений, усугубляя их&nbsp;дефицит.",
  },
];

const CausesDeficiency = () => {
  return (
    <>
      <div />
      <div className={styles.wrapper}>
        <SectionTitle text="3&nbsp;причины дефицита" />
        <ul className={styles.list}>
          {DATA.map((item, id) => {
            return (
              <li key={id} className={styles.item}>
                <div className={styles.icon} />
                <p
                  className={styles.text}
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              </li>
            );
          })}

          <li className={styles.itemLast}></li>
        </ul>
      </div>
    </>
  );
};

export { CausesDeficiency };
