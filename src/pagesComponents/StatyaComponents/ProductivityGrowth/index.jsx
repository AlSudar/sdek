import { DescriptionComment } from "../../../components/DescriptionComment/index";
import { SectionTitle } from "../../../components/SectionTitle/index";
import { SectionDescription } from "../../../components/SectionDescription/index";
import useWindowDimensions from "../../../utils";
import styles from "./index.module.scss";

const ProductivityGrowth = () => {
  const { width } = useWindowDimensions();
  return (
    <>
      {width && width > 1024 && (
        <DescriptionComment
          className={styles.descriptionComment}
          title="250-350 грузов в час"
          text="сортирует Один человек"
        />
      )}
      <div>
        <SectionTitle className={styles.title} text="Рост производительности" />
        <SectionDescription
          className={styles.desc}
          text="Роботам на&nbsp;складе можно доверить практически любую функцию: отсортировать груз по&nbsp;направлениям, переместить коробки или палеты между операционными зонами склада, сформировать микс-палету. При этом каждый робот сокращает операционные расходы на&nbsp;обработку груза как в&nbsp;конкретной зоне, так склада в&nbsp;целом."
        />
        {width && width < 1024 && (
          <DescriptionComment
            className={styles.descriptionComment}
            title="250-350 грузов в час"
            text="сортирует Один человек"
          />
        )}
        <SectionDescription
          className={styles.secondDesc}
          text="Роботы помогают реализовать принцип &laquo;товар к&nbsp;человеку&raquo;, когда сотрудник склада буквально работает на&nbsp;одном месте, а&nbsp;роботы доставляют ему коробки с&nbsp;нужными грузами. Благодаря этому сотрудник может выполнить в&nbsp;3&ndash;5 раз больше операций. <br /><br />
Задачи по&nbsp;сортировки на&nbsp;складе&nbsp;&mdash; в&nbsp;числе самых трудоемких. Один человек обычно сортирует не&nbsp;больше 250&ndash;350 грузов в&nbsp;час. Для сортировки, например, 10&nbsp;тыс. грузов в&nbsp;час надо около 30&ndash;40&nbsp;человек. Чтобы сократить количество персонала и&nbsp;повысить его производительность труда, внедряют роботов.  <br /><br />
Так, например, небольшие роботы-доставщики в&nbsp;службе экспресс-доставки Почты России сканируют посылки и&nbsp;отвозят их&nbsp;по&nbsp;направлениям отправки. Человеку больше не&nbsp;надо ходить от&nbsp;ячейки к&nbsp;ячейке, чтобы отсортировать корреспонденцию. За&nbsp;счет этого при обеспечении той&nbsp;же самой производительности отбора количество персонала можно сократить в&nbsp;3&ndash;4&nbsp;раза. <br /><br />
Для работы с&nbsp;грузом на&nbsp;многоярусных стеллажах используют автономные вилочные погрузчики и&nbsp;роботов для обслуживания полочных стеллажей (также называют CTU-роботами, от&nbsp;англ. carton transfer unit). Если погрузчики могут перевозить палеты весом до&nbsp;3&nbsp;тыс.&nbsp;кг, то&nbsp;CTU-роботы умеют размещать коробки в&nbsp;нужные ячейки весом до&nbsp;50&nbsp;кг. За&nbsp;один раз робот способен перевезти семь коробов и&nbsp;поднять их&nbsp;на&nbsp;высоту до&nbsp;12&nbsp;м. В&nbsp;результате эффективность сортировки и&nbsp;комплектования может увеличиться в&nbsp;3&ndash;4&nbsp;раза. <br /><br />
Чтобы провести инвентаризацию товаров в&nbsp;одной зоне, роботу нужно два часа. На&nbsp;аналогичный объем работы сотрудникам может понадобиться до&nbsp;четырех недель."
        />
      </div>
    </>
  );
};

export { ProductivityGrowth };
