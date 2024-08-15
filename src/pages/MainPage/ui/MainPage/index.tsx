/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef } from 'react';
import { AboutCompanyBanner } from '../AboutCompanyBanner';
import { Banner } from '../Banner';
import { Filials } from '../Filials';
import { FounderCompanyBanner } from '../FounderCompanyBanner';
import PartnersBanner from '../PartnersBanner';
import { Navbar } from '@/widgets/Navbar/ui';
import { DignityApteka } from '../DignityApteka';
import { Button } from 'antd';

export const MainPage = () => {
    const partnersRef = useRef<HTMLDivElement | null>(null);
    const founderRef = useRef<HTMLDivElement | null>(null);
    const filialsRef = useRef<HTMLDivElement | null>(null);

    const scrollOffset = -80;
    const scrollHistory = -30;
    const handleScrollFilials = () => {
        if (filialsRef.current) {
            const topPosition = filialsRef.current.offsetTop + scrollOffset;
            window.scrollTo({ top: topPosition, behavior: 'smooth' });
        }
    };

    const handleScrollToPartners = () => {
        if (partnersRef.current) {
            partnersRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleScrollToFounder = () => {
        if (founderRef.current) {
            const topPosition = founderRef.current.offsetTop + scrollHistory;
            window.scrollTo({ top: topPosition, behavior: 'smooth' });
        }
    };

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="font-sans">
            <Navbar
                onScrollToPartners={handleScrollToPartners}
                onScrollToFilials={handleScrollFilials}
                onScrollToFounder={handleScrollToFounder}
                onScrollTop = {handleScrollToTop}
            />
            <Banner onScrollToPartners={handleScrollToPartners} />
            <AboutCompanyBanner onScrollToFounder={handleScrollToFounder} />
            <div ref={filialsRef}>
                <Filials />
            </div>
            <div ref={founderRef}>
                <FounderCompanyBanner />
            </div>
            <DignityApteka />
            <div ref={partnersRef}>
                <PartnersBanner />
            </div>
            <Button
                onClick={handleScrollToTop}
                className="
        fixed 
        bottom-4 
        right-4 
        p-4 
        hover:!border-red-500 
        hover:!text-white 
        bg-white 
        text-red-500 
        border-2 
        rounded-full 
        shadow-lg 
        hover:!bg-red-500 
        transition-colors
        md:bottom-6 md:right-6
        lg:bottom-8 lg:right-8
        
    "
                aria-label="Scroll to top"
                shape="circle"
                size="large"
            >
                ↑
            </Button>
        </div>
    );
};
