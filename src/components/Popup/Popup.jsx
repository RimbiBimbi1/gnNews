import styles from './Popup.module.css';
import { Button } from '../Button/Button';

export const Popup = ({ children, isOpen, close }) => {
    const handleClick = event => {
        event.stopPropagation();
    };

    return (
        <div className={styles.popupContainer}>
            <div onClick={close} className={`${styles.overlay} ${isOpen || styles.closed}`}>
                <div onClick={handleClick} className={styles.popup}>
                    {children}

                    <div className={styles.footer}>
                        <Button onClick={close} className={styles.closeButton}></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
