import Image from 'next/image';
import React from 'react';
import ButtonDark from '../ButtonDark/ButtonDark';

const Hero = () => {
    return (
        <div className='flex justify-center w-full h-[85vh] pl-4'>
            <div className='w-[50%]  mt-36'>
                <div>
                    <h1 className='text-6xl leading-[5rem] font-bold'>We help people to
                    get appointment
                    in online</h1>
                </div>
                <div className='mt-8'>
                    <p className='text-base font-medium mb-8'>
                    Lorem Media is a full-service social media agency. We offer businesses innovative solutions that deliver the right type of audience to you in the most effective strategies possible. We strive to develop a community around your business, polishing your branding, and improving your public relations.
                    </p>
                </div>
                <ButtonDark btnText={'Tour'}/>
            </div>
            <div className='w-[50%] relative'>
                <div className='relative h-full w-full'>
                    <Image
                        src='/Vector.png'
                        alt='Vector Image'
                        layout='fill'
                        objectFit='cover'
                        className='z-30'
                    />
                </div>
                <div className='absolute top-32 left-0 w-full h-full z-40'>
                    <Image
                        src='/charcterLeft.png'
                        alt='Character Image'
                        // layout='fill'
                        width={500}
                        height={500}
                        objectFit='cover'
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
