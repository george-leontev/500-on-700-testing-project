import axios from "axios";
import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react";
import { HttpConstants, routes } from "../constants";
import { NewsModel } from "../models/news-model";

type NewsContextType = {
    news: NewsModel[];
    isLoading: boolean;
    getNewsByIdAsync: (id: number) => Promise<NewsModel | undefined>;
};

const NewsContext = createContext<NewsContextType | undefined>(undefined);

export function NewsProvider({ children }: { children: ReactNode }) {
    const [news, setNews] = useState<NewsModel[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const getAllNewsAsync = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(routes.news);

            await new Promise((resolve) => setTimeout(resolve, 800));

            if (response && response.data && response.status == HttpConstants.StatusCodes.Ok) {
                const news = response.data as NewsModel[];

                return news;
            }
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const getNewsByIdAsync = useCallback(async (id: number) => {
        setIsLoading(true);
        try {
            const response = await axios.get(routes.news);

            if (response && response.data && response.status === 200) {
                const allNews = response.data as NewsModel[];
                const newsItem = allNews.find((item) => item.id === id);

                await new Promise((resolve) => setTimeout(resolve, 500));

                if (!newsItem) {
                    return;
                }

                return newsItem;
            }
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        (async () => {
            const news = await getAllNewsAsync();

            if (news) {
                setNews(news);
            }
        })();
    }, [getAllNewsAsync]);

    return <NewsContext.Provider value={{ news, isLoading, getNewsByIdAsync }}>{children}</NewsContext.Provider>;
}

export const useNews = () => {
    const context = useContext(NewsContext);
    if (context === undefined) {
        throw new Error("useNews must be used within a NewsProvider");
    }

    return context;
};
