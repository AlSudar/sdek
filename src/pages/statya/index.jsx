import localFont from "next/font/local";
import stylesWrapper from "../style.module.scss";
import styles from "./index.module.scss";
import cn from "classnames";
import Head from "next/head";
import { Header } from "../../layouts/Header/index";
import { Footer } from "../../layouts/Footer";
import { Form } from "../../layouts/Form";
import { Hero } from "../../statyaComponents/Hero";
import { ParallaxProvider } from "react-scroll-parallax";
import { ContentWrapper } from "../../layouts/ContentWrapper";
import { Procent } from "../../components/Procent/index";
import { Description } from "../../components/Description/index";
import { PersonnelShortage } from "../../statyaComponents/PersonnelShortage";
import { TrainingAdaptation } from "../../statyaComponents/TrainingAdaptation";
import { AnimationSubtitle } from "../../components/AnimationSubtitle/index";
import { ContinuedSubstitution } from "../../statyaComponents/ContinuedSubstitution";
import { HrTech } from "../../statyaComponents/HrTech";
import { FormationEcosystems } from "../../statyaComponents/FormationEcosystems";
import { OnPremise } from "../../statyaComponents/OnPremise";
import { Competitiveness } from "../../statyaComponents/Competitiveness";
import { useEffect } from "react";

const myFont = localFont({
  src: [
    {
      path: "../fonts/TTFirsNeueMedium.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/TTFirsNeueRegular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

const Statya = () => {
  function onEntry(entry) {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        change.target.classList.add("animation-transformY-show");
      }
    });
  }

  useEffect(() => {
    let options = { threshold: [0.1] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll(".animation-transformY");

    for (let elm of elements) {
      observer.observe(elm);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Новые способы повысить эффективность рекрутмента</title>
        <meta
          key="description"
          name="description"
          content="Как рынок HR-tech реагирует на запросы бизнеса"
        />
        <meta
          key="og:description"
          property="og:description"
          content="Как рынок HR-tech реагирует на запросы бизнеса"
        />
        <meta
          key="title"
          name="title"
          content="Новые способы повысить эффективность рекрутмента"
        />
        <meta
          key="og:title"
          property="og:title"
          content="Новые способы повысить эффективность рекрутмента"
        />
        <meta property="og:site_name" content="nota.vedomosti.ru" />
        <meta property="twitter:image:width" content="1012" />
        <meta property="twitter:image:height" content="506" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="vk:image:width" content="510" />
        <meta property="vk:image:height" content="228" />
        <meta property="vk:image" content="/og-image.jpg" />
        <meta name="twitter:image" content="/og-image.jpg" />
        <meta property="og:image" content="/og-image.jpg" />
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
      <ParallaxProvider>
        <div className={cn(myFont.className)}>
          <Header activeLink="/statya" />
          <Hero />
          <section className={styles.wrapperFirst}>
            <ContentWrapper className={styles.firstContent}>
              <Procent
                revert
                pretext="на"
                text="35%"
                desc="Вырос российский рынок HR-tech в&nbsp;первом полугодии 23&nbsp;года."
              />
              <Description
                className={cn(styles.firstDesc)}
                text="Российский рынок HR-tech растет на&nbsp;протяжении десяти лет. При этом в&nbsp;2021 рынок вырос <a target='_blank' href='https://smartranking.ru/ru/analytics/hrtech/bum-rossijskogo-hr-tech-k-koncu-2023-goda-itogi-2022-go-na-rynke-hr-reshenij/'>почти вдвое</a> после пандемии COVID, в&nbsp;2022&nbsp;&mdash; на&nbsp;<a href='https://www.forbes.ru/tekhnologii/487673-umnicy-hantinga-kak-izmenilsa-rossijskij-rynok-hr-tech-v-2022-godu' target='_blank'>21%</a>, в&nbsp;первом полугодии 2023&nbsp;&mdash; на&nbsp;<a href='https://smartranking.ru/ru/analytics/hrtech/rost-vyruchki-na-35-chto-proizoshlo-s-rossijskim-hr-tech-v-pervom-polugodii-2023/' target='_blank'>35%</a> к&nbsp;аналогичному периоду 2022-го, а&nbsp;в&nbsp;следующем квартале тренд <a href='https://smartranking.ru/ru/analytics/hrtech/rynok-hr-tech-v-iii-kvartale-2023-vyros-na-39-a-s-uchetom-vyruchki-headhunter-na-52/' target='_blank'>продолжился</a>."
              />
            </ContentWrapper>
          </section>
          <PersonnelShortage />
          <section className={styles.whiteWrapper}>
            <AnimationSubtitle text="Обучение и адаптация сотрудников с применением AR- и VR-технологий" />
            <TrainingAdaptation />
          </section>
          <section className={cn(stylesWrapper.wrapper, styles.blueWrapper)}>
            <ContentWrapper>
              <ContinuedSubstitution />
            </ContentWrapper>
          </section>
          <section className={cn(stylesWrapper.wrapper)}>
            <ContentWrapper>
              <HrTech />
            </ContentWrapper>
          </section>
          <section className={cn(stylesWrapper.wrapper, styles.blueWrapper)}>
            <FormationEcosystems />
          </section>
          <section className={cn(stylesWrapper.wrapper)}>
            <ContentWrapper>
              <OnPremise />
            </ContentWrapper>
          </section>
          <section className={cn(stylesWrapper.wrapper, styles.blueWrapper)}>
            <ContentWrapper>
              <Competitiveness />
            </ContentWrapper>
          </section>
          <section className={cn(stylesWrapper.wrapper)}>
            <Form />
          </section>
          <Footer />
        </div>
      </ParallaxProvider>
    </>
  );
};

export default Statya;
