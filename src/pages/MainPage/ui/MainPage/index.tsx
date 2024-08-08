import { useRef } from 'react';
import { AboutCompanyBanner } from '../AboutCompanyBanner'
import { Banner } from '../Banner'
import { Filials } from '../Filials'
import { FounderCompanyBanner } from '../FounderCompanyBanner'
import PartnersBanner from '../PartnersBanner'
import { Navbar } from '@/widgets/Navbar/ui'
import { DignityApteka } from '../DignityApteka'

export const MainPage = () => {
    const partnersRef = useRef<HTMLDivElement | null>(null);
    const founderRef = useRef<HTMLDivElement | null>(null);
    const filials = useRef<HTMLDivElement | null>(null)
    
    const handleScrollFilials = () => {
        if (filials.current) {
            filials.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleScrollToPartners = () => {
        if (partnersRef.current) {
            partnersRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleScrollToFounder = () => {
        if (founderRef.current) {
            founderRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className='font-sans'>
            <Navbar onScrollToPartners={handleScrollToPartners} onScrollToFilials={handleScrollFilials} onScrollToFounder={handleScrollToFounder}/>
            <Banner onScrollToPartners={handleScrollToPartners} />
            <AboutCompanyBanner onScrollToFounder={handleScrollToFounder} />
            <div ref={filials}>
                <Filials />
            </div>
            <div ref={founderRef}>
                <FounderCompanyBanner />
            </div>
            <DignityApteka />
            <div ref={partnersRef}>
                <PartnersBanner />
            </div>
        </div>
    );
};

