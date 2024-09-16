import { SectionDescription } from "../../../components/SectionDescription";
import { SectionSubtitle } from "../../../components/SectionSubtitle";
import { Quote } from "../../../components/Quote/index";
import styles from "./index.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArticleCard } from "../../../components/ArticleCard/index";

const ARTICLE_CARD = [
  { text: "Главная", imageSrc: "/articles/main/main.jpg", href: "/" },
  {
    text: "Кейсы",
    imageSrc: "/articles/cases/all-cases-image.jpg",
    href: "/#cases",
  },
];

const MAX_FIRST_VALUE = 7000;
const MAX_SECOND_VALUE = 25000;

const Last = () => {
  const [firstValue, setFirstValue] = useState(1);
  const [secondValue, setSecondValue] = useState(1);

  function onEntry(entry) {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        const intervalFirstId = setInterval(() => {
          setFirstValue((prevValue) => {
            if (prevValue >= MAX_FIRST_VALUE) {
              clearInterval(intervalFirstId);
              return MAX_FIRST_VALUE;
            }
            return (prevValue += 1);
          });
        }, 10);

        const intervalSecondId = setInterval(() => {
          setSecondValue((prevValue) => {
            if (prevValue >= MAX_SECOND_VALUE) {
              clearInterval(intervalSecondId);
              return MAX_SECOND_VALUE;
            }
            return (prevValue += 1);
          });
        }, 10);
      }
    });
  }

  useEffect(() => {
    let options = { threshold: [0.1] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll("#animation-numbers");

    for (let elm of elements) {
      observer.observe(elm);
    }
  }, []);

  return (
    <>
      <div />
      <div>
        <SectionSubtitle text="Как происходит импортозамещение оборудования для автоматизации? И&nbsp;какие риски есть для бизнеса?" />
        <SectionDescription
          className={styles.desc}
          text="В&nbsp;начале 2022 года мы&nbsp;делали два сложных проекта, в&nbsp;которых использовалось немецкое оборудование. Его настройкой занимались иностранные коллеги, но&nbsp;в&nbsp;один из&nbsp;дней они уехали, никого не&nbsp;предупредив. Клиенты фактически остались с&nbsp;грудой неработающего металла. Несмотря на&nbsp;проблемы, благодаря наличию собственного штата высококвалифицированных и&nbsp;опытных программистов и&nbsp;инженеров, мы&nbsp;смогли запустить зарубежное оборудование своими силами и&nbsp;реализовать проекты. <br /><br />
		  Рынок сейчас переориентируется с&nbsp;европейских стран на&nbsp;азиатские. Это в&nbsp;основном касается сложных видов оборудования. У&nbsp;многих китайское оборудование вызывает опасения. Может&nbsp;ли кто-то поставить некачественных роботов или краны-штабелеры? Точно, да. Поэтому я&nbsp;советую выезжать на&nbsp;китайское производство и&nbsp;оценивать качество производства и&nbsp;сборки оборудования на&nbsp;месте. В&nbsp;начале 2022 года мы&nbsp;три месяца провели в&nbsp;Китае и&nbsp;изучили по&nbsp;5&ndash;7 производителей в&nbsp;каждой категории нужного нам оборудования. Выбрали тех, в&nbsp;ком уверены на&nbsp;100% и&nbsp;теперь с&nbsp;ними сотрудничаем."
        />
        <Quote text="&laquo;Некоторые виды оборудования уже производят в&nbsp;России, например, конвейерные линии. Мы&nbsp;второй год делаем их&nbsp;на&nbsp;собственном производстве, которое занимает 6000&nbsp;кв.&nbsp;м. Я&nbsp;уверен, что через 3&ndash;5 лет мы&nbsp;будем производить и&nbsp;более сложное оборудование. И&nbsp;российский клиент сможет выбирать уже среди отечественных производителей&raquo;." />
        <SectionSubtitle
          className={styles.subtitle}
          text="Как будут выглядеть автоматизированные склады через пару лет?"
        />
        <SectionDescription
          className={styles.secondDesc}
          text="На&nbsp;мой взгляд все движется в&nbsp;сторону высотных автоматизированных складов, потому что это позволяет оборудовать больше паллетомест на&nbsp;меньшей площади. Чтобы хранить 50&nbsp;000 паллетомест нужен склад площадью 25&nbsp;000 кв.м и&nbsp;высотой в&nbsp;12&nbsp;м&nbsp;&mdash; именно на&nbsp;такую высоту рассчитаны погрузчики. Но&nbsp;если взять автоматизированный кран-штабелер, который может подниматься на&nbsp;высоту до&nbsp;45&nbsp;м, то&nbsp;хранить 50&nbsp;000 паллетомест уже можно на&nbsp;площади в&nbsp;7&nbsp;000 кв.м."
        />
        <div className={styles.images}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageHeaderWrapper}>
              <span className={styles.imageHeaderTitle}>
                S = <span id="animation-numbers">{firstValue}</span> КВ. М.
              </span>
              <span className={styles.imageHeaderText}>50 000 паллетомест</span>
            </div>
            <Image
              width={270}
              height={238}
              src="/main/last/first-figure.png"
              className={styles.imageFirst}
              alt=""
              loading="lazy"
            />
          </div>
          <div className={styles.imageWrapper}>
            <div className={styles.imageHeaderWrapper}>
              <span className={styles.imageHeaderTitle}>
                S = <span id="animation-numbers">{secondValue}</span> КВ. М.
              </span>
              <span className={styles.imageHeaderText}>50 000 паллетомест</span>
            </div>
            <Image
              width={468}
              height={272}
              src="/main/last/second-figure.png"
              className={styles.imageSecond}
              alt=""
            />
          </div>
        </div>
        <SectionDescription text="За&nbsp;счет этого достигается значительная экономия капитальных затрат на&nbsp;строительство &laquo;коробки&raquo;, а&nbsp;разница стоимости может быть инвестирована в&nbsp;автоматизацию. Таким образом общие капитальные затраты на&nbsp;строительство и&nbsp;оборудование склада будут примерно одинаковы, при этом операционные расходы на&nbsp;автоматизированный склад в&nbsp;разы ниже, что в&nbsp;долгосрочной перспективе делает такие вложения значительно привлекательней. Также строительство самонесущего автоматизированного склада на&nbsp;20-30% быстрее, чем строительство и&nbsp;оснащение классического склада." />
        <div className={styles.articles}>
          <p className={styles.articlesTitle}>Читать другие разделы</p>
          <div className={styles.articleList}>
            {ARTICLE_CARD.map((item, id) => (
              <ArticleCard
                key={id}
                text={item.text}
                imageSrc={item.imageSrc}
                href={item.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export { Last };
