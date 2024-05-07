import styles from "./index.module.scss";
import { Subtitle } from "../../components/Subtitle/index";
import { Description } from "../Description/index";
import Image from "next/image";
import { useWindowDimensions } from "../../utils/index";

const HrTech = () => {
  const { width } = useWindowDimensions();

  return (
    <>
      <Subtitle title="Рост доступности HR-tech" className={styles.subtitle} />
      <Image
        height={366}
        width={1170}
        alt=""
        className={styles.background}
        src={
          width && width < 480
            ? "/statya/hrTech/background-xs.png"
            : width && width < 768
            ? "/statya/hrTech/background-md.png"
            : "/statya/hrTech/background.png"
        }
      />
      <div className={styles.content}>
        <Description text="Другое положительное изменение, вызванное заменой зарубежных вендоров отечественными, ‒повышение доступности HR-решений для российских заказчиков. Многим крупным, а&nbsp;тем более средним и&nbsp;мелким российским компаниям, были не&nbsp;по&nbsp;карману цены глобальных вендоров (SAP, Oracle и&nbsp;др.). Занимающие их&nbsp;место локальные вендоры демонстрируют ценовую гибкость. Многие готовы продавать отдельные модули вместо полного доступа к&nbsp;платформе, пересмотреть цены под объемы конкретного заказчика или предложить облегченные и&nbsp;удешевленные коробочные решения клиентам, которым не&nbsp;важны кастомизация и&nbsp;сложные интеграции." />
        <Description text="Но&nbsp;вопрос не&nbsp;только в&nbsp;ценах. Например, раньше решения иностранных вендоров были недоступны государственным организациям и&nbsp;госкорпорациям по&nbsp;соображениям безопасности. Но&nbsp;развитие российских вендоров в&nbsp;2022‒2023&nbsp;гг. наконец-то открывает им&nbsp;полноценный доступ к&nbsp;рынку современных цифровых HR-инструментов." />
      </div>
    </>
  );
};

export { HrTech };
