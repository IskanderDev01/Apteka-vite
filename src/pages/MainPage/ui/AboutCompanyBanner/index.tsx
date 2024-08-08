import { useTranslation } from 'react-i18next';
import aptekaJpg from '../../../../shared/assets/ajiniazAptek.jpg';
import { Button } from 'antd'

export const AboutCompanyBanner = ({
    onScrollToFounder,
}: {
    onScrollToFounder: () => void;
}) => {
    const { t } = useTranslation();

    return (
        <div className="container px-4 mx-auto py-20 sm:py-24 md:py-32 lg:py-40 max-w-full lg:max-w-screen-xl flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start">
            <div className="flex-1 mb-16 lg:mb-0 lg:pr-10">
                <div className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-center lg:text-left">
                    {t('О нашей Аптеке').toString()}
                </div>
                <div className=" text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl pt-8 sm:pt-10 md:pt-12 lg:pt-8 pb-8 sm:pb-10 md:pb-12 lg:pb-14 leading-relaxed text-center lg:text-left">
                    {t(
                        'Наша первая аптека была открыта в 2017 году под названием «Ажинияз Нукус». С 2019 года мы предоставляем свои услуги под названием «Ажинияз Каракалпак».',
                    ).toString()}
                </div>
                <div className="flex justify-center lg:justify-start">
                    <Button
                        onClick={onScrollToFounder}
                        type="primary"
                        danger
                        className="mt-4 w-56 sm:mt-6 md:mt-7 p-4 sm:p-6 md:p-7 px-6 sm:px-8 md:px-10 text-base sm:text-lg md:text-xl"
                    >
                        {t('Узнать подробнее').toString()}
                    </Button>
                </div>
            </div>
            <div className="flex-1 flex justify-center lg:justify-end">
                <img
                    src={aptekaJpg}
                    alt="Аптека"
                    className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover"
                />
            </div>
        </div>
    );
};
