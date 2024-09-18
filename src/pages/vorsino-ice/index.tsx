import { CASES_PAGES_MOCK } from "../../data.js";
import { Montserrat, Roboto } from "next/font/google";
import { Header } from "../../layouts/Header/index";
import { Footer } from "../../layouts/Footer";
import { ContentWrapper } from "../../layouts/ContentWrapper";
import cn from "classnames";
import Head from "next/head.js";
import styles from "./index.module.scss";
import Image from "next/image.js";
import allstyles from "../style.module.scss";

const myFont = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "900"],
});

const myFontMontserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Case = () => {
  const data = CASES_PAGES_MOCK[0];

  return (
    <>
      <Head>
        <title>{data.seo.title}</title>
        <meta key="description" name="description" content={data.seo.desc} />
        <meta
          key="og:description"
          property="og:description"
          content={data.seo.desc}
        />
        <meta key="title" name="title" content={data.seo.title} />
        <meta key="og:title" property="og:title" content={data.seo.title} />
        <meta property="og:site_name" content="comitas.vedomosti.ru" />
        <meta property="twitter:image:width" content="1012" />
        <meta property="twitter:image:height" content="506" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="vk:image:width" content="510" />
        <meta property="vk:image:height" content="228" />
        <meta property="vk:image" content={data.seo.ogImageSrc} />
        <meta name="twitter:image" content={data.seo.ogImageSrc} />
        <meta property="og:image" content={data.seo.ogImageSrc} />
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
        <Header activeLink="" />
        <section className={cn(styles.heroWrapper, myFontMontserrat.className)}>
          <div className={styles.hero}>
            <h1 className={styles.heroTitle}>{data.hero.title}</h1>
            <p
              className={styles.heroDesc}
              dangerouslySetInnerHTML={{ __html: data.hero.description }}
            ></p>
          </div>
          <Image
            className={styles.heroImage}
            src={data.hero.image.desktop.src}
            alt=""
            width={624}
            height={700}
          />
        </section>
        <div className={allstyles.content}>
          <ContentWrapper className={styles.about}>
            <div className={cn(styles.aboutItem, styles.aboutItemWhite)}>
              <p className={cn(styles.aboutTitle, styles.aboutTitleWhite)}>
                О клиенте
              </p>
              <p
                className={cn(styles.aboutDesc, styles.aboutDescWhite)}
                dangerouslySetInnerHTML={{ __html: data.about.client.text }}
              />
            </div>
            <div className={cn(styles.aboutItem, styles.aboutItemDark)}>
              <p className={cn(styles.aboutTitle, styles.aboutTitleDark)}>
                Задача{" "}
              </p>
              <p
                className={cn(styles.aboutDesc, styles.aboutDescDark)}
                dangerouslySetInnerHTML={{ __html: data.about.task.text }}
              />
            </div>
          </ContentWrapper>
          <ContentWrapper className={styles.solution}>
            <Image
              src={data.solution.image.src}
              alt=""
              width={504}
              height={314}
              className={styles.solutionImage}
            />
            <div className={styles.solutionContent}>
              <h2 className={styles.solutionContentTitle}>Решение COMITAS</h2>
              <div
                className={styles.solutionContentDesc}
                dangerouslySetInnerHTML={{ __html: data.solution.text }}
              />
            </div>
          </ContentWrapper>
          <ContentWrapper className={styles.solution}>
            <Image
              src={data.solution.image.src}
              alt=""
              width={504}
              height={314}
              className={styles.solutionImage}
            />
            <div className={styles.solutionContent}>
              <h2 className={styles.solutionContentTitle}>Решение COMITAS</h2>
              <div
                className={styles.solutionContentDesc}
                dangerouslySetInnerHTML={{ __html: data.solution.text }}
              />
            </div>
          </ContentWrapper>
          <ContentWrapper className={styles.result}>
            <div />
            <section className={styles.resultWrapper}>
              <h2 className={styles.resultTitle}>Результат</h2>
              <ul className={styles.resultList}>
                {data.result.list.map((item, id) => {
                  return (
                    <li key={id} className={styles.resultListItem}>
                      <span className={styles.resultListItemNumber}>
                        0{id + 1}
                      </span>
                      <p
                        className={styles.resultListItemDesc}
                        dangerouslySetInnerHTML={{ __html: item.item.text }}
                      />
                    </li>
                  );
                })}
              </ul>
            </section>
          </ContentWrapper>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Case;
