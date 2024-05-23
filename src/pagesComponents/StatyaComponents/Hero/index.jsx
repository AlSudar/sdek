import cn from "classnames";
import styles from "./index.module.scss";
import { Montserrat } from "next/font/google";

const myFont = Montserrat({ subsets: ["latin"] });

const Hero = () => {
  return (
    <section className={cn(styles.wrapper, myFont.className)}>
      <div className={styles.content}>
        <h1 className={styles.title}>Эффект технологии</h1>
        <p className={styles.desc}>
          как роботизация помогает бизнесу повышать производительность складов и
          сокращать расходы
        </p>
      </div>
      <div className={styles.background} />
    </section>
  );
};

export { Hero };
