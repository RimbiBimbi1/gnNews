import styles from './NewsTile.module.css';
import imgPlaceholder from '../../img/placeholder.jpeg';
import { formatDate, formatHour } from '../../common/formatDate';

export const NewsTile = ({ tileData, handleClick }) => {
    const { source, author, title, description, url, urlToImage, publishedAt, content } = tileData;

    return (
        <article onClick={handleClick} className={styles.newsTile}>
            <div className={styles.imageContainer}>
                <img src={urlToImage || imgPlaceholder} alt={title} className={styles.image} />
            </div>
            <div className={styles.overlay}>
                <div className={styles.titleBox}>{title}</div>
                <div className={styles.sourceBox}>{`by: ${(author && author + ',') || ''} ${
                    source.name || ''
                }`}</div>
                <div className={styles.dateBox}>
                    {formatDate(publishedAt)}, at {formatHour(publishedAt)}
                </div>
            </div>
        </article>
    );
};

NewsTile.defaultProps = {
    source: '',
    author: '',
    title: '',
    description: '',
    url: '',
    urlToImage: '',
    publishedAt: '',
    content: '',
};
