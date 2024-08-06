import { useTranslation } from 'react-i18next';

export const FounderCompanyBanner = () => {
    const { t } = useTranslation();
    return (
        <div className="container mx-auto max-w-screen-xl flex flex-col lg:flex-row py-8 lg:py-12 px-4 lg:px-8">
            <div className="lg:basis-1/2 mb-8 lg:mb-0 font-normal text-gray-400 leading-6 lg:leading-8 text-base lg:text-lg lg:pr-12">
                {t(
                    'Название аптеки "АЖИНИЯЗ КАРАКАЛПАК" связано с историческим романом Каракалпакского поэта Караматдина Султанова, написанным в 1971 году, под названием "АЖИНИЯЗ", а также с тем, что поэт назвал свою аптеку в честь этого романа. Наследники поэта в 2017 году открыли свою первую аптеку под названием "АЖИНИЯЗ-НУКУС", а с 2019 года предоставляют услуги под названием "АЖИНИЯЗ КАРАКАЛПАК".',
                ).toString()}
            </div>
        </div>
    );
};
