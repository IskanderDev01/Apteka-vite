import { Select } from 'antd';
import i18n from 'i18next';

const { Option } = Select;

interface LanguageSwitcherProps {
    className?: string;
}

const LanguageSwitcher = (props: LanguageSwitcherProps) => {
    const {className} = props
    const handleChange = (value: string) => {
        i18n.changeLanguage(value);
    };

    return (
        <Select
            defaultValue="ru"
            style={{ width: 60 }}
            onChange={handleChange}
            className={className}
        >
            <Option value="en">En</Option>
            <Option value="ru">Ru</Option>
            <Option value="kk">Кк</Option>
        </Select>
    );
};

export default LanguageSwitcher;
