import { Button } from 'antd'
import IconLekarstvo from '../../../../shared/assets/free-icon-medicine-8334231.png';
import IconListok from '../../../../shared/assets/listok.png';
import { useTranslation } from 'react-i18next';

export const Banner = ({ onScrollToPartners }: { onScrollToPartners: () => void }) => {
    const { t } = useTranslation();
    const filterStyle = {
        filter: 'invert(35%) sepia(100%) saturate(1000%) hue-rotate(90deg) brightness(100%) contrast(100%)',
    };

    return (
        <div className="container mx-auto max-w-screen-xl flex flex-col md:flex-row pt-12 md:pt-24 items-center">
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start px-4 md:px-8 lg:px-4">
                <div className="font-bold text-3xl md:text-5xl lg:text-6xl pb-5 text-center md:text-left">
                    {t('Аптека AJINIAZ QARAQALPAQ').toString()}
                </div>
                <div className="text-base md:text-lg lg:text-xl pt-3 font-medium text-gray-400 text-center md:text-left">
                    {t(
                        'Привет! Это AJINIAZ QARAQALPAQ - крупнейшая сеть аптек Каракалпакстана',
                    ).toString()}
                </div>
                <div className="flex flex-col md:flex-row py-7 justify-center md:justify-start">
                    <Button
                        onClick={onScrollToPartners}
                        type="primary"
                        danger
                        className="p-3 md:p-5 lg:p-7 text-lg md:text-xl lg:text-2xl"
                    >
                        {t('Оставить заявку').toString()}
                    </Button>
                </div>
            </div>
            <div className="w-full md:w-1/4 flex justify-center md:justify-end py-4 md:py-0">
                <img
                    src={IconListok}
                    style={filterStyle}
                    className="w-2/3 md:w-full max-w-xs md:max-w-sm lg:max-w-md"
                />
            </div>
            <div className="w-full md:w-1/4 flex justify-center md:justify-start py-4 md:py-0">
                <img
                    src={IconLekarstvo}
                    className="w-2/3 md:w-full max-w-xs md:max-w-sm lg:max-w-md"
                />
            </div>
        </div>
    );
};
