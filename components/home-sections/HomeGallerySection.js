import React from 'react';

export const HomeGallerySection = () => {

    return (
        <div className='flex flex-row w-[2302px] md:w-[4604px] overflow-hidden pt-24 z-10 animate-autoscrollmobile md:animate-autoscroll'>
            <div className='flex flex-none flex-col space-y-2 md:space-y-4 w-[21%]'>
                <div className='flex flex-row items-end w-full'>
                    <div className='w-[30%] pl-2 md:pl-4 pr-1 md:pr-2'>
                        <img src='img-home-southern.jpg' alt='img-home-southern' className='h-[104px] md:h-[208px] hover:scale-105 transition duration-500 rounded md:rounded-xl w-full object-cover' />
                    </div>
                    <div className='w-[30%] px-1 md:px-2'>
                        <img src='img-home-jan.jpg' alt='img-home-jan' className='md:h-[232.73px] h-[116.365px] hover:scale-105 transition duration-500 rounded md:rounded-xl w-full object-cover' />
                    </div>
                    <div className='w-[40%] px-1 md:px-2'>
                        <img src='img-home-april.jpg' alt='img-home-april' className='md:h-[165.42px] h-[82.71px] hover:scale-105 transition duration-500 rounded md:rounded-xl w-full object-cover' />
                    </div>
                </div>
                <div className='flex flex-row items-start w-full'>
                    <div className='w-[23%] pl-2 md:pl-4 pr-1 md:pr-2'>
                        <img src='img-gallery-1-4.png' alt='img-gallery-1-4' className='hover:scale-105 transition duration-500 rounded md:rounded-xl w-full' />
                    </div>
                    <div className='flex flex-col space-y-2 md:space-y-4 w-[22%] px-1 md:px-2'>
                        <img src='img-home-mountain.jpg' alt='img-mountain' className='h-[124px] md:h-[248px] hover:scale-105 transition duration-500 rounded md:rounded-xl w-full object-cover object-right' />
                        <img src='img-home-may.jpg' alt='img-home-may' className='md:h-[128.89px] h-[64.445px] hover:scale-105 transition duration-500 rounded md:rounded-xl w-full object-cover' />
                    </div>
                    <div className='flex flex-col space-y-2 md:space-y-4 w-[32%] px-1 md:px-2'>
                        <img src='img-gallery-1-7.png' alt='img-gallery-1-7' className='hover:scale-105 transition duration-500 rounded md:rounded-xl w-full' />
                        <img src='img-home-feb.jpg' alt='img-home-feb' className='md:h-[165.08px] h-[82.54px] hover:scale-105 transition duration-500 rounded md:rounded-xl w-full object-cover object-right' />
                    </div>
                    <div className='w-[23%] px-1 md:px-2'>
                        <img src='img-gallery-1-9.png' alt='img-gallery-1-9' className='hover:scale-105 transition duration-500 rounded md:rounded-xl w-full' />
                    </div>
                </div>
            </div>
            <div className='flex flex-none flex-col space-y-2 md:space-y-4 mt-16 md:mt-32 w-[9%] px-1 md:px-2'>
                <img src='img-gallery-2-1.png' alt='img-gallery-2-1' className='hover:scale-105 transition duration-500 rounded md:rounded-xl' />
                <div className='flex flex-row items-start w-full'>
                    <div className=' w-[35%] pr-1 md:pr-2'>
                        <img alt='' src='img-gallery-2-2.png' className='hover:scale-105 transition duration-500 rounded md:rounded-xl w-full' />
                    </div>
                    <div className='w-[65%] pl-1 md:pl-2'>
                        <img alt='' src='img-gallery-2-3.png' className='hover:scale-105 transition duration-500 rounded md:rounded-xl w-full' />
                    </div>
                </div>
            </div>
            <div className='flex flex-none flex-row w-[20%]'>
                <div className='flex flex-col space-y-2 md:space-y-4 w-full'>
                    <div className='flex flex-row items-end w-full'>
                        <div className=' w-[28%] px-1 md:px-2'>
                            <img alt='' src='img-home-western.jpg' className='md:h-[265.98px] h-[132.99px] hover:scale-105 transition duration-500 rounded md:rounded-xl w-full object-cover object-right' />
                        </div>
                        <div className='flex flex-col space-y-2 md:space-y-4 items-start w-[72%]'>
                            <div className='flex flex-row w-full'>
                                <div className='w-[42%] px-1 md:px-2'>
                                    <img alt='' src='img-gallery-3-2.png' className='hover:scale-105 transition duration-500 rounded md:rounded-xl w-full' />
                                </div>
                                <div className='w-[58%] pl-1 md:pl-2'>
                                    <img alt='' src='img-gallery-3-4.png' className='hover:scale-105 transition duration-500 rounded md:rounded-xl w-full' />
                                </div>
                            </div>
                            <div className='w-[57%] px-1 md:px-2'>
                                <img alt='' src='img-gallery-3-3.png' className='hover:scale-105 transition duration-500 rounded md:rounded-xl w-full' />

                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row items-start w-full'>
                        <div className=' w-[35%] px-1 md:px-2'>
                            <img alt='' src='img-gallery-3-6.png' className='hover:scale-105 transition duration-500 rounded md:rounded-xl w-full' />
                        </div>
                        <div className='w-[34%] px-1 md:px-2'>
                            <img alt='' src='img-gallery-3-7.png' className='hover:scale-105 transition duration-500 rounded md:rounded-xl w-full' />
                        </div>
                        <div className='flex flex-col space-y-2 md:space-y-4 items-end transform -translate-y-22 md:-translate-y-44 w-[31%] pl-1 md:pl-2'>
                            <img alt='' src='img-home-eastern.jpg' className='md:h-[235.52px] h-[117.76px] hover:scale-105 transition duration-500 rounded md:rounded-xl w-full object-cover' />
                            <img alt='' src='img-home-central.jpg' className='md:h-[195.6px] h-[97.8px] hover:scale-105 transition duration-500 rounded md:rounded-xl w-full object-cover' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-none flex-col space-y-2 md:space-y-4 w-[21%]'>
                <div className='flex flex-row items-end w-full'>
                    <div className='w-[30%] pl-2 md:pl-4 pr-1 md:pr-2'>
                        <img alt='' src='img-home-southern.jpg' className='h-[104px] md:h-[208px] hover:scale-105 transition duration-500 rounded md:rounded-xl w-full object-cover' />
                    </div>
                    <div className='w-[30%] px-1 md:px-2'>
                        <img alt='' src='img-home-jan.jpg' className='md:h-[232.73px] h-[116.365px] hover:scale-105 transition duration-500 rounded md:rounded-xl w-full object-cover' />
                    </div>
                    <div className='w-[40%] px-1 md:px-2'>
                        <img alt='' src='img-home-april.jpg' className='md:h-[165.42px] h-[82.71px] hover:scale-105 transition duration-500 rounded md:rounded-xl w-full object-cover' />
                    </div>
                </div>
                <div className='flex flex-row items-start w-full'>
                    <div className='w-[23%] pl-2 md:pl-4 pr-1 md:pr-2'>
                        <img alt='' src='img-gallery-1-4.png' className='hover:scale-105 transition duration-500 rounded md:rounded-xl w-full' />
                    </div>
                    <div className='flex flex-col space-y-2 md:space-y-4 w-[22%] px-1 md:px-2'>
                        <img src='img-home-mountain.jpg' alt='img-mountain' className='h-[124px] md:h-[248px] hover:scale-105 transition duration-500 rounded md:rounded-xl w-full object-cover object-right' />
                        <img alt='' src='img-home-may.jpg' className='md:h-[128.89px] h-[64.445px] hover:scale-105 transition duration-500 rounded md:rounded-xl w-full object-cover' />
                    </div>
                    <div className='flex flex-col space-y-2 md:space-y-4 w-[32%] px-1 md:px-2'>
                        <img alt='' src='img-gallery-1-7.png' className='hover:scale-105 transition duration-500 rounded md:rounded-xl w-full' />
                        <img alt='' src='img-home-feb.jpg' className='md:h-[165.08px] h-[82.54px] hover:scale-105 transition duration-500 rounded md:rounded-xl w-full object-cover object-right' />
                    </div>
                    <div className='w-[23%] px-1 md:px-2'>
                        <img alt='' src='img-gallery-1-9.png' className='hover:scale-105 transition duration-500 rounded md:rounded-xl w-full' />
                    </div>
                </div>
            </div>
            <div className='flex flex-none flex-col space-y-2 md:space-y-4 mt-16 md:mt-32 w-[9%] px-1 md:px-2'>
                <img alt='' src='img-gallery-2-1.png' className='hover:scale-105 transition duration-500 rounded md:rounded-xl' />
                <div className='flex flex-row items-start w-full'>
                    <div className=' w-[35%] pr-1 md:pr-2'>
                        <img alt='' src='img-gallery-2-2.png' className='hover:scale-105 transition duration-500 rounded md:rounded-xl w-full' />
                    </div>
                    <div className='w-[65%] pl-1 md:pl-2'>
                        <img alt='' src='img-gallery-2-3.png' className='hover:scale-105 transition duration-500 rounded md:rounded-xl w-full' />
                    </div>
                </div>
            </div>
            <div className='flex flex-none flex-row w-[20%]'>
                <div className='flex flex-col space-y-2 md:space-y-4 w-full'>
                    <div className='flex flex-row items-end w-full'>
                        <div className=' w-[28%] px-1 md:px-2'>
                            <img alt='' src='img-home-western.jpg' className='md:h-[265.98px] h-[132.99px] hover:scale-105 transition duration-500 rounded md:rounded-xl w-full object-cover object-right' />
                        </div>
                        <div className='flex flex-col space-y-2 md:space-y-4 items-start w-[72%]'>
                            <div className='flex flex-row w-full'>
                                <div className='w-[42%] px-1 md:px-2'>
                                    <img alt='' src='img-gallery-3-2.png' className='hover:scale-105 transition duration-500 rounded md:rounded-xl w-full' />
                                </div>
                                <div className='w-[58%] pl-1 md:pl-2'>
                                    <img alt='' src='img-gallery-3-4.png' className='hover:scale-105 transition duration-500 rounded md:rounded-xl w-full' />
                                </div>
                            </div>
                            <div className='w-[57%] px-1 md:px-2'>
                                <img alt='' src='img-gallery-3-3.png' className='hover:scale-105 transition duration-500 rounded md:rounded-xl w-full' />

                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row items-start w-full'>
                        <div className=' w-[35%] px-1 md:px-2'>
                            <img alt='' src='img-gallery-3-6.png' className='hover:scale-105 transition duration-500 rounded md:rounded-xl w-full' />
                        </div>
                        <div className='w-[34%] px-1 md:px-2'>
                            <img alt='' src='img-gallery-3-7.png' className='hover:scale-105 transition duration-500 rounded md:rounded-xl w-full' />
                        </div>
                        <div className='flex flex-col space-y-2 md:space-y-4 items-end transform -translate-y-22 md:-translate-y-44 w-[31%] pl-1 md:pl-2'>
                            <img alt='' src='img-home-eastern.jpg' className='md:h-[235.52px] h-[117.76px] hover:scale-105 transition duration-500 rounded md:rounded-xl w-full object-cover' />
                            <img alt='' src='img-home-central.jpg' className='md:h-[195.6px] h-[97.8px] hover:scale-105 transition duration-500 rounded md:rounded-xl w-full object-cover' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
