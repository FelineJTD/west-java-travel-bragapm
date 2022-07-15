import React, { useState } from 'react'
import MemoIcPlayButton from '../custom-icons/IcPlayButton'

export const HomeStorySection = () => {
    const [isPlaying, setisPlaying] = useState('');
    return (
        <section className='py-10 md:py-20 relative'>
            <div className='w-full h-[617px] md:h-[758px] rounded-t-[30px] md:rounded-t-[60px] bg-gradient-to-b from-[#E4ECF4] to-pink-[#E4ECF4] absolute top-[380px] md:top-[290px] left-0 z-0' />
            <div className='flex flex-col md:flex-row-reverse md:items-center px-5 md:px-36 z-20'>
                <div className='flex flex-col z-20 md:pl-16'>
                    <h2 className='font-nothing-you-could-do text-blue text-3.5xl md:text-[2.5rem]'>Cerita Petualangan</h2>
                    <h1 className='font-bold font-montserrat text-dark text-3xl md:text-6xl	'>Berwisata Aman di Jawa barat</h1>
                    <p className='font-karla text-neutral text-sm md:text-base mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien sapien semper laoreet duis facilisis nisl risus vel. Velit nisl tincidunt dictum urna molestie. Lorem ipsum dolor sit amet</p>
                </div>
                <div
                    onMouseLeave={() => {
                        setisPlaying('');
                    }}
                    onMouseEnter={() => {
                        setisPlaying('?autoplay=1');
                    }}
                    className='group mt-5 md:mt-0 relative w-full md:w-[552px] h-[230px] md:h-[380px] flex-none'>
                    <div className='group-hover:opacity-0 group-hover:scale-125 transition-all duration-500 overflow-hidden rounded-2lg w-full h-full z-40'>
                        <img src='img-sample-home-story.jpg' alt='img-placeholder' className='w-full h-full object-cover object-center' />
                        <div className='w-full h-full bg-black absolute top-0 bg-opacity-20 rounded-2lg' />
                        <div className='w-full h-full absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
                            <button>
                                <MemoIcPlayButton className='scale-60 md:scale-100' />
                            </button>
                        </div>
                    </div>
                    <div className='absolute w-full h-full z-0 top-0 overflow-hidden rounded-2lg hidden opacity-0 group-hover:block group-hover:opacity-100 transition duration-500'>
                        <iframe
                            src={`https://www.youtube.com/embed/C2D0VTOa8-M${isPlaying}`}
                            frameBorder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen='1'
                            title='Embedded youtube'
                            className='w-full md:w-[552px] h-[230px] md:h-[380px] object-cover object-center z-0'
                        />
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-end mx-5 mt-8 md:mx-20 space-x-2.5 md:space-x-4 z-20'>
                <button className='w-[33.33px] md:w-[41.67px] h-[33.33px] md:h-[41.67px] rounded-full z-20'>
                    <img alt='' src='ic-arrow-rounded.svg' />
                </button>
                <button className='w-[33.33px] md:w-[41.67px] h-[33.33px] md:h-[41.67px] rounded-full z-20'>
                    <img alt='' src='ic-arrow-rounded.svg' className='transform rotate-180' />
                </button>
            </div>
        </section>
    )
}
