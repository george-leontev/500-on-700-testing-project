import axios from "axios";
import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react";
import { HttpConstants, routes } from "../constants";
import { NewsModel } from "../models/news-model";

type NewsContextType = {
    news: NewsModel[];
    isLoading: boolean;
};

const NewsContext = createContext<NewsContextType | undefined>(undefined);

export function NewsProvider({ children }: { children: ReactNode }) {
    const [news, setNews] = useState<NewsModel[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const getAllNewsAsync = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(routes.news);
            console.log(response);
            
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

    useEffect(() => {
        (async () => {
            const news = await getAllNewsAsync();

            if (news) {
                setNews(news);
            }
        })();
    }, [getAllNewsAsync]);

    return <NewsContext.Provider value={{ news, isLoading }}>{children}</NewsContext.Provider>;
}

export const useNews = () => {
    const context = useContext(NewsContext);
    if (context === undefined) {
        throw new Error("useNews must be used within a NewsProvider");
    }

    return context;
};
