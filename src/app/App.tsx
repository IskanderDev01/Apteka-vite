import { Suspense } from 'react';
import './styles/index.scss';
import { Navbar } from '@/widgets/Navbar/ui'
import { AppRouter } from './providers/router'

function App() {
    return (
        <div className='min-h-screen bg-cover'>
            <Navbar />
            <Suspense fallback="">
                <div className='flex relative'>
                    {<AppRouter />}
                </div>
            </Suspense>
        </div>
    );
}

export default App;
