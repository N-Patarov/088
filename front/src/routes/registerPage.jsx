import Register from '../components/auth/register/register';
import Bottom from '../navigation/bottom';
import {Helmet} from "react-helmet";

export default function RegisterPage(){
    return(
        <div>
             <Helmet>
                <meta charSet="utf-8" />
                <title>Вход</title>
                <meta
                    name="description"
                    content="
                    Вход - 088.news - Новините от България на едно място.
                    Login - 088.news - Новините от България на едно място.
                    България Новини. Украйна Новини. Всичко слъчващо се в България."
                />
                <link rel="canonical" href="https://088.news/login" />
            </Helmet>
            <Register />
            <Bottom />
        </div>
    );
}