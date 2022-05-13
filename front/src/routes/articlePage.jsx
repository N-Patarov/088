import Article from '../components/article';
import Header from '../navigation/fullHeader';
import Bottom from '../navigation/bottom';

export default function ArticlePage(){
    
    return(
        <div>
            <Header />
            <div style={{marginTop: '20px'}}>      
                <Article />
            </div>
            <Bottom />
        </div>
       
        
    );
}