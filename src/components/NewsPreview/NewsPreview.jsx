import styles from './NewsPreview.module.css';
import { formatDate, formatHour } from '../../common/formatDate';
export const NewsPreview = ({ newsData }) => {
    const { source, author, title, description, url, urlToImage, publishedAt, content } = newsData;

    return (
        <div className={styles.newsPreview}>
            <article className={styles.content}>
                <div className={styles.header1}>
                    <div>{`${(author && author + ',') || ''} ${source?.name || ''}:`}</div>
                    <div>
                        {formatDate(publishedAt)}, at {formatHour(publishedAt)}
                    </div>
                </div>
                <header className={styles.header2}>{title}</header>

                {urlToImage && (
                    <div className={styles.imageContainer}>
                        <img src={urlToImage} alt={title} className={styles.image} />
                    </div>
                )}

                <main className={styles.main}>
                    <p>{description}</p>
                    <p>{content}</p>
                    <a target={'_blank'} className={styles.anchor} href={url}>
                        Click here to read more
                    </a>
                </main>
            </article>
        </div>
    );
};

NewsPreview.defaultProps = {
    source: '',
    author: '',
    title: '',
    description: '',
    url: '',
    urlToImage: '',
    publishedAt: '',
    content: '',
};
