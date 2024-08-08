import { Menu, Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import LanguageSwitcher from '@/shared/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

interface NavbarProps {
    onScrollToPartners: () => void;
    onScrollToFounder: () => void;
    onScrollToFilials: () => void;
}

export const Navbar = ({
    onScrollToPartners,
    onScrollToFounder,
    onScrollToFilials,
}: NavbarProps) => {
    const { t } = useTranslation();
    const [drawerVisible, setDrawerVisible] = useState(false);

    const showDrawer = () => {
        setDrawerVisible(true);
    };

    const closeDrawer = () => {
        setDrawerVisible(false);
    };

    return (
        <div className="fixed w-full z-50 px-4 h-[60px] shadow-sm bg-white text-slate-900 font-poppins">
            <div className="container mx-auto max-w-screen-xl flex items-center justify-between h-full">
                <div className="text-2xl font-bold flex items-center">
                <svg
                        className="w-14"
                        version="1.1"
                        viewBox="0 0 900 900"
                        width="1280"
                        height="1280"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            transform="translate(0)"
                            d="m0 0h900v900h-900z"
                            fill="#FEFFFE"
                        />
                        <path
                            transform="translate(228,222)"
                            d="m0 0h30l23 4 20 6 16 8 16 10 10 9 8 7 11 14 7 10 8 17 6 18 3 14 1 18 3 2 15 2 18 5 16 8 11 7 13 11 2 4h2l10 14 9 17 5 15 3 17v19l-2 15-4 18-7 19-8 14-9 13-8 10-11 12-2 3h-2l-2 4-15 15-14 12-13 11-16 12-18 13-19 12-22 13-37 19h-7l-22-10-22-12-24-14-15-10-18-13-16-13-11-9-13-12-13-14-9-11-12-16-8-13-11-20-8-19-6-19-5-25-2-17-1-25 2-28 4-23 7-24 9-20 7-13 10-16 11-13 6-7h2v-2h2v-2l8-7 10-9 17-11 21-11 27-9z"
                            fill="#FC1C0B"
                        />
                        <path
                            transform="translate(316,297)"
                            d="m0 0h2l3 13 5 24 6 18 6 16 1 6-4 16-4 7 10-7 15-8 13-4 14-2h10l15 3 14 7 10 8 8 10 7 12 6 19 1 5v21l-5 15-6 11-6 7-5-1-3-4-1-15-1-9-4-7v-2l-6-1-3 24-5 20v22l3 14 3 7v5l-4 2-2 4-5 4h-2v2l-13 9-21 13-17 8-8 3-5-1-10-13-7-10-11-9-9-10-4-4-1-5 9 1-4-8 2-5 4-8 5 1 5 3 1-9 5-1 10 11h2l2-4 5-1 2 7 1 9 3 12 4 5 2 3h2l-1-14-1-2-1-13 2-6-6-1-9-5-5-7-4-10-4-17-3-3-8-16-3-7-1-13-3 3-5 8h-2l-2 4-5 5-8 6-12 7-6 2h-14l-7-2h-4v13l5 12 9 12 11 12 10 18 2 8-1 6-4 6-6 4-10 2-13-2-16-9-13-11-16-15-7-8-14-14-13-10-14-8-13-4-5-1h-19l1-3 32-10 9-6 7-7 8-15 4-14 2-12v-6l-5-5-9-8-6-10-5-11-2-9v-8l2-9 6-9 2-1 9 1 6 5 2 4 1 6 2 27 3 16 1 8h2l-1-3v-23l4-26 2-2 27-3 20-4 15-4 21-10 16-11 10-9 8-11z"
                            fill="#FEFFFE"
                        />
                        <path
                            transform="translate(722,463)"
                            d="m0 0h20l14 3 12 5 10 7 7 7 7 11 4 11 2 12v17l-3 16-5 13-6 11-9 10-7 6-15 6 29 7 12 2h15l10-2-2 4-7 8-9 7-14 7-12 3-16 1-16-3-21-7-27-12-18-10-11-9-7-7-1-3 1-17 9-72 3-6 5-5 10-8 16-8 13-4z"
                            fill="#0B0404"
                        />
                        <path
                            transform="translate(551,428)"
                            d="m0 0h43l3 8 15 50 1 4v21l-6 47-2 14-1 1h-12l-3-7-5-18-1-2h-49l-4 7-8 16-3 4h-35l-9-1 2-6 9-16 13-25 12-22 12-23 12-22 14-27z"
                            fill="#0C0404"
                        />
                        <path
                            transform="translate(628,435)"
                            d="m0 0h41v10l-8 64-8 65-2 15-4 13-7 12-8 8-10 6-12 4-6 1h-16l-14-2-6-2v-10l1-3 2-19 3-2 13 2 12-3 6-5 4-11 4-25 7-60 7-54z"
                            fill="#FC1C0B"
                        />
                        <path
                            transform="translate(725,497)"
                            d="m0 0h7l9 3 7 5 6 10 2 8v15l-4 16-6 9-9 9-5 3-8 2h-11l-9-3-5-4-6-9-3-9v-14l4-15 7-13 9-8 10-4z"
                            fill="#FEFFFE"
                        />
                        <path
                            transform="translate(567,470)"
                            d="m0 0h2l2 13 6 29v7h-31l3-9 11-24z"
                            fill="#FEFFFE"
                        />
                    </svg>
                </div>
                <div className="flex items-center">
                    <div className="hidden sm:flex ">
                            <div key="filials" onClick={onScrollToFilials} className='px-3 cursor-pointer hover:text-blue-400'>
                                {t('Филиалы')}
                            </div>
                            <div key="founder" onClick={onScrollToFounder} className='px-3 cursor-pointer hover:text-blue-400'>
                                {t('История')}
                            </div>
                            <div key="partners" onClick={onScrollToPartners} className='px-3 cursor-pointer hover:text-blue-400'>
                                {t('Оставить заявку')}
                            </div>
                    </div>
                    <LanguageSwitcher className="ml-4" />
                    <div className="sm:hidden">
                        <Button
                            icon={<MenuOutlined />}
                            onClick={showDrawer}
                            className="text-xl"
                            type="text"
                        />
                    </div>
                </div>
            </div>
            <Drawer
                title="Меню"
                placement="right"
                closable={true}
                onClose={closeDrawer}
                visible={drawerVisible}
                bodyStyle={{ padding: 0 }}
            >
                <Menu
                    mode="vertical"
                    className="text-lg"
                    onClick={({ key }) => {
                        if (key === 'filials') onScrollToFilials();
                        if (key === 'founder') onScrollToFounder();
                        if (key === 'partners') onScrollToPartners();
                    }}
                >
                    <Menu.Item key="filials">{t('Филиалы')}</Menu.Item>
                    <Menu.Item key="founder">{t('История')}</Menu.Item>
                    <Menu.Item key="partners">{t('Оставить заявку')}</Menu.Item>
                </Menu>
            </Drawer>
        </div>
    );
};
