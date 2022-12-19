import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './style.module.scss';

export const Photo: React.FC<{ src: string }> = ({ src }) => {
    const { ref, inView } = useInView({
        threshold: 0.8,
    });

    React.useEffect(() => {
        console.log(inView);
    }, [inView]);

    // так же можно добавтиь атрибут loadingLazy вместе trigersOne

    return <div ref={ref}>
        {inView ? <img className={styles.img} src={src} /> : <div className={styles.skeleton}></div>}
    </div>
};