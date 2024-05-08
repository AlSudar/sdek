import { Subtitle } from "../../components/Subtitle/index";
import { Description } from "../Description/index";
import Image from "next/image";
import styles from "./index.module.scss";
import { useWindowDimensions } from "../../utils/index";
import { Quotes } from "../Quotes";
import cn from "classnames";

const ContinuedSubstitution = () => {
  const { width } = useWindowDimensions();
  return (
    <>
      <Subtitle className={styles.title} title="Продолжение импортозамещения" />
      <div className={styles.subContentWrapper}>
        <div className={styles.subContentWrapperImage} />
        <div className={styles.subContent}>
          <Description text="Дальше всего по&nbsp;пути импортозамещения прошли госсектор и&nbsp;госкорпорации. Они одними из&nbsp;первых перешли на&nbsp;отечественные решения в&nbsp;силу требований безопасности." />
          <Description text="&laquo;Почти для всех решений, ранее представленных западными вендорами, уже можно найти российский аналог&raquo;, ‒ считает Корниенко. Однако в&nbsp;некоторых сегментах процесс замещения проходит особенно сложно. В&nbsp;частности, это касается решений на&nbsp;основе предиктивной аналитики: российским разработчикам доступно значительно меньше обученных моделей и&nbsp;массивов информации, чем их&nbsp;западным коллегам." />
        </div>
      </div>
      <div className={cn(styles.subtitle, "animation-transformY")}>
        <span>Уникальность российских</span>
        <Image
          className={styles.subtitleImage}
          width={246}
          height={226}
          alt=""
          src="/statya/continuedSubstitution/figure.png"
        />
        <span>решений</span>
      </div>
      <div className={styles.supContentWrapper}>
        <Description text="Другой &laquo;сложный&raquo; сегмент ‒ автоматизация всех HR-процессов через единую платформу: если экосистема условного SAP формировалась десятилетиями, в&nbsp;том числе через скупку и&nbsp;интеграцию нишевых компаний, то&nbsp;российские вендоры только в&nbsp;начале самостоятельного пути." />
        <Description text="При этом российский HR-tech не&nbsp;будет копией западного. Например, важное место в&nbsp;иностранных цифровых HR-системах занимает поддержка diversity (в&nbsp;пер.&nbsp;с&nbsp;англ. &laquo;разнообразие&raquo;). На&nbsp;российском рынке, по&nbsp;мнению эксперта, соответствующего запроса нет, а&nbsp;место этого компонента займут более востребованные в&nbsp;России решения." />
      </div>
      <Quotes
        type="blue"
        imageSrc="/statya/continuedSubstitution/maxim.png"
        author="Максим Корниенко"
        text="Отечественному HR-tech потребуется пять-шесть лет, чтобы предоставить клиентам цифровые решения во&nbsp;всех нужных сегментах."
        authoDesc="Ддиректор по&nbsp;развитию НОТА ЮНИОН (ex. T1&nbsp;TalentForce)"
      />
    </>
  );
};

export { ContinuedSubstitution };
