"use client";

import "./news-item.scss";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { NewsProvider, useNews } from "@/app/context/news-context";
import { NewsModel } from "@/app/models/news-model";
import { formatDateToRussian } from "@/app/utils/format-date-to-russian";
import { Footer } from "@/app/components/footer/footer";
import { backArrow } from "@/app/assets";
import Link from "next/link";

type NewsDetailPageParams = {
    id: string;
};

const NewsItemPageInternal = () => {
    const { getNewsByIdAsync } = useNews();
    const params = useParams<NewsDetailPageParams>();
    const newsId = Number(params.id);
    const [newsItem, setNewsItem] = useState<NewsModel>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const newsItem = await getNewsByIdAsync(newsId);
            if (newsItem) {
                setNewsItem(newsItem);
            }
            setIsLoading(false);
        })();
    }, [getNewsByIdAsync, newsId]);

    if (isLoading) {
        return <div className='status-message'>Загрузка новости...</div>;
    }

    if (!newsItem) {
        return <div className='status-message'>Новость не найдена!</div>;
    }

    return (
        <div className='page-wrapper'>
            <div className='news-item-container'>
                <div className='news-image-section'>
                     <Link href={"/news"} className='back-to-news-link'>
                        <div className='back-to-news-container'>
                            <Image src={backArrow} alt='back-arrow' />
                            <p>Обратно к новостям</p>
                        </div>
                    </Link>
                    <Image
                        src={newsItem.imageSrc}
                        width={800}
                        height={600}
                        className='news-item-image'
                        alt={newsItem.title}
                        priority
                    />
                </div>

                <div className='news-content-section'>
                    <h1 className='news-item-title'>{newsItem.title}</h1>
                    <p className='news-item-date'>{formatDateToRussian(newsItem.publicationDate)}</p>
                    <div className='news-item-description'>{newsItem.description}</div>
                    <div className='news-item-content'>{newsItem.content}</div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

const NewsItemPage = () => {
    return (
        <NewsProvider>
            <NewsItemPageInternal />
        </NewsProvider>
    );
};

export default NewsItemPage;
