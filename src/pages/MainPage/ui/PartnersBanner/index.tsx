import { FormApplication } from '@/features/FormApplication'
import IconDoctor from '../../../../shared/assets/doctor.png'

const PartnersBanner = () => {
    return (
        <div className="bg-red-200 mt-16 py-16">
            <div className="container mx-auto max-w-screen-xl flex flex-col lg:flex-row px-4">
                <div className="flex-1 flex flex-col justify-center items-center lg:items-start lg:pr-10 mb-10 lg:mb-0">
                    <FormApplication />
                </div>
                <div className="flex-1 flex justify-center lg:justify-end items-center">
                    <img
                        src={IconDoctor}
                        alt="Доктор"
                        className="max-w-full h-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default PartnersBanner;
