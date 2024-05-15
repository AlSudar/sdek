import cn from "classnames";
import styles from "./index.module.scss";
import { Montserrat } from "next/font/google";

const myFont = Montserrat({ subsets: ["latin"] });

const Hero = () => {
  return (
    <section className={cn(styles.wrapper, myFont.className)}>
      <div className={styles.content}>
        <h1 className={styles.title}>Двигатель роста</h1>
        <p className={styles.desc}>
          Как автоматизация складской логистики стала обязательным условием
          развития бизнеса в&nbsp;России
        </p>
      </div>
      <div className={styles.background} />
    </section>
  );
};

export { Hero };
