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
          <Header activeLink="/trendy" />

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
