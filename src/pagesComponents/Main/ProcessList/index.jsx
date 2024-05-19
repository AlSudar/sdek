import Image from "next/image";
import useWindowDimensions from "../../../utils/index";
import styles from "./index.module.scss";
import cn from "classnames";
import { SectionDescription } from "../../../components/SectionDescription";

const DATA = [
  {
    icon: "/main/processList/first.svg",
    size: {
      width: "47",
      heigth: "52",
    },
    title: "Погрузо-разгрузочные работы (ПРР)",
    list: [
      "телескопические конвейеры;",
      "автоматические системы погрузки/разгрузки",
      "роботы-погрузчики и&nbspроботы для укладки грузов на&nbspпаллеты",
    ],
  },
  {
    icon: "/main/processList/second.svg",
    size: {
      width: "57",
      heigth: "34",
    },
    title: "Хранение",
    list: [
      "краны-штабелеры для паллет и коробов («мини-лоад»)",
      "шаттлы для паллет и&nbspкоробов, в&nbspт.ч.&nbsp3D-шаттлы",
      "3D-системы «спутник-шаттл»",
      "роботы-штабелеры",
    ],
  },
  {
    icon: "/main/processList/third.svg",
    size: {
      width: "47",
      heigth: "45",
    },
    title:
      "Внутрискладские перемещения <br /> и&nbsp;производственная логистика",
    list: [
      "конвейерное оборудование",
      "рельсовые тележки",
      "роботы погрузчики и&nbspтранспортировщики",
    ],
  },
  {
    icon: "/main/processList/four.svg",
    size: {
      width: "47",
      heigth: "48",
    },
    title: "Сортировка и отбор грузов и&nbsp;посылок",
    list: [
      "автоматические сортировщики, в&nbspт.ч.&nbspвысокоскоростные",
      "роботы-сортировщики и&nbspманипуляторы",
      "системы отбора Pick-to-Light (отбор по&nbspсветовым индикаторам), Pick-by-Voice (отбор по&nbspголосовым командам)",
    ],
  },
  {
    icon: "/main/processList/five.svg",
    size: {
      width: "47",
      heigth: "47",
    },
    title: "Вспомогательные процессы",
    list: [
      "системы автоматического сканирования и&nbspраспознавания данных",
      "системы автоматического взвешивания грузов и&nbspпосылок",
      "системы автоматического измерения габаритов грузов и&nbspпосылок",
    ],
  },
];

const ProcessList = () => {
  const { width } = useWindowDimensions();

  return (
    <>
      <Image
        alt=""
        className={styles.image}
        src="/main/processList/figure.jpg"
        width={504}
        height={324}
      />
      <div>
        <div className={styles.content}>
          {DATA.map((item, id) => {
            return (
              <div key={id} className={styles.item}>
                <img
                  className={styles.itemImage}
                  alt=""
                  src={item.icon}
                  style={{
                    width:
                      width && width < 768
                        ? `${item.size / 10}rem`
                        : `${item.size}px	`,
                  }}
                />
                <div
                  className={cn(
                    styles.itemContent,
                    id === DATA.length - 1 ? styles.itemLastContent : ""
                  )}
                >
                  <p
                    className={styles.itemTitle}
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  <ul className={styles.itemList}>
                    {item.list.map((item, id) => (
                      <li
                        key={id}
                        dangerouslySetInnerHTML={{ __html: item }}
                        className={styles.itemListText}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        <SectionDescription text="Немало клиентов обращаются за&nbsp;полной комплексной автоматизацией. Особенно это заметно в&nbsp;производстве: компании хотят сразу строить автоматизированные склады там, где выпускают продукцию. И&nbsp;количество таких складов при локальном производстве, на&nbsp;наш взгляд, будет расти. При этом растет количество запросов и&nbsp;по&nbsp;локальной автоматизации процессов. Эти запросы как правило приходят от&nbsp;компаний, которые хотят модернизировать текущие складские площади." />
      </div>
    </>
  );
};

export { ProcessList };
