import styles from "./index.module.scss";
import { Subtitle } from "../../components/Subtitle/index";
import { ContentWrapper } from "../../layouts/ContentWrapper";
import { Description } from "../../components/Description/index";
import { Quotes } from "../../components/Quotes/index";
import Image from "next/image";
import { DATA_MOCK } from "./data";
import cn from "classnames";

const Recrutmient = () => {
  return (
    <ContentWrapper>
      <Subtitle
        title="Широкое использование ИИ в&nbsp;рекрутменте"
        className={styles.subtitle}
      />
      <div className={styles.content}>
        <Image
          className={cn(styles.contentImage, "animation-transformY")}
          alt=""
          src="/trendy/recrutmient/figure.jpg"
          width={434}
          height={334}
        />
        <Description text="Дефицит рабочей силы заставляет бизнес повышать эффективность рекрутмента любыми способами. Одним из&nbsp;главных таких способов сегодня становится внедрение искусственного интеллекта (ИИ) в&nbsp;цифровые HR-системы. Он&nbsp;позволяет автоматизировать поиск, отбор и&nbsp;найм сотрудников и&nbsp;достигать результата минимальным количеством ресурсов. ИИ-автоматизация позволяет добиться не&nbsp;только количественных, но&nbsp;и&nbsp;качественных результатов, в&nbsp;частности, устранить риск ошибок из-за предвзятости при оценке кандидатов." />
      </div>
      <Quotes
        text="Главная боль бизнеса сейчас и&nbsp;на&nbsp;годы вперед ‒ недостаток кандидатов, вызванный демографической ямой и&nbsp;рядом других причин. В&nbsp;этих условиях автоматизация поиска и&nbsp;найма ‒ практически единственный способ сохранить достаточную эффективность рекрутмента без значительного роста расходов."
        author="Максим Корниенко"
        authoDesc="Ддиректор по&nbsp;развитию НОТА ЮНИОН (ex. T1&nbsp;TalentForce)"
        imageSrc="/trendy/recrutmient/maksim.png"
      />
      <Description
        className={styles.subQuote}
        text="ИИ&nbsp;не&nbsp;способен полностью заменить HR-специалиста, это мнение разделяют&nbsp;85% работодателей. Однако ИИ-решения способны помочь специалистам и&nbsp;повысить эффективность их&nbsp;работы на&nbsp;таких этапах найма:"
      />
      <ul className={styles.list}>
        {DATA_MOCK.map((item, id) => {
          return (
            <li
              key={id}
              className={cn(styles.listItem, "animation-transformY")}
            >
              <span className={styles.listItemNumber}>{(id += 1)}</span>
              <span
                className={styles.listItemTitle}
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
              <p
                className={styles.listItemDesc}
                dangerouslySetInnerHTML={{ __html: item.desc }}
              />
            </li>
          );
        })}
      </ul>
    </ContentWrapper>
  );
};

export { Recrutmient };
