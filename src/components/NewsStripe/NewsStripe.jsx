import styles from './NewsStripe.module.css';
import { formatDate, formatHour } from '../../common/formatDate';

export const NewsStripe = ({ tileData, handleClick }) => {
    const { source, author, title, description, url, urlToImage, publishedAt, content } = tileData;

    return (
        <div onClick={handleClick} className={styles.newsStripe}>
            {urlToImage && (
                <div className={styles.imageContainer}>
                    <img src={urlToImage} alt={title} className={styles.image} />
                </div>
            )}
            <div className={styles.content}>
                <div className={styles.header1}>
                    <div>{`${(author && author + ',') || ''} ${source.name || ''}:`}</div>
                    <div>
                        {formatDate(publishedAt)}, at {formatHour(publishedAt)}
                    </div>
                </div>
                <header className={styles.header2}>{title}</header>
                {urlToImage && description && <main className={styles.main}>{description}</main>}
            </div>
        </div>
    );
};

NewsStripe.defaultProps = {
    source: '',
    author: '',
    title: '',
    description: '',
    url: '',
    urlToImage: '',
    publishedAt: '',
    content: '',
};
