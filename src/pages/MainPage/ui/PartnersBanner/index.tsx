import { FormApplication } from '@/features/FormApplication';
import { useTranslation } from 'react-i18next';

const PartnersBanner = () => {
    const { t } = useTranslation();

    return (
        <div className="mt-16 py-8" style={{ backgroundColor: '#6a6a6a' }}>
            <div className="container mx-auto max-w-screen-xl px-4">
                <div className="flex flex-col lg:flex-row">
                    <div className="flex-1 flex flex-col lg:flex-row">
                        <div className="flex-1 flex flex-col justify-center items-center lg:items-start lg:pr-10 mb-10 lg:mb-0">
                            <FormApplication />
                        </div>

                        <div className="flex-1 flex flex-col justify-center items-center lg:items-start lg:pl-10">
                            <div
                                id="contact"
                                className="text-white text-center lg:text-left mb-6"
                            >
                                <h2 className="text-2xl font-bold mb-4">
                                    {t('Контактная информация')}
                                </h2>
                                <p className="mb-2">
                                    {t('Телефон')}: +998-73-133-33-33
                                </p>
                                <p className="mb-2">
                                    {t('Электронная почта')}: contact@pharmacy.com
                                </p>
                                <p className="mb-2">
                                    {t('Адрес')}: ул. Примерная, 123, Москва,
                                    Россия
                                </p>
                                <p>{t('Часы работы')}:</p>
                                <p className="mb-2">{t('Пн-Пт: 9:00 - 18:00')}</p>
                                <p>{t('Сб-Вс: 10:00 - 16:00')}</p>
                            </div>

                            <div
                                id="services"
                                className="text-white text-center lg:text-left mb-6"
                            >
                                <h3 className="text-xl font-semibold mb-4">
                                    {t('Наши услуги')}
                                </h3>
                                <ul className="list-disc list-inside">
                                    <li>{t('Бесплатная доставка')}</li>
                                    <li>{t('Консультация')}</li>
                                    <li>
                                        {t('Бесплатное измерение давлении')}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnersBanner;
