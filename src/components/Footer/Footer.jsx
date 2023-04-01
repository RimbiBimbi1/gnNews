import styles from './Footer.module.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectNumberOfNews } from '../Feed/feedSlice';

export const Footer = () => {
    const numberOfNews = useSelector(selectNumberOfNews);
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
    }, []);

    const displayTime = () => {
        const h = time.getHours();
        const m = time.getMinutes();
        const s = time.getSeconds();

        const clock = [h, m, s].map(i => (i < 10 ? '0' + i : i));

        return `${clock[0]}:${clock[1]}:${clock[2]}`;
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.line}>Aktualna godzina: {displayTime()}</div>
            <div className={styles.line}>Ilość wyświetlanych news'ów: {numberOfNews}</div>
            <div className={styles.line}>
                Credits: <a href={'https://github.com/lipis/flag-icons'}>Lipis (flag icons)</a>
            </div>
            <div className={styles.line}>Copyright © 2023 Michał Szczepański </div>
        </footer>
    );
};
