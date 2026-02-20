"use client";

import "./news.scss";
import { NewsCard } from "../components/news-card/news-card";
import { NewsProvider, useNews } from "../context/news-context";
import { NewsModel } from "../models/news-model";

const HomePageInternal = () => {
    const { news, isLoading } = useNews();

    if (isLoading) {
        return <div>Загрузка новостей...</div>;
    }

    if (!news || news.length === 0) {
        return <div>Нет новостей для отображения</div>;
    }

    return (
        <div className='news-page'>
            <h1 className='news-page-title'>НОВОСТИ</h1>
            <div className='news-grid'>
                {news.map((n: NewsModel) => {
                    return (
                        <div key={n.id}>
                            <NewsCard news={n} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const HomePage = () => {
    return (
        <NewsProvider>
            <HomePageInternal />
        </NewsProvider>
    );
};

export default HomePage;
