import styles from './SideMenu.module.css';
import { useState } from 'react';
import { flagsSvg } from '../../img/flags/flags';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const SideMenu = () => {
    const [unwind, setUnwind] = useState(false);

    const countries = [
        { code: 'gb', emoji: '🇬🇧', name: 'Great Britain' },
        { code: 'us', emoji: '🇺🇸', name: 'United States' },
        { code: 'pl', emoji: '🇵🇱', name: 'Poland' },
        { code: 'ua', emoji: '🇺🇦', name: 'Ukraine' },
        { code: 'ru', emoji: '🇷🇺', name: 'Russia' },
        { code: 'de', emoji: '🇩🇪', name: 'Germany' },
        { code: 'fr', emoji: '🇫🇷', name: 'France' },
        { code: 'it', emoji: '🇮🇹', name: 'Italy' },
        { code: 'in', emoji: '🇮🇳', name: 'India' },
        { code: 'cn', emoji: '🇨🇳', name: 'China' },
        { code: 'jp', emoji: '🇯🇵', name: 'Japan' },
    ];

    const renderFlags = () => {
        return countries.map(country => (
            <Link
                to={`/country/${country.code}`}
                key={country.code}
                className={styles.flagContainer}
            >
                <img
                    alt={country.name}
                    src={flagsSvg[country.code]}
                    className={styles.flagSvg}
                ></img>
                <div className={styles.flagLabel}>{country.name}</div>
            </Link>
        ));
    };

    return (
        <div className={styles.sideMenuContainer}>
            <div className={`${styles.sideMenu} ${unwind ? styles.unwind : ''}`}>
                <nav className={styles.flagMenu}>{renderFlags()}</nav>
                <button onClick={() => setUnwind(!unwind)} className={styles.unwindButton}></button>
            </div>
        </div>
    );
};
