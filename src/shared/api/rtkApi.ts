/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { BaseQueryFn, createApi } from '@reduxjs/toolkit/query/react';
import emailjs from 'emailjs-com';

interface FormData {
    user_name: string;
    user_email: string;
    phone: string;
    message: string;
}

const emailJsQueryFn: BaseQueryFn<
    FormData,
    void,
    { status: string; error: Error }
> = async (formData) => {
    try {
        emailjs.init('P0_nFNU4dowWYF3tQ');
        await emailjs.send(
            'service_k05x4q9',
            'template_1db2mfq',
            {
                user_name: formData.user_name,
                user_email: formData.user_email,
                phone: formData.phone,
                message: formData.message,
            },
        );
        return { data: undefined };
    } catch (error) {
        return { error: { status: 'CUSTOM_ERROR', error: error as Error } };
    }
};

export const rtkApi = createApi({
    reducerPath: 'formApi',
    baseQuery: emailJsQueryFn,
    endpoints: (builder) => ({
        submitForm: builder.mutation<void, FormData>({
            query: (formData) => formData,
        }),
    }),
});

export const { useSubmitFormMutation } = rtkApi;
