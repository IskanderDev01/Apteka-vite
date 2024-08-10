import { Suspense, useEffect } from 'react';
import './styles/index.scss';
import { AppRouter } from './providers/router';

const tg = window.Telegram.WebApp;

function App() {
    
    useEffect(() => {
        // Проверяем, открыто ли приложение на компьютере (не мобильное устройство)
        const isMobile = /Mobi|Android/i.test(navigator.userAgent);
        if (!isMobile) {
            // Если устройство не мобильное, показываем сообщение или перенаправляем пользователя
            document.body.innerHTML = '<h1>Это приложение доступно только на мобильных устройствах</h1>';
            // Или перенаправляем пользователя на другую страницу
            // window.location.href = 'https://example.com';
        } else {
            // Если мобильное устройство, делаем Telegram WebApp ready
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
