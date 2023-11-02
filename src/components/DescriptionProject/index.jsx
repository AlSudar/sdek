import { useState, useEffect } from 'react';
import styles from './index.module.scss';
import TypeIt from 'typeit-react';
import cn from 'classnames';

const DescriptionProject = ({ title, description }) => {
  const [titleVisible, setTitleVisible] = useState(false);
  const [descriptionVisible, setDescriptionVisible] = useState(false);

  function onEntry(entry) {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        setTitleVisible(true);
        setDescriptionVisible(true);
      }
    });
  }

  useEffect(() => {
    let options = { threshold: [0.5] };
    let observer = new IntersectionObserver(onEntry, options);
    let element = document.querySelector('.descriptionProjectTitleAnimation');
    observer.observe(element);

    return () => {};
  }, []);

  return (
    <div className={styles.descriptionWrapper}>
      <span className={styles.tooltip}>
        Реклама / АО «ЦРПА» / Erid: LdtCKMhpc
      </span>
      <h1 className={cn(styles.title, 'descriptionProjectTitleAnimation')}>
        {!titleVisible && <span>&nbsp;</span>}
        {titleVisible && <span>{title}</span>}
      </h1>
      <div className={styles.descriptionTextWrapper}>
        {descriptionVisible && (
          <TypeIt options={{ speed: 40 }} className={`${styles.description}`}>
            {description}
          </TypeIt>
        )}
        <p className={cn(styles.descriptionText, styles.description)}>
          {description}
        </p>
      </div>
      <div className={styles.descriptionLines} />
    </div>
  );
};

export { DescriptionProject };
