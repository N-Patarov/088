import Article from '../components/article';
import Header from '../navigation/fullHeader';
import Bottom from '../navigation/bottom';
import {Helmet} from "react-helmet";

export default function ArticlePage(){
    
    return(
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Сатия</title>
                <meta
                    name="description"
                    content="Статия - 088.news - Новините от България на едно място.
                        България Новини. Украйна Новини. Всичко слъчващо се в България."
                />
                <link rel="canonical" href="https://088.news/" />
            </Helmet>
            <Header />
            <div style={{marginTop: '20px'}}>      
                <Article />
            </div>
            <Bottom />
        </div>
       
        
    );
}