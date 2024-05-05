import { Subtitle } from "../../components/Subtitle/index";
import { ContentWrapper } from "../../layouts/ContentWrapper/index";
import { Button } from "../../components/Button/index";
import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";

const Landshaft = () => {
  return (
    <ContentWrapper className={styles.wrapper}>
      <Image
        src="/main/landshaft/man.png"
        width={570}
        height={552}
        className={styles.image}
        alt=""
      />
      <div className={styles.content}>
        <Subtitle
          className={styles.subtitle}
          title="Как меняется HR-ландшафт: новые тренды рекрутмент"
        />
        <p className={styles.text}>
          В&nbsp;условиях кадрового голода и&nbsp;конкуренции за&nbsp;кандидатов
          работодатели ищут новые источники рабочей силы и&nbsp;способы повысить
          эффективность рекрутмента. Рассказываем, как новые тренды меняют
          HR-ландшафт и&nbsp;к&nbsp;чему готовиться бизнесу
        </p>
        <Link href="/">
          <Button text="Читать статью" className={styles.button} />
        </Link>
      </div>
    </ContentWrapper>
  );
};

export { Landshaft };
