import { useEffect, useState } from "react";
import Axios from 'axios';

import './article.css';

export default function Article(URL){
    const pathname = window. location. pathname
    const currentURL = window.location.href
    const url = currentURL.split("=")[1]

    

    const [ article, setArticle ] = useState();

    useEffect(() => {
        Axios.get("http://localhost:8000/article?id=" + url).then(
            (response) =>{
                setArticle(response.data.link);
            }
        )
    }, []);
    return(
        
        <iframe src={article} ></iframe>
    );
}
