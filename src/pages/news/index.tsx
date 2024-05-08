import React from 'react';

interface NewsItem {
    id: number;
    title: string;
    content: string;
    date: string;
}

interface NewsProps {
    news: NewsItem[];
}

const News: React.FC<NewsProps> = ({ news }) => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">Latest News</h2>
            <p>This page needs your opinion</p>
            {news.map(item => (
                <div key={item.id} className="bg-white rounded-lg shadow-md p-6 mb-4">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-700 mb-2">{item.date}</p>
                    <p className="text-gray-600">{item.content}</p>
                </div>
            ))}
        </div>
    );
};

export default News;