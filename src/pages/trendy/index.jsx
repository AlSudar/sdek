import localFont from "next/font/local";
import stylesWrapper from "../style.module.scss";
import styles from "./index.module.scss";
import cn from "classnames";
import Head from "next/head";
import { Header } from "../../layouts/Header/index";
import { Footer } from "../../layouts/Footer";
import { Form } from "../../layouts/Form";
import { ParallaxProvider } from "react-scroll-parallax";
import { useEffect } from "react";
import { ContentWrapper } from "../../layouts/ContentWrapper";
import { Description } from "../../components/Description/index";
import { Hero } from "../../trendyComponents/Hero/index";
import { Recrutmient } from "../../trendyComponents/Recrutmient/index";
import { WorkForce } from "../../trendyComponents/WorkForce/index";
import { StruggleTalents } from "../../trendyComponents/StruggleTalents/index";
import { GeneralPractice } from "../../trendyComponents/GeneralPractice/index";
import { DigitalizationHR } from "../../trendyComponents/DigitalizationHR/index";
import { ODO } from "../../trendyComponents/ODO/index";
import { MinimumApplicants } from "../../trendyComponents/MinimumApplicants/index";

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

const Trendy = () => {
  function onEntry(entry) {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        change.target.classList.add("animation-transformY-show");
      }
    });
  }

  function onEntryOpacity(entry) {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        change.target.classList.add("animation-opacity-show");
      }
    });
  }

  useEffect(() => {
    let options = { threshold: [0.1] };
    let observer = new IntersectionObserver(onEntry, options);
    let observerOpacity = new IntersectionObserver(onEntryOpacity, {
      threshold: [0.5],
    });
    let elements = document.querySelectorAll(".animation-transformY");
    let elementsOpacity = document.querySelectorAll(".animation-opacity");
    let elementsOpacitySecond = document.querySelectorAll(
      ".animation-opacitySecond"
    );
    let elementsOpacityThird = document.querySelectorAll(
      ".animation-opacityThird"
    );

    for (let elm of elements) {
      observer.observe(elm);
    }

    for (let elm of elementsOpacity) {
      observerOpacity.observe(elm);
    }

    for (let elm of elementsOpacitySecond) {
      observerOpacity.observe(elm);
    }

    for (let elm of elementsOpacityThird) {
      observerOpacity.observe(elm);
    }

    setTimeout(() => {
      let elementsAnimationBeforeWidth = document.querySelectorAll(
        ".animation-transformY-delay"
      );
      for (let elm of elementsAnimationBeforeWidth) {
        observer.observe(elm);
      }
    }, 1000);
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
          <Header activeLink="/trendy" />
          <Hero />
          <ContentWrapper className={styles.about}>
            <Description text="Главным вызовом в&nbsp;области&nbsp;HR для российских компаний в&nbsp;последние годы стал кадровый голод. Основная причина ‒ демографическая яма из-за падения рождаемости в&nbsp;1990-х и&nbsp;начале 2000-х гг.: малочисленное поколение выходит на&nbsp;рынок, заменяя более многочисленное поколение рожденных в&nbsp;1980х. Также среди причин ‒ эмиграция и&nbsp;другие факторы." />
            <Description text="Применительно к&nbsp;рекрутингу это означает, что конкуренция за&nbsp;рабочую силу уже очень велика и&nbsp;будет только расти. Поиск специалистов потребует больше ресурсов, а&nbsp;найденные соискатели будут более строго оценивать потенциального работодателя. Эта ситуация определяет главные тренды рекрутмента." />
          </ContentWrapper>
          <section className={cn(stylesWrapper.wrapper, styles.blueWrapper)}>
            <MinimumApplicants />
          </section>
          <section className={cn(stylesWrapper.wrapper)}>
            <Recrutmient />
          </section>
          <section className={cn(stylesWrapper.wrapper, styles.blueWrapper)}>
            <WorkForce />
          </section>
          <section className={cn(stylesWrapper.wrapper)}>
            <StruggleTalents />
          </section>
          <section className={cn(stylesWrapper.wrapper, styles.blueWrapper)}>
            <ODO />
          </section>
          <section className={cn(stylesWrapper.wrapper)}>
            <GeneralPractice />
          </section>
          <section className={cn(stylesWrapper.wrapper, styles.blueWrapper)}>
            <DigitalizationHR />
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

export default Trendy;
