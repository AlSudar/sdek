import styles from "./index.module.scss";
import { ContentWrapper } from "../../layouts/ContentWrapper/index";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import cn from "classnames";

const Hero = () => {
  return (
    <section className={styles.wrapper}>
      <ContentWrapper className={styles.contentWrapper}>
        <div className={styles.content}>
          <h1 className={cn(styles.title, "animation-transformY")}>
            Как меняется
            <br /> российский рынок <span>цифровых HR-систем</span>
          </h1>
          <p className={cn(styles.text, "animation-transformY")}>
            Решение проблемы кадрового голода, импортозамещение и&nbsp;повышение
            доступности цифровых HR-систем для российских заказчиков.
          </p>
          <p className={cn(styles.text, "animation-transformY")}>
            За&nbsp;последние два года бизнес в&nbsp;России столкнулся
            с&nbsp;серьезными вызовами в&nbsp;области управления человеческим
            капиталом: растущий недостаток специалистов, недоступность привычных
            HR-систем, угрозы безопасности и&nbsp;др. Рынок HR-tech (цифровых
            решений в&nbsp;сфере&nbsp;HR) меняется, чтобы предоставить ответ
            на&nbsp;эти вызовы.
          </p>
        </div>
        <div className={styles.images}>
          <Parallax className={styles.imageFirst} speed={-4}>
            <Image
              className={styles.image}
              priority
              width={212}
              height={217}
              alt=""
              src="/statya/first.png"
            />
          </Parallax>
          <Parallax className={styles.imageSecond} speed={-4}>
            <Image
              className={styles.image}
              priority
              width={387}
              height={413}
              alt=""
              src="/statya/second.png"
            />
          </Parallax>
        </div>
      </ContentWrapper>
    </section>
  );
};

export { Hero };
