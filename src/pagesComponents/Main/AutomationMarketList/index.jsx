import Image from "next/image";
import styles from "./index.module.scss";
import useWindowDimensions from "../../../utils";

const AutomationMarketList = () => {
  const { width } = useWindowDimensions();
  return (
    <>
      <Image
        className={styles.image}
        alt=""
        src={
          width && width > 1024
            ? "/main/automationMarketList/figure.jpg"
            : "/main/automationMarketList/figure-lg.jpg"
        }
        width={504}
        height={428}
      />
      <ul className={styles.list}>
        <li className={styles.listItem}>
          Меньшая площадь застройки&nbsp;и, следовательно, экономия затрат
          на&nbsp;капитальное строительство
        </li>
        <li className={styles.listItem}>
          Минимизация влияния дефицита трудовых ресурсов на&nbsp;деятельность
          предприятия
        </li>
        <li className={styles.listItem}>
          Увеличение точности и&nbsp;скорости выполнения складских операций
        </li>
        <li className={styles.listItem}>Минимизация рисков воровства</li>
        <li className={styles.listItem}>
          Сокращение операционных расходов на&nbsp;обработку товара
        </li>
      </ul>
    </>
  );
};

export { AutomationMarketList };
