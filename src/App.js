import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from './components/NewsCards/NewsCards';

const alanKey = 'd836ffjjgj655j65mv8vf9ac7a65646fc72e956eca5nn4oos7jff0hhds4rw3gc/stage';

const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles }) => {
                if (command === 'newHeadlines') {
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                } else if (command === 'highlight') {
                    setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
                }
            }
        })
    }, [])

    return (
        <div className='greetingForLucy'>
            <h1 className='newsSource'>Lucinda news:</h1>
            <NewsCards articles={newsArticles} activeArticle={activeArticle} />
            <h1 className='newsSource'>Lucinda news:</h1>
            <div className='devLink'>
                <a
                    className="App-link"
                    href="https://github.com/Hacking-NASSA-with-HTML/Alan_AI_news_app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Give it a Star on github
                </a>
            </div>
        </div>
    )
}

export default App