/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { BaseQueryFn, createApi } from '@reduxjs/toolkit/query/react';
import emailjs from 'emailjs-com';


const emailJsQueryFn: BaseQueryFn<
    any,
    void,
    { status: string; error: Error }
> = async () => {
    try {
        emailjs.init('P0_nFNU4dowWYF3tQ');
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
