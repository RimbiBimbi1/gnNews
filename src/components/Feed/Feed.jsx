import styles from './Feed.module.css';

import { useState, useEffect, useLayoutEffect } from 'react';

import { getNewsApiUrl, ENDPOINTS } from '../../api/newsApi';
import { useDispatch, useSelector } from 'react-redux';
import { NewsTile } from '../NewsTile/NewsTile';
import { NewsStripe } from '../NewsStripe/NewsStripe';
import { selectTileOrStripeView } from '../Header/headerSlice';
import { setNumberOfNews } from './feedSlice';
import { useParams } from 'react-router-dom';
import { Popup } from '../Popup/Popup';
import { NewsPreview } from '../NewsPreview/NewsPreview';

export const Feed = () => {
    const dispatch = useDispatch();

    const viewType = useSelector(selectTileOrStripeView);
    const feedStyle = viewType ? styles.feedTileContainer : styles.feedStripeContainer;

    const country = useParams();
    const [news, setNews] = useState([]);

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popupPreview, setPopupPreview] = useState([]);

    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 });
    }, [news]);

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        const getNews = async () => {
            const uri =
                country?.code == null
                    ? getNewsApiUrl(ENDPOINTS.everything, {
                          params: {
                              domains:
                                  'bbc.co.uk,techcrunch.com,thenextweb.com,engadget.com,google.com',
                              sortBy: 'popularity',
                              language: 'en',
                          },
                      })
                    : getNewsApiUrl(ENDPOINTS.topHeadlines, {
                          params: {
                              country: country.code,
                          },
                      });

            // const uri = getNewsApiUrl(ENDPOINTS.everything, {
            //     params: {
            //         domains: 'bbc.co.uk',
            //         sortBy: 'popularity',
            //         language: 'en',
            //     },
            // });

            try {
                const response = await fetch(uri);
                const json = await response.json();

                if (!response.ok) throw new Error(json?.message);

                setNews(json?.articles);
                dispatch(setNumberOfNews(json?.articles.length));
            } catch (e) {
                setIsPopupOpen(true);
                setError(e.message);
            }
        };

        getNews();
        setIsLoading(false);

        return () => {
            isMounted = false;
            controller.abort();
        };
    }, [country]);

    const renderNews = () => {
        const handleNewsClicked = newsData => {
            setIsPopupOpen(true);
            setPopupPreview([<NewsPreview key={'popupPreview'} newsData={newsData} />]);
        };

        if (viewType)
            return news.map(item => (
                <NewsTile
                    key={item.title}
                    tileData={item}
                    handleClick={() => handleNewsClicked(item)}
                />
            ));

        return news.map(item => (
            <NewsStripe
                key={item.title}
                tileData={item}
                handleClick={() => handleNewsClicked(item)}
            />
        ));
    };

    const handlePopupClosed = () => {
        setError(false);
        setIsPopupOpen(false);
    };

    return (
        <div className={feedStyle}>
            {renderNews()}
            <Popup isOpen={isPopupOpen} close={handlePopupClosed}>
                {error && 'Przepraszamy, coś poszło nie tak...'}
                {popupPreview}
            </Popup>
        </div>
    );
};
