import { Suspense, useEffect } from 'react';
import './styles/index.scss';
import { AppRouter } from './providers/router';

const tg = window.Telegram.WebApp;

function App() {
    
    useEffect(() => {
        tg.ready();
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
