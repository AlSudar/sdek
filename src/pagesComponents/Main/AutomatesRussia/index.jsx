import { SectionTitle } from "../../../components/SectionTitle/index";
import { SectionSubtitle } from "../../../components/SectionSubtitle/index";
import { SectionDescription } from "../../../components/SectionDescription/index";
import styles from "./index.module.scss";
import Image from "next/image";

const AutomatesRussia = () => {
  return (
    <>
      <div className={styles.authorWrapper}>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            width={174}
            height={174}
            alt=""
            src="/statya/quote/david.png"
          />
        </div>

        <div className={styles.authorDescWrapper}>
          <div>
            <span className={styles.author}>Давит Манукян</span>
            <span className={styles.authorDesc}>
              Основатель и&nbsp;управляющий директор системного интегратора
              полного цикла в&nbsp;области складской и&nbsp;производственной
              логистики Comitas
            </span>
          </div>
        </div>
      </div>
      <div>
        <SectionTitle text="Кто автоматизирует Россию?" />
        <SectionDescription text="О&nbsp;том, как автоматизация складов помогает решать самые острые проблемы логистики и&nbsp;бизнеса в&nbsp;целом, об&nbsp;эффективности и&nbsp;окупаемости таких решений, мы&nbsp;поговорили с&nbsp;основателем и&nbsp;управляющим директором системного интегратора полного цикла в&nbsp;области складской и&nbsp;производственной логистики COMITAS <b>Давитом Манукяном</b>." />
      </div>
    </>
  );
};

export { AutomatesRussia };
