import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import { Button } from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';

import { selectTileOrStripeView, switchTileOrStripeView } from './headerSlice';
import { Popup } from '../Popup/Popup';
import { useState } from 'react';

const Header = () => {
    const dispatch = useDispatch();
    const tileOrStripeView = useSelector(selectTileOrStripeView);

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <>
            <Popup close={() => setIsPopupOpen(false)} isOpen={isPopupOpen}>
                <p className={styles.textBox}>
                    Zgodnie z opisem zadania, jest to miejsce w którym mam opisać, co sprawiło mi
                    największy problem. Wydaję mi się, że problemem tym była nauka podstaw Redux'a
                    (nie miałem z nim wcześniej styczności) i zrozumienie w jakich przypadkach
                    wskazane jest jego wykorzystanie. Początkowo, tworząc ten właśnie popup,
                    chciałem by był on scentralizowanym "pojemnikiem". W aplikacji byłby tylko jeden
                    popup, umieszczony w Layout'cie, którego zawartość byłaby zmieniana z poziomu
                    różnych komponentów. Pomysł się nie sprawdził, gdyż (jak się dowiedziałem po
                    czasie) przechowywanie obiektów w postaci elementów React'owych jest
                    niewskazane.
                </p>
                <p className={styles.textBox}>
                    Nauka Redux'a sprawiła mi też największą frajdę. Poznawanie nowych możliwości, i
                    narzędzi do dalszej pracy jest dla mnie czymś escytującym. Poza tym całe zadanie
                    było przyjemnym doświadczeniem i pewnego rodzaju odskocznią, ze względu na małą
                    skalę projektu.
                </p>
            </Popup>
            <header className={styles.header}>
                <Button onClick={() => dispatch(switchTileOrStripeView())}>
                    {tileOrStripeView ? '⊟' : '⊞'}
                </Button>
                <Link to={'/'} className={styles.logoContainer}>
                    <img className={styles.logo} src={logo} alt={'logo'} />
                </Link>
                <Button onClick={() => setIsPopupOpen(true)}>ℹ</Button>
            </header>
        </>
    );
};

export { Header };
