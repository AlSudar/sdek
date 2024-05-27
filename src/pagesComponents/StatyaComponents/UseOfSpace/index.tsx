import { DescriptionComment } from "../../../components/DescriptionComment/index";
import { SectionTitle } from "../../../components/SectionTitle/index";
import { SectionDescription } from "../../../components/SectionDescription/index";
import useWindowDimensions from "../../../utils/index";

import styles from "./index.module.scss";
import Image from "next/image";

const UseOfSpace = () => {
  const { width } = useWindowDimensions();
  return (
    <>
      <DescriptionComment
        className={styles.descriptionComment}
        title="1,5—2 года"
        text="Средний срок возврата инвестиций в&nbsp;роботизированные решения"
      />
      <div>
        <SectionTitle
          className={styles.title}
          text="Эффективное использование площадей"
        />
        <Image
          width={736}
          height={404}
          src={
            width && width < 480
              ? "/statya/useOfSpace/image-mini.png"
              : "/statya/useOfSpace/image.png"
          }
          className={styles.image}
          alt=""
        />
        <SectionDescription
          className={styles.desc}
          text="Роботы помогают эффективно использовать площадь склада. Это становится актуально в&nbsp;текущих условиях: стоимость готового объекта за&nbsp;2023 год выросла <a href='https://www.kommersant.ru/doc/6097230?ysclid=lu8bi8q6l622551110' target='_blank'>на&nbsp;67%</a>, а&nbsp;строительство квадратного метра&nbsp;&mdash; <a href='https://spb.vedomosti.ru/press_releases/2024/02/16/stoimost-stroitelstva-obektov-skladskoi-nedvizhimosti-dostigla-rekordnih-znachenii?ysclid=lu8acqr5qp818378893' target='_blank'>на&nbsp;19%</a>. При этом наблюдается <a href='https://www.retail.ru/articles/antirekordy-skladskoy-nedvizhimosti-maksimalnye-stavki-minimalnaya-vakantnost/?ysclid=lu8a2gfguy457476235' target='_blank'>дефицит помещений</a>, который заставляет расти цены на&nbsp;аренду складской недвижимости. Арендные ставки также на&nbsp;протяжении последних лет только увеличиваются и&nbsp;обратной тенденции не&nbsp;ожидается. <br /><br />
		  Применяя автоматизированные или роботизированные решения, можно оптимальнее использовать объем склада. Автономные краны-штабелеры способны поднимать груз на&nbsp;высоту в&nbsp;45&nbsp;м. Это в&nbsp;три с&nbsp;лишним раза выше, чем доступно погрузчикам. В&nbsp;результате получится сэкономить на&nbsp;строительстве. Учитывая, что квадратный метр в&nbsp;среднем <a href='https://spb.vedomosti.ru/press_releases/2024/02/16/stoimost-stroitelstva-obektov-skladskoi-nedvizhimosti-dostigla-rekordnih-znachenii?ysclid=lu8acqr5qp818378893' target='_blank'>обходится</a> в&nbsp;55&ndash;65&nbsp;тыс. рублей, выгода может составить сотни миллионов рублей. <br /><br />
		  Благодаря компактным размерам роботы помогают автоматизировать небольшие по&nbsp;площади зоны. Так, Comitas <a href='https://www.comitas.ru/projects/robotizirovannaya-stantsiya-vydachi-tovarov/?ysclid=lu29n8y6wq488600297' target='_blank'>оборудовал</a> пункт выдачи в&nbsp;&laquo;Едином центре поддержки участников СВО и&nbsp;членов их&nbsp;семей&raquo; автономными мобильными роботами (ARM). Зона выдачи в&nbsp;центре отличается малой площадью, поэтому поставить конвейер нельзя. Маневренность ARM помогла эффективно использовать зону и&nbsp;сократить расходы на&nbsp;персонале. <br /><br />
		  Складские роботы за&nbsp;последнее время стали доступнее для бизнеса. Средний срок возврата инвестиций в&nbsp;роботизированные решения составляет 1,5&ndash;2 года при сроке внедрения 7&ndash;8&nbsp;месяцев. Достоинство технологии заключается в&nbsp;том, что ее&nbsp;эффективность можно оценить на&nbsp;небольшом складском участке, например в&nbsp;зоне сортировки. В&nbsp;будущем решение легко масштабируется, что позволяет экономить на&nbsp;операционных затратах, оплате сотрудников, более эффективно управлять складом и&nbsp;в&nbsp;перспективе больше зарабатывать."
        />
      </div>
    </>
  );
};

export { UseOfSpace };
