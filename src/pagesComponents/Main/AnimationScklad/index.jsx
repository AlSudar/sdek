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

  const onHadnlerMouseMove = useCallback(
    (event) => {
      if (width && width < 768) {
        const procentX = Math.round(
          100 / (window.innerWidth / event.touches[0].clientX)
        );
        setImageWidth(procentX);
      } else {
        const procentX = Math.round(100 / (window.innerWidth / event.clientX));
        setImageWidth(procentX);
      }
      // console.log(procentX);
    },
    [width]
  );

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

  const onHanlderTouchEnter = () => {
    if (ref.current) {
      ref.current.addEventListener("touchmove", onHadnlerMouseMove);
    }
  };

  const onHanlderTouchLeave = () => {
    if (ref.current) {
      ref.current.removeEventListener("touchmove", onHadnlerMouseMove);
    }
  };

  return (
    <section
      className={cn(styles.wrapper, myFont.className)}
      onMouseEnter={() => width && width > 768 && onHanlderMouseEnter()}
      onMouseLeave={() => width && width > 768 && onHanlderMouseLeave()}
    >
      <button
        onTouchStart={() => {
          width && width < 768 && onHanlderTouchEnter();
        }}
        style={{ left: `${imageWidth}%` }}
        className={styles.button}
        onTouchEnd={() => width && width < 768 && onHanlderTouchLeave()}
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
