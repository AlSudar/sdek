import styles from "./index.module.scss";
import { Subtitle } from "../../components/Subtitle/index";
import { Description } from "../Description";
import Image from "next/image";
import { useWindowDimensions } from "../../utils/index";

const OnPremise = () => {
  const { width } = useWindowDimensions();

  return (
    <>
      <Subtitle className={styles.subtitle} title="Переход в&nbsp;on-premise" />
      <Image
        alt=""
        width={1170}
        height={366}
        src={
          width && width < 480
            ? "/statya/onPremise/background-xs.png"
            : width && width < 768
            ? "/statya/onPremise/background-md.png"
            : "/statya/onPremise/background.png"
        }
        className={styles.background}
      />
      <div className={styles.content}>
        <Description text="Эксперты компании НОТА (Холдинг&nbsp;Т1) отмечают, что при сохранении спроса на&nbsp;облачные HR-платформы, обладающие сертификатами безопасностями, растет количество запросов на&nbsp;HR-решения on-premise (т.е. установленные на&nbsp;собственных серверах компании)." />
        <Description text="Корниенко считает, что этот тренд сохранится надолго. Во-первых, решения on-premise легче обезопасить, что важно в&nbsp;контексте <a href='https://www.vedomosti.ru/technology/news/2023/03/03/965181-chislo-kiberatak' target='_blank'>повышения частоты кибератак</a> на&nbsp;российские компании. Во-вторых, для бизнеса, недавно пережившего опыт резкого ухода западных вендоров, внутреннее размещение решений кажется более надежным." />
      </div>
    </>
  );
};

export { OnPremise };
