import { useTranslation } from 'react-i18next';

interface CardInfo {
    title: string;
    text: string;
}

export const DignityApteka = () => {
    const { t } = useTranslation();

    const cardInfo: CardInfo[] = [
        {
            title: 'Качественные лекарства',
            text: 'Мы предлагаем только сертифицированные и высококачественные препараты.',
        },
        {
            title: 'Низкие цены',
            text: 'Наши цены доступны каждому, чтобы вы могли заботиться о своем здоровье без лишних затрат.',
        },
        {
            title: 'Опытные фармацевты',
            text: 'Наши фармацевты имеют большой опыт и помогут вам выбрать нужное средство.',
        },
        {
            title: 'Измерение давления',
            text: 'Предлагаем бесплатное измерение артериального давления.',
        },
        {
            title: 'Полезные напитки',
            text: 'Предлагаем полезные для здоровья напитки (компот и мохито).',
        },
        {
            title: 'Бесплатная доставка',
            text: 'Осуществляем бесплатную доставку ваших заказов.',
        },
    ];
    return (
        <div className="container mx-auto max-w-screen-xl flex flex-col items-center py-8 px-4 md:px-8  bg-white rounded-lg">
            <h2 className="text-5xl font-bold mb-10 text-center">
                {t('Преимущества нашей аптеки')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cardInfo.map((item) => (
                    <div className="bg-white border border-gray-200 p-6 transform transition-transform ">
                        <h3 className="text-2xl font-semibold mb-2">
                            {t(item.title)}
                        </h3>
                        <p className="text-gray-700">
                            {t(item.text)}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};
