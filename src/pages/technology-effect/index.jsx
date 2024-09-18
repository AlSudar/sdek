import cn from "classnames";
import Head from "next/head";
import { Header } from "../../layouts/Header/index";
import { Footer } from "../../layouts/Footer";
import { ContentWrapper } from "../../layouts/ContentWrapper";
import { Hero } from "../../pagesComponents/StatyaComponents/Hero";
import { Roboto } from "next/font/google";
import allstyles from "../style.module.scss";
import styles from "./index.module.scss";
import { ProductivityGrowth } from "../../pagesComponents/StatyaComponents/ProductivityGrowth";
import { UseOfSpace } from "../../pagesComponents/StatyaComponents/UseOfSpace";
import { Quote } from "../../components/Quote/index";
import { CostReduction } from "../../pagesComponents/StatyaComponents/CostReduction";
import { Articles } from "../../components/Articles";

const myFont = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "900"],
});

const ARTICLE_CARD = [
  {
    text: "Главная",
    imageSrc: "/articles/main/main.jpg",
    href: "/",
  },
  //   {
  //     text: "Кейсы",
  //     imageSrc: "/articles/cases/all-cases-image.jpg",
  //     href: "/#cases",
  //   },
];

export default function Statya() {
  return (
    <>
      <Head>
        <title>Роботы на складах</title>
        <meta
          key="description"
          name="description"
          content="За счет чего достигается бизнес-эффект роботизации складов"
        />
        <meta
          key="og:description"
          property="og:description"
          content="За счет чего достигается бизнес-эффект роботизации складов"
        />
        <meta key="title" name="title" content="Роботы на складах" />
        <meta key="og:title" property="og:title" content="Роботы на складах" />
        <meta property="og:site_name" content="comitas.vedomosti.ru" />
        <meta property="twitter:image:width" content="1012" />
        <meta property="twitter:image:height" content="506" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="vk:image:width" content="510" />
        <meta property="vk:image:height" content="228" />
        <meta property="vk:image" content="/statya-og-image.jpg" />
        <meta name="twitter:image" content="/statya-og-image.jpg" />
        <meta property="og:image" content="/statya-og-image.jpg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:height" content="800" />
        <link rel="icon" href="/favicon16.png" sizes="16x16" type="image/png" />
        <link
          rel="icon"
          href="/favicon32.svg"
          sizes="16x16 32x32"
          type="image/vnd.microsoft.icon"
        />
        <link
          rel="icon"
          href="/favicon64.svg"
          sizes="any"
          type="image/svg+xml"
        />
      </Head>
      <div className={cn(myFont.className)}>
        <Header activeLink="/technology-effect" />
        <Hero />
        <div className={allstyles.content}>
          <ContentWrapper className={cn(allstyles.wrapper, styles.first)}>
            <div />
            <p className={styles.firstDesc}>
              Роботы сегодня стали доступнее и&nbsp;функциональнее.
              К&nbsp;тому&nbsp;же в&nbsp;нынешних условиях они все ощутимее
              влияют на&nbsp;эффективность бизнеса: уменьшают операционные
              расходы, увеличивают производительность, решают проблемы кадрового
              голода и&nbsp;человеческих ошибок. Рассказываем, за&nbsp;счет чего
              достигается бизнес-эффект роботизации складов.
            </p>
          </ContentWrapper>
          <ContentWrapper className={cn(allstyles.wrapper, styles.second)}>
            <ProductivityGrowth />
          </ContentWrapper>
          <ContentWrapper className={cn(allstyles.wrapper, styles.third)}>
            <Quote
              authorImageSrc="/statya/third/dmitriy.png"
              author="Дмитрий Геллер"
              authorDesc="Директор по продажам автоматизированных систем хранения COMITAS"
              text="&laquo;Максимально эффективно роботизация показывает себя в&nbsp;работе складов со&nbsp;средней и&nbsp;низкой оборачиваемостью и&nbsp;на&nbsp;складах с&nbsp;круглосуточным режимом работы. При этом такие решения помогают точечно решать проблемы в&nbsp;тех зонах, которые больше всего нуждаются в&nbsp;оптимизации. А&nbsp;количество оборудования может расти вслед за&nbsp;бизнесом заказчика. Например, дополнительных роботов можно поставить на&nbsp;участке с&nbsp;высоким грузопотоком и&nbsp;за&nbsp;короткий срок увеличить производительность&raquo;."
            />
          </ContentWrapper>
          <ContentWrapper className={cn(allstyles.wrapper, styles.four)}>
            <CostReduction />
          </ContentWrapper>
          <ContentWrapper className={cn(allstyles.wrapper, styles.five)}>
            <UseOfSpace />
          </ContentWrapper>
          <ContentWrapper className={cn(allstyles.wrapper, styles.six)}>
            <Quote
              authorImageSrc="/statya/quote/david.png"
              author="Давит Манукян"
              authorDesc="Основатель и&nbsp;управляющий директор системного интегратора полного цикла в&nbsp;области складской и&nbsp;производственной логистики COMITAS"
              text="&laquo;Технологии со&nbsp;временем дешевеют, поэтому роботизированные решения становятся доступнее. Раньше для перемещения по&nbsp;складу надо было покупать дорогостоящие минилоуды. Сейчас их&nbsp;можно заменить CTU-роботами, которые ходят между стеллажами, забирают с&nbsp;полок коробки с&nbsp;нужным товаром и&nbsp;отдают их&nbsp;людям. Оборудовать ими склад стоит в&nbsp;10&nbsp;раз дешевле, чем приобретать минилоуды 3&ndash;4 года назад&raquo;."
            />
          </ContentWrapper>
          <ContentWrapper className={cn(allstyles.wrapper)}>
            <div />
            <div className={styles.articleWrapper}>
              <Articles articleCards={ARTICLE_CARD} />
            </div>
          </ContentWrapper>
        </div>
        <Footer />
      </div>
    </>
  );
}
