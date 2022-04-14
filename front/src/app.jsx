import { useEffect, useState } from "react";
import Axios from 'axios';

export default function App(){
    const [ listOfArticles, setListOfArticles ] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:8000/api").then(
            (response) =>{
                setListOfArticles(response.data);
            }
        )
    }, []);

    return(
        listOfArticles.map(
            (article) => {
                return( 
                    <div>
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                    </div>
                );
            }
            
        )
    );
}