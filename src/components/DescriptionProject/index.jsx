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
      <h1 className={cn(styles.title, 'descriptionProjectTitleAnimation')}>
        {titleVisible && <span>{title}</span>}
      </h1>
      {descriptionVisible && (
        <TypeIt options={{ speed: 40 }} className={`${styles.description}`}>
          {description}
        </TypeIt>
      )}
      <div className={styles.descriptionLines} />
    </div>
  );
};

export { DescriptionProject };
