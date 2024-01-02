import Image from 'next/image';
import React from 'react';
import ButtonDark from '../ButtonDark/ButtonDark';

const Hero = ({src}) => {
    return (
        <div className='flex max-sm:flex-col justify-center  w-full h-[85vh] pl-4 max-w-screen-2xl mx-auto   '>
            <div className='w-[50%] max-sm:w-full flex flex-col justify-center max-sm:mt-96'>
                <div>
                    <h1 className='text-6xl max-md:text-5xl  leading-[5rem] max-sm:text-4xl font-bold max-sm:pr-4 '>We help people to
                    get appointment
                    in online</h1>
                </div>
                <div className='mt-8 max-sm:pr-4 '>
                    <p className='text-base font-medium mb-8'>
                    Lorem Media is a full-service social media agency. We offer businesses innovative solutions that deliver the right type of audience to you in the most effective strategies possible. We strive to develop a community around your business, polishing your branding, and improving your public relations.
                    </p>
                </div>
                <ButtonDark btnText={'Tour'}/>
            </div>
            <div className='w-[50%] max-sm:w-full max-sm:h-full  '>
                
                    <Image
                        src={src}
                        alt='Vector Image'
                        width={1000}
                        height={1000}
                    />
                
                
            </div>
        </div>
    );
};

export default Hero;
