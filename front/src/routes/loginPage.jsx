import SignIn from '../components/auth/login/login';
import {Helmet} from "react-helmet";
import Bottom from '../navigation/bottom';

export default function LoginPage(){
    return(
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Вход</title>
                <meta
                    name="description"
                    content="
                    Регистрация - 088.news - Новините от България на едно място.
                    Register - 088.news - Новините от България на едно място.
                    България Новини. Украйна Новини. Всичко слъчващо се в България."
                />
                <link rel="canonical" href="https://088.news/register" />
            </Helmet>
            <SignIn />
            <Bottom />
        </div>
    );
}