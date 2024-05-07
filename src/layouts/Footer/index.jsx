import { ContentWrapper } from "../../layouts/ContentWrapper/index";
import styles from "./index.module.scss";
import cn from "classnames";
import useWindowDimensions from "../../utils/index";

const Development = () => {
  return (
    <span className={styles.development}>
      Разработка сайта: <b>Ornament Media</b>
    </span>
  );
};

const Authors = () => {
  return (
    <p className={styles.authors}>
      Отдел специальных и нативных проектов
      <br /> Менеджер по спецпроектам: <b>Наталия Ставрогина</b>, <br />{" "}
      руководитель отдела продаж рекламы: <b>Юлия Чижикова</b>, <br /> дизайн:
      <b> Иван Крылов</b>
    </p>
  );
};

const Footer = () => {
  const { width } = useWindowDimensions();
  let href = "";
  if (typeof window !== "undefined") {
    href = "https://nota.vedomosti.ru";
  }

  const shareVK = () => {
    if (window) {
      window.dataLayer = window.dataLayer || [];
      //   function gtag() {
      //     dataLayer.push(arguments);
      //   }
      //   gtag("event", "click_vk", {
      //     social_button_footer: "vk",
      //   });

      const VK = "https://vk.com/share.php?url=";
      window.open(VK + href, "_blank").focus();
    }
  };

  const shareTG = () => {
    if (window) {
      window.dataLayer = window.dataLayer || [];
      //   function gtag() {
      //     dataLayer.push(arguments);
      //   }
      //   gtag("event", "click_vk", {
      //     social_button_footer: "tg",
      //   });

      const TG = "https://telegram.me/share/url?url=";
      window.open(TG + href, "_blank").focus();
    }
  };

  return (
    <footer className={styles.footer}>
      <ContentWrapper className={styles.footerWrapper}>
        <div className={styles.socialWrapper}>
          <div className={styles.socialIcons}>
            <div
              className={cn(styles.socialIcon, styles.socialIconVk)}
              onClick={shareVK}
            />
            <div
              className={cn(styles.socialIcon, styles.socialIconTg)}
              onClick={shareTG}
            />
          </div>
          <span className={styles.socialText}>Поделиться спецпроектом</span>
        </div>
        {width && width > 480 && <Development />}
        <hr className={styles.line} />
        <div className={styles.footerSup}>
          <div className={styles.worksWrapper}>
            <div className={styles.worksIcon} />
            <span>Над проектом работали:</span>
            <Authors />
          </div>
          {width && width > 768 && (
            <span className={styles.advertising}>
              Реклама / ООО «Т1 Инновации» / 16+ / Erid: xxxxxxx
            </span>
          )}
          <span className={styles.cooperation}>
            По вопросам сотрудничества: <br />
            <a href="mailto:special@vedomosti.ru">special@vedomosti.ru</a>
          </span>
        </div>{" "}
        {width && width <= 768 && (
          <span className={styles.advertising}>
            Реклама / ООО «Т1 Инновации» / 16+ / Erid: xxxxxxx
          </span>
        )}
      </ContentWrapper>
    </footer>
  );
};

export { Footer };
