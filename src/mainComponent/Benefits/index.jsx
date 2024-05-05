import { Subtitle } from "../../components/Subtitle/index";
import { ContentWrapper } from "../../layouts/ContentWrapper/index";
import styles from "./index.module.scss";
import Image from "next/image";

const Benefits = () => {
  return (
    <ContentWrapper>
      <Subtitle
        className={styles.title}
        title="Как HR-tech помогает бизнесу?"
      />
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.header}>
            <div className={styles.dots} />
            <p className={styles.cardTitle}>
              Из&nbsp;дополнительного преимущества цифровизация&nbsp;HR
              становится условием конкурентоспособности бизнеса
            </p>
          </div>
          <div className={styles.cardFooter}>
            <Image
              src="/main/benefits/kirill.png"
              width={86}
              height={86}
              className={styles.cardImage}
              alt="Кирилл Булгаков"
            />
            <div className={styles.cardAuthor}>
              <p className={styles.cardAuthorTitle}>Кирилл Булгаков</p>
              <p className={styles.cardAuthorText}>
                заместитель генерального директора Холдинга&nbsp;Т1, управляющий
                директор вендора НОТА&nbsp;(Холдинг&nbsp;Т1)
              </p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.header}>
            <div className={styles.dots} />
            <p className={styles.cardTitle}>
              Если одна компания решает задачи найма расширением штата
              рекрутеров, которым нужно платить зарплаты, а&nbsp;другая
              автоматизирует поиск и&nbsp;найм&nbsp;&mdash; понятно,
              что&nbsp;действия второй более рентабельны
            </p>
          </div>
          <div className={styles.cardFooter}>
            <Image
              src="/main/benefits/anton.png"
              width={86}
              height={86}
              className={styles.cardImage}
              alt="Максим Корниенко"
            />
            <div className={styles.cardAuthor}>
              <p className={styles.cardAuthorTitle}>Максим Корниенко</p>
              <p className={styles.cardAuthorText}>
                директор по развитию НОТА&nbsp;ЮНИОН (ex. T1 TalentForce)
              </p>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export { Benefits };
