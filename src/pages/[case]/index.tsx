import { CASES_PAGES_MOCK } from "../../data.js";
import { Roboto } from "next/font/google";
import { Header } from "../../layouts/Header/index";
import { Footer } from "../../layouts/Footer";
import cn from "classnames";
import Head from "next/head.js";
import styles from "./index.module.scss";

const myFont = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "900"],
});

const Case = ({ data }) => {
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
        <Header />
        <section className={styles.heroWrapper}>
          <div className={styles.hero}>
            <h1>{data.hero.title}</h1>
            <p dangerouslySetInnerHTML={{ __html: data.hero.description }}></p>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export async function getServerSideProps(query) {
  const data = CASES_PAGES_MOCK.find(
    (item) => item.url === `/${query.query.case}`
  );

  if (!data) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  // Pass data to the page via props
  return { props: { data } };
}

export default Case;
