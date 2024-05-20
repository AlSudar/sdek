import styles from "./index.module.scss";
import { Montserrat } from "next/font/google";
import cn from "classnames";
import { useCallback, useEffect, useRef, useState } from "react";
import useWindowDimensions from "../../../utils";

const myFont = Montserrat({ subsets: ["latin"] });

const AnimationScklad = () => {
  const ref = useRef();
  const [imageWidth, setImageWidth] = useState(4);
  const { width } = useWindowDimensions();

  const onHadnlerMouseMove = useCallback((event) => {
    const procentX = Math.round(100 / (window.innerWidth / event.clientX));
    setImageWidth(procentX);
    // console.log(procentX);
  }, []);

  useEffect(() => {
    if (window) {
      ref.current = window;
    }
  }, []);

  const onHanlderMouseEnter = () => {
    if (ref.current) {
      ref.current.addEventListener("mousemove", onHadnlerMouseMove);
    }
  };

  const onHanlderMouseLeave = () => {
    if (ref.current) {
      ref.current.removeEventListener("mousemove", onHadnlerMouseMove);
    }
  };

  return (
    <section
      className={cn(styles.wrapper, myFont.className)}
      onMouseEnter={() => width && width > 768 && onHanlderMouseEnter()}
      onMouseLeave={() => width && width > 768 && onHanlderMouseLeave()}
    >
      <button
        style={{ left: `${imageWidth}%` }}
        className={styles.button}
        onMouseDownCapture={() => width && width < 768 && onHanlderMouseEnter()}
        onMouseUpCapture={() => width && width < 768 && onHanlderMouseLeave()}
      ></button>
      <div className={styles.firstImage} />
      <div style={{ width: `${imageWidth}%` }} className={styles.secondImage} />
      <h2 className={styles.subtitle}>Самонесущий склад</h2>
      <p className={styles.desc}>
        Быстровозводимый самонесущий склад от&nbsp;COMITAS
      </p>
    </section>
  );
};

export { AnimationScklad };
