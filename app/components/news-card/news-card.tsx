import "./news-card.scss";
import { NewsModel } from "../../models/news-model";
import Image from "next/image";
import { formatDateToRussian } from "@/app/utils/format-date-to-russian";

type NewsCardPropsType = {
    news: NewsModel;
};

export const NewsCard = ({ news }: NewsCardPropsType) => {
    return (
        <div className='news-card'>
            <div className='news-image'>
                <Image src={news.imageSrc} width={440} height={300} alt={news.title} />
            </div>
            <div className='news-content'>
                <h3 className="news-title">{news.title}</h3>
                <p className='news-description'>{news.content}</p>
                <div className='news-date'>{formatDateToRussian(news.publicationDate)}</div>
            </div>
        </div>
    );
};
