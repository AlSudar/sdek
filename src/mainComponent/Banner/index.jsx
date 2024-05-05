import { ContentWrapper } from "../../layouts/ContentWrapper/index";
import styles from "./index.module.scss";
import Link from "next/link";
import { Button } from "../../components/Button/index";

const Banner = () => {
  return (
    <ContentWrapper className={styles.wrapper}>
      <p className={styles.text}>
        Российский рынок HR-tech быстро отвечает на&nbsp;запросы бизнеса:
        помогает решать HR-задачи минимальными ресурсами, делает цифровые
        решения доступнее и&nbsp;помогает заказчику сократить издержки.
        Объясняем, как&nbsp;меняется российский рынок цифровых HR-систем.
      </p>
      <Link href="/">
        <Button text="Читать статью" className={styles.button} />
      </Link>
    </ContentWrapper>
  );
};

export { Banner };
