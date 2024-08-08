import { useTranslation } from 'react-i18next';

export const FounderCompanyBanner = () => {
    const { t } = useTranslation();
    return (
        <div className="container mx-auto max-w-screen-xl px-4 lg:px-8 py-8 lg:py-12">
            <div className="text-3xl lg:text-5xl font-bold mb-6 lg:mb-10">{t('История')}</div>
            <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 mb-6 lg:mb-0 text-gray-400 leading-6 lg:leading-8 text-base lg:text-lg lg:pr-8">
                    {t(
                        'Название аптеки «Ажинияз Каракалпак» связано с историческим романом Каракалпакского поэта Караматдина Султанова, написанным в 1971 году, под названием «Ажинияз».',
                    )}
                    <br />
                    {t(
                        'Наследники поэта в 2017 году открыли свою первую аптеку под названием «Ажинияз Нукус», а с 2019 года предоставляют услуги под названием «Ажинияз Каракалпак».',
                    )}
                </div>
                <div className="lg:w-1/2 text-gray-400 leading-6 lg:leading-8 text-base lg:text-lg lg:pl-8">
                    {t(
                        '«Ажинияз Каракалпак» аптека в Узбекистане стала одной из первых, которая получила сертификат JPP. Этот сертификат подтверждает соответствие нашей аптеки мировым стандартам и гарантирует, что условия хранения лекарств полностью соответствуют предъявляемым требованиям.',
                    )}
                </div>
            </div>
        </div>
    );
};
