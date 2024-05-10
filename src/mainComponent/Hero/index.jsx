import { ContentWrapper } from "../../layouts/ContentWrapper/index";
import styles from "./index.module.scss";
import Image from "next/image";
import useWindowDimensions from "../../utils/index";
import cn from "classnames";

const Hero = () => {
  const { width } = useWindowDimensions();

  return (
    <section className={styles.hero}>
      <ContentWrapper>
        <h1 className={cn(styles.title, "animation-transformY")}>
          HR-навигатор: <span className={styles.colored}>автоматизация</span>{" "}
          рекрутмента
        </h1>
      </ContentWrapper>
      <Image
        priority={true}
        width={670}
        height={574}
        className={styles.hand}
        alt=""
        src={width > 768 ? "/main/hero/hand.png" : "/main/hero/hand-tablet.png"}
      />
    </section>
  );
};

export { Hero };
