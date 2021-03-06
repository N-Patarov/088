import { useEffect, useRef, useState} from "react";
import Axios from 'axios';

import './css/article.css';

export default function Article(){

    // just getting the source url for the iframe

    const url = window.location.href.split("=")[1]
   
    const [ article, setArticle ] = useState();
    const [ source, setSource ] = useState();
    const [ title, setTitle ] = useState();
    const notDisplaying = ["News.bg", "Vesti.bg", "Nova.bg", "Dir.bg", "Fakti.bg"];

    // Set the url title
    document.title = title;

    useEffect(() => {
        Axios.get(process.env.REACT_APP_API_URL + "/article?id=" + url).then(
            (response) =>{
                setArticle(response.data.link);
                setSource(response.data.source);
                setTitle(response.data.title);
            }
        )
    }, []);

    // just getting the source url for the iframe

    const handleIframeLoad = () => console.log(document.getElementById("frame").contentWindow.location);
    
    function CheckIframe (){
        if(!notDisplaying.includes(source)){
            console.log(source);
            console.log(article)
            return <iframe id="frame" src={article} onLoad={handleIframeLoad}></iframe>;
        } else{
            console.log(source);
            console.log(article)
            window.location.replace(article);
        }
    }

    return (
       <CheckIframe />
    );
}