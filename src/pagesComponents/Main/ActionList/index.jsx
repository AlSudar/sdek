import Image from "next/image";
import { SectionDescription } from "../../../components/SectionDescription/index";
import styles from "./index.module.scss";

const DATA_MOCK = [
  { text: "Рациональное использование площадей" },
  { text: "Перестройка логистических потоков" },
  { text: "Автоматизация складских операций" },
  { text: "Управление запасами" },
];

const ActionList = () => {
  return (
    <>
      <ul className={styles.list}>
        {DATA_MOCK.map((item, id) => {
          return (
            <li className={styles.listItem} key={id}>
              <span className={styles.listItemTitle}>{(id += 1)}</span>
              <p className={styles.listItemDesc}>{item.text}</p>
            </li>
          );
        })}
      </ul>
      <div className={styles.content}>
        <Image
          className={styles.image}
          src="/main/actionList/image.jpg"
          alt=""
          width={736}
          height={404}
        />
        <SectionDescription
          text="Добиться всего этого можно с&nbsp;помощью современных технологий автоматизации и&nbsp;систем управления складом. Они берут на&nbsp;себя простые рутинные операции, а&nbsp;это позволяет одновременно сократить количество персонала и&nbsp;повысить производительность труда. <br /><br />
Например, использование современных систем и&nbsp;соответствующего программного обеспечения (ПО) позволяет автоматизировать процессы приемки, хранения и&nbsp;отгрузки товаров, а&nbsp;это ускоряет обработку и&nbsp;выполнение заказов и&nbsp;сокращает время на&nbsp;обработку грузов. Также важно внедрить системы мониторинга и&nbsp;учета запасов, чтобы всегда иметь актуальную информацию о&nbsp;наличии товаров на&nbsp;складе."
        />
      </div>
    </>
  );
};

export { ActionList };
