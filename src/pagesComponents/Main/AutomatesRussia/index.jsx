import { SectionTitle } from "../../../components/SectionTitle/index";
import { SectionSubtitle } from "../../../components/SectionSubtitle/index";
import { SectionDescription } from "../../../components/SectionDescription/index";
import styles from "./index.module.scss";
import Image from "next/image";

const AutomatesRussia = () => {
  return (
    <>
      <Image
        src="/main/automatesRussia/figure.png"
        width={444}
        height={666}
        alt=""
        className={styles.image}
      />
      <div>
        <SectionTitle text="Кто автоматизирует Россию?" />
        <SectionDescription text="О&nbsp;том, как автоматизация складов помогает решать самые острые проблемы логистики и&nbsp;бизнеса в&nbsp;целом, об&nbsp;эффективности и&nbsp;окупаемости таких решений, мы&nbsp;поговорили с&nbsp;основателем и&nbsp;управляющим директором системного интегратора полного цикла в&nbsp;области складской и&nbsp;производственной логистики COMITAS <b>Давитом Манукяном</b>." />
        <SectionSubtitle
          className={styles.subtitle}
          text="Когда появился рынок автоматизации складов и&nbsp;каковы предпосылки его развития?"
        />
        <SectionDescription text="Рынок автоматизации складских и&nbsp;производственных операций зародился в&nbsp;Западной Европе в&nbsp;1970-х. Это произошло в&nbsp;связи с&nbsp;ростом интенсивности производства, увеличением складских площадей и&nbsp;развитием современных технологий автоматизации и&nbsp;роботизации, в&nbsp;качестве замены монотонному ручному труду грузчиков, кладовщиков, сборщиков, фасовщиков и&nbsp;других низкоквалифицированных, но&nbsp;многочисленных работников. Основная цель автоматизации&nbsp;&mdash; уйти от&nbsp;влияния человеческого фактора на&nbsp;рутинные складские процессы. Автоматизация складских операций сокращает расходы на&nbsp;персонал, увеличивает эффективность, качество и&nbsp;скорость операций, существенно снижает постоянные издержки. <br /><br /> Повышая производительность труда и&nbsp;снижая количество ошибок и&nbsp;потерь, автоматизация позволяет сэкономить бюджет, окупить вложенные инвестиции в&nbsp;перспективе нескольких лет. Другие преимущества автоматизированного склада или распределительного центра:" />
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
      </div>
    </>
  );
};

export { AutomatesRussia };
