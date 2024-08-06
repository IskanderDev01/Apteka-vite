/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSubmitFormMutation } from '@/shared/api/rtkApi'
import { Button, Form, Input, message } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next'

export const FormApplication = () => {
    const {t} = useTranslation()
    const [submitForm] = useSubmitFormMutation();
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const onFinish = async (values: any) => {
        setLoading(true);
        try {
            await submitForm(values).unwrap();
            message.success(t('Форма отправлена успешно!').toString());
            form.resetFields();
        } catch (error) {
            message.error(t('Не удалось отправить форму').toString());
        } finally {
            setLoading(false);
        }
    };

    const validateMessages = {
        required: 'Введите ${label}',
        types: {
            email: '${label} недействительный адрес электронной почты!',
        },
    };

    return (
        <div className=' w-full'>
            <div className="w-full flex justify-center items-center p-4 sm:p-8 lg:p-10">
                <Form
                    form={form}
                    name="contactForm"
                    onFinish={onFinish}
                    validateMessages={validateMessages}
                    className="w-full max-w-lg bg-white shadow-lg p-6 sm:p-8 rounded-lg"
                    layout="vertical"
                >
                    <div className="text-xl mb-4 text-center font-semibold">
                        {t('Оставить заявку').toString()}
                    </div>
                    <Form.Item
                        name="user_name"
                        label={t('Имя').toString()}
                        rules={[{ required: true }]}
                    >
                        <Input className="p-2 border rounded-md focus:ring-2 focus:ring-red-500" />
                    </Form.Item>
                    <Form.Item
                        name="user_email"
                        label="Email"
                        rules={[{ type: 'email', required: true }]}
                    >
                        <Input className="p-2 border rounded-md focus:ring-2 focus:ring-red-500" />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        label={t('Телефон').toString()}
                        rules={[{ required: true }]}
                    >
                        <Input className="p-2 border rounded-md focus:ring-2 focus:ring-red-500" />
                    </Form.Item>
                    <Form.Item
                        name="message"
                        label={t('Сообщение').toString()}
                        rules={[{ required: true }]}
                    >
                        <Input.TextArea
                            className="p-2 border rounded-md focus:ring-2 focus:ring-red-500"
                            rows={4}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            danger
                            htmlType="submit"
                            loading={loading}
                            className="w-full bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-500 text-white p-2 rounded-md"
                        >
                            {t('Отправить').toString()}
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};
