import React, { useEffect, useRef, useState } from 'react'
import { animate } from "motion"
import { HomeSectionTitle } from '../custom-component/TextComponent/HomeSectionTitle'

export const HomeAttractionSection = () => {
    const attractionItemRef = useRef();
    const [activeAttractionItem, setactiveAttractionItem] = useState(0);


    useEffect(() => {
        if (attractionItemRef.current) {
            const itemWidth = attractionItemRef.current.clientWidth;

            animate(
                '.attraction-items',
                { x: activeAttractionItem * -1 * itemWidth },
                {
                    duration: 0.5,
                    easing: "ease-in-out"
                }
            );
        }



    }, [activeAttractionItem])

    return (
        <section className='mb-10 relative'>
            <div className='w-full h-[315px] bg-gradient-to-b from-[#E4ECF4] to-pink-[#E4ECF4] absolute bottom-0 left-0 z-0 hidden md:block' />
            <div className='flex flex-col z-10 px-5 md:px-20'>
                <HomeSectionTitle title='attraction' />
                <h3 className='font-bold text-dark font-montserrat text-2xl md:text-5.5xl mt-6 md:pl-9 md:max-w-[700px] md:leading-tight z-10 capitalize'>Nikmati Banyak Aktivitas di Jawa Barat</h3>
                <p className='font-karla text-sm md:text-base text-neutral mt-4 md:pl-9 md:mt-5'>Ada banyak hal menyenangkan yang dapat Anda lakukan disini, mulai dari melihat pantai yang masih alami dengan ombak selancar yang luar biasa, memacu adrenalin dengan berbagai olahraga, mendaki gunung yang megah, hingga menikmati kehidupan perkotaan yang modern.</p>
            </div>
            <div className='flex flex-col z-10'>
                <div className='attraction-items flex flex-row mt-10 mb-5 md:mb-8 pl-5 md:pl-28'>
                    <div ref={attractionItemRef} className='pr-2 md:pr-4'>
                        <div className='flex-none h-[214px] w-[142px] md:w-[298px] md:h-[450px] rounded-md md:rounded-2lg overflow-hidden relative group'>
                            <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end p-4 md:pb-10 z-10 items-center'>
                                <h4 className='uppercase text-yellow text-shadow text-xs md:text-1.5xl font-montserrat font-bold'>adventure</h4>
                            </div>
                            <img src='img-home-mountain.jpg' alt='img-mountain' className='w-full h-full object-cover object-right group-hover:scale-125 transition duration-500' />
                        </div>
                    </div>
                    <div className='pr-2 md:pr-4'>
                        <div className='flex-none h-[214px] w-[142px] md:w-[298px] md:h-[450px] rounded-md md:rounded-2lg overflow-hidden relative group'>
                            <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end p-4 md:pb-10 z-10 items-center'>
                                <h4 className='uppercase text-yellow text-shadow text-xs md:text-1.5xl font-montserrat font-bold'>Coast & Beach</h4>
                            </div>
                            <img src='img-home-beach.jpg' alt='img-beach' className='w-full h-full object-cover object-right group-hover:scale-125 transition duration-500' />
                        </div>
                    </div>
                    <div className='pr-2 md:pr-4'>
                        <div className='flex-none h-[214px] w-[142px] md:w-[298px] md:h-[450px] rounded-md md:rounded-2lg overflow-hidden relative group'>
                            <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end p-4 md:pb-10 z-10 items-center'>
                                <h4 className='uppercase text-yellow text-shadow text-xs md:text-1.5xl font-montserrat font-bold'>nature</h4>
                            </div>
                            <img src='img-home-eastern.jpg' alt='img-nature' className='w-full h-full object-cover group-hover:scale-125 transition duration-500' />
                        </div>
                    </div>
                    <div className='pr-2 md:pr-4'>
                        <div className='flex-none h-[214px] w-[142px] md:w-[298px] md:h-[450px] rounded-md md:rounded-2lg overflow-hidden relative group'>
                            <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end p-4 md:pb-10 z-10 items-center'>
                                <h4 className='uppercase text-yellow text-shadow text-xs md:text-1.5xl font-montserrat font-bold'>Urban Life</h4>
                            </div>
                            <img src='img-home-urban.jpg' alt='img-urban' className='w-full h-full object-cover object-right group-hover:scale-125 transition duration-500' />
                        </div>
                    </div>
                    <div className='pr-2 md:pr-4'>
                        <div className='flex-none h-[214px] w-[142px] md:w-[298px] md:h-[450px] rounded-md md:rounded-2lg overflow-hidden relative group'>
                            <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end p-4 md:pb-10 z-10 items-center'>
                                <h4 className='uppercase text-yellow text-shadow text-xs md:text-1.5xl font-montserrat font-bold'>Shopping</h4>
                            </div>
                            <img src='/img-home-shopping.jpg' alt='img-mountain' className='w-full h-full object-cover object-right group-hover:scale-125 transition duration-500' />
                        </div>
                    </div>
                    <div className='pr-2 md:pr-4'>
                        <div className='flex-none h-[214px] w-[142px] md:w-[298px] md:h-[450px] rounded-md md:rounded-2lg overflow-hidden relative group'>
                            <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end p-4 md:pb-10 z-10 items-center'>
                                <h4 className='uppercase text-yellow text-shadow text-xs md:text-1.5xl font-montserrat font-bold'>Art & Cultures</h4>
                            </div>
                            <img src='/img-home-art.jpg' alt='img-mountain' className='w-full h-full object-cover object-right group-hover:scale-125 transition duration-500' />
                        </div>
                    </div>
                    <div className='pr-2 md:pr-4'>
                        <div className='flex-none h-[214px] w-[142px] md:w-[298px] md:h-[450px] rounded-md md:rounded-2lg overflow-hidden relative group'>
                            <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end p-4 md:pb-10 z-10 items-center'>
                                <h4 className='uppercase text-yellow text-shadow text-xs md:text-1.5xl font-montserrat font-bold'>RURAL LIFE</h4>
                            </div>
                            <img src='/img-home-rural-life.jpg' alt='img-mountain' className='w-full h-full object-cover object-right group-hover:scale-125 transition duration-500' />
                        </div>
                    </div>

                </div>
                <div className='flex flex-row justify-end mx-5 md:mx-20 space-x-2.5 md:space-x-4 z-10'>
                    <button
                        onClick={() => {
                            if (activeAttractionItem > 0) {
                                setactiveAttractionItem(activeAttractionItem - 1);
                            }
                        }}
                        className='w-[33.33px] md:w-[41.67px] h-[33.33px] md:h-[41.67px] rounded-full'>
                        <img alt='' src='ic-arrow-rounded.svg' />
                    </button>
                    <button
                        onClick={() => {
                            if (activeAttractionItem < 4) {
                                setactiveAttractionItem(activeAttractionItem + 1);
                            }
                        }}
                        className='w-[33.33px] md:w-[41.67px] h-[33.33px] md:h-[41.67px] rounded-full'>
                        <img src='ic-arrow-rounded.svg' alt='arrow rounded' className='transform rotate-180' />
                    </button>
                </div>
            </div>
        </section>
    )
}
