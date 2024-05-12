import styles from "./index.module.scss";
import cn from "classnames";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import { ContentWrapper } from "../../layouts/ContentWrapper/index";

const Hero = () => {
  return (
    <section className={styles.wrapper}>
      <ContentWrapper className={styles.contentWrapper}>
        <div className={styles.content}>
          <h1 className={cn(styles.title, "animation-transformY")}>
            Новые тренды <span>рекрутмента</span>
          </h1>
          <p className={cn(styles.desc, "animation-transformY")}>
            Трансформация российской экономики определяет новые требования
            к&nbsp;управлению человеческим капиталом компании. Разбираемся,
            какие тренды влияют на&nbsp;развитие цифрового рекрутмента
            и&nbsp;к&nbsp;чему готовиться бизнесу.
          </p>
        </div>
        <div className={styles.images}>
          <Parallax className={styles.imageFirst} speed={-4}>
            <Image
              className={styles.image}
              priority
              width={216}
              height={202}
              alt=""
              src="/trendy/figure-first.png"
            />
          </Parallax>
          <Parallax className={styles.imageSecond} speed={-4}>
            <Image
              className={styles.image}
              priority
              width={388}
              height={386}
              alt=""
              src="/trendy/figure-second.png"
            />
          </Parallax>
        </div>
      </ContentWrapper>
    </section>
  );
};

export { Hero };
