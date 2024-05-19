import styles from "./index.module.scss";
import cn from "classnames";
import { Montserrat } from "next/font/google";

const myFont = Montserrat({ subsets: ["latin"] });

const SectionImage = ({ text, imageSrc, className }) => {
  return (
    <div
      style={{
        background: `url(${imageSrc})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
      className={cn(styles.imageWrapper, myFont.className, className)}
    >
      {text ? (
        <p className={styles.text} dangerouslySetInnerHTML={{ __html: text }} />
      ) : (
        ""
      )}
    </div>
  );
};

export { SectionImage };
