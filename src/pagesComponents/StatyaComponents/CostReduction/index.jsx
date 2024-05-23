import { DescriptionComment } from "../../../components/DescriptionComment/index";
import { SectionTitle } from "../../../components/SectionTitle/index";
import { SectionDescription } from "../../../components/SectionDescription/index";
import useWindowDimensions from "../../../utils/index";

import styles from "./index.module.scss";
import Image from "next/image";

const LeftContent = () => {
  return (
    <div className={styles.leftCol}>
      <Image
        width={411}
        height={605}
        src={"/statya/сostReduction/image.png"}
        className={styles.leftIcon}
        alt=""
      />
      <DescriptionComment
        title=" -24 &#176;C"
        text="температура работы Автономной системы без необходимости отпусков или больничных."
      />
    </div>
  );
};

const CostReduction = () => {
  const { width } = useWindowDimensions();
  return (
    <>
      {width && width > 1024 && <LeftContent />}
      <div className={styles.rightCol}>
        <SectionTitle className={styles.title} text="Сокращение расходов" />
        <Image
          width={736}
          height={404}
          src={"/statya/сostReduction/background.png"}
          className={styles.image}
          alt=""
        />
        {width && width < 1024 && <LeftContent />}
        <SectionDescription
          className={styles.desc}
          text="Робот&nbsp;&mdash; универсальный исполнитель, который может трудиться круглосуточно и&nbsp;заменять 4&ndash;8&nbsp;человек, работающих посменно. Благодаря этому роботизация помогает решать проблему кадрового голода. При этом автономная система не&nbsp;будет против возить коробки по&nbsp;складу глубокой заморозки <a href='https://www.youtube.com/watch?v=Tbx6Bf-PvcI' target='_blank'>при температуре &minus;24 &#176;C</a>, не&nbsp;попросит отпуск или больничный. <br /><br />
		  За&nbsp;последние восемь лет улучшилось качество батарей и&nbsp;точность позиционирования роботов. Устройства стали точнее и&nbsp;дольше работать, а&nbsp;время подзарядки сократилось в&nbsp;разы. Все это значительно повысило эффективность роботов: в&nbsp;зависимости от&nbsp;модели время автономной работы составляет 6&ndash;16&nbsp;часов, а&nbsp;для подзарядки требуется около двух часов. Когда робот отправляется на&nbsp;станцию, его задачи перераспределяются между другими устройствами.  <br /><br />
		  К&nbsp;тому&nbsp;же возможности автоматизации постоянно расширяются: уже сейчас есть решения, которые умеют поштучно сортировать товар в&nbsp;разные контейнеры прямо на&nbsp;стеллажах.  <br /><br />
		  Роботы помогают экономить не&nbsp;только на&nbsp;зарплатах линейных сотрудников, которые за&nbsp;2023 год выросли <a href='https://spb.vedomosti.ru/press_releases/2023/12/07/zarplati-lineinih-sotrudnikov-skladov-virosli-na-85?ysclid=lu8cfwm9g0321120901' target='_blank'>на&nbsp;85%</a>, но&nbsp;и&nbsp;на&nbsp;скрытых издержках. Ведь <a href='https://indpages.ru/logistics/dyefeetseet-skladskogo-pyersonala/?ysclid=lu8cvkmpda575298576' target='_blank'>растет</a> дефицит грузчиков, комплектовщиков и&nbsp;кладовщиков в&nbsp;ритейле, электронной торговле и&nbsp;промышленности. Поиски персонала занимают <a href='https://logirus.ru/news/warehouses/poiski_operatsionnogo_personala_na_sklad_zatyagivayutsya_minimum_na_2_mesyatsa.html' target='_blank'>от&nbsp;двух месяцев</a>, что выливается в&nbsp;простои, перебои в&nbsp;поставках заказов и&nbsp;финансовые издержки. С&nbsp;помощью роботов можно вовремя комплектовать заказы, что особенно важно в&nbsp;пик продаж. При этом количество ошибок из-за человеческого фактора сводится к&nbsp;минимуму, а&nbsp;это сокращает и&nbsp;потери для бизнеса."
        />
      </div>
    </>
  );
};

export { CostReduction };
