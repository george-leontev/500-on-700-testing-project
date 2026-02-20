import "./news-card.scss";
import { NewsModel } from "../../models/news-model";
import Image from "next/image";
import Link from "next/link";
import { formatDateToRussian } from "@/app/utils/format-date-to-russian";

type NewsCardPropsType = {
    news: NewsModel;
};

export const NewsCard = ({ news }: NewsCardPropsType) => {
    return (
        <div className='news-card'>
            <Link href={`/news/${news.id}`}>
                <div className='news-image'>
                    <Image src={news.imageSrc} width={440} height={300} alt={news.title} />
                </div>
            </Link>
            <div className='news-content'>
                <Link href={`/news/${news.id}`} className='news-title-link'>
                    <h3>{news.title}</h3>
                </Link>
                <p className='news-description'>{news.description}</p>
                <div className='news-date'>{formatDateToRussian(news.publicationDate)}</div>
            </div>
        </div>
    );
};
