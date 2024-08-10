import { Suspense, useEffect } from 'react';
import './styles/index.scss';
import { AppRouter } from './providers/router';

const tg = window.Telegram.WebApp;

function App() {
    
    useEffect(() => {
        // Проверяем, открыто ли приложение на мобильном устройстве
        const isMobile = /Mobi|Android/i.test(navigator.userAgent);
        if (isMobile) {
            // Можно перенаправить пользователя на другую страницу или показать сообщение
            document.body.innerHTML = '<h1>Это приложение доступно только на компьютере</h1>';
        } else {
            // Если не мобильное устройство, делаем Telegram WebApp ready
            tg.ready();
        }
    }, []);
    return (
        <div className="min-h-screen bg-cover">
            <Suspense fallback="">
                <div className="flex relative">{<AppRouter />}</div>
            </Suspense>
        </div>
    );
}

export default App;
