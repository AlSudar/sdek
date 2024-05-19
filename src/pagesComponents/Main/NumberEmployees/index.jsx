import { SectionDescription } from "../../../components/SectionDescription";
import { SectionSubtitle } from "../../../components/SectionSubtitle";
import { DescriptionComment } from "../../../components/DescriptionComment/index";
import styles from "./index.module.scss";
import Image from "next/image";

const NumberEmployees = () => {
  return (
    <>
      <DescriptionComment
        className={styles.comment}
        title="в 10–15 раз"
        text="меньше персонала надо для работы автоматизированного склада"
      />
      <div>
        <SectionSubtitle text="Сколько нужно сотрудников для&nbsp;работы полностью автоматизированного склада?" />
        <SectionDescription
          text="Если говорить о&nbsp;конкретных цифрах, то&nbsp;возьмем пример нашего клиента: склад глубокой заморозки &laquo;Коровка из&nbsp;Кореновки&raquo;. На&nbsp;нем работает 5&ndash;7&nbsp;человек. Без автоматизации пришлось&nbsp;бы набрать в&nbsp;15&nbsp;раз больше сотрудников. <br /><br />
		Автоматизированные и&nbsp;роботизированные решения забирают на&nbsp;себя рутинные операции. Люди на&nbsp;таких складах нужны, чтобы управлять и&nbsp;контролировать процессы на&nbsp;уровне программного обеспечения. Если робот-манипулятор не&nbsp;сможет переставить коробку на&nbsp;паллете, то&nbsp;человеку надо вмешаться и&nbsp;помочь. <br /><br />
		Кроме того, на&nbsp;складе есть операции, которые на&nbsp;сегодня автоматизировать или очень дорого, или невозможно. В&nbsp;основном они связаны с&nbsp;процессами, которые пока сложно запрограммировать. Например, отсортировать хрупкие или габаритные вещи, или упаковать товары в&nbsp;пакеты для отгрузки. Это дорогие технологии, которые долго окупаются. Мы&nbsp;используем термин &laquo;эффективная автоматизация&raquo;. Это значит, что автоматизировать нужно в&nbsp;первую очередь те&nbsp;процессы, которые быстро окупаются, а&nbsp;людей использовать только в&nbsp;тех зонах склада, где автоматизировать процессы либо невозможно, либо нецелесообразно из-за длительного срока окупаемости."
        />
        <Image
          alt=""
          src="/main/number-employees/image.jpg"
          className={styles.image}
          width={736}
          height={404}
        />
      </div>
    </>
  );
};

export { NumberEmployees };
