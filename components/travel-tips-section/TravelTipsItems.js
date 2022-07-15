import React from 'react'
import Link from 'next/link'

export const TravelTipsItems = ({ data }) => {

    const loadingState = <div className='gap-8 md:gap-12 flex flex-col w-full'>
        <div
            className='flex flex-row'>
            <div className='flex flex-col flex-1'>
                <div className='w-full h-6 bg-bordercolor animate-pulse mb-2.5' />
                <div className='w-full h-12 bg-bordercolor animate-pulse mb-2.5' />
                <div className='flex flex-row items-center'>
                    <p className='px-4 py-2.5 rounded-full uppercase bg-bordercolor animate-pulse font-karla font-bold text-xs text-transparent'>topik 1</p>
                    <div className='w-20 h-4 bg-bordercolor animate-pulse ml-4' />
                </div>
            </div>
            <div className='rounded-md h-[80px] md:h-[140px] bg-bordercolor animate-pulse w-[80px] md:w-[140px] ml-8 md:ml-20' />
        </div>
        <div
            className='flex flex-row'>
            <div className='flex flex-col flex-1'>
                <div className='w-full h-6 bg-bordercolor animate-pulse mb-2.5' />
                <div className='w-full h-12 bg-bordercolor animate-pulse mb-2.5' />
                <div className='flex flex-row items-center'>
                    <p className='px-4 py-2.5 rounded-full uppercase bg-bordercolor animate-pulse font-karla font-bold text-xs text-transparent'>topik 1</p>
                    <div className='w-20 h-4 bg-bordercolor animate-pulse ml-4' />
                </div>
            </div>
            <div className='rounded-md h-[80px] md:h-[140px] bg-bordercolor animate-pulse w-[80px] md:w-[140px] ml-8 md:ml-20' />
        </div>
        <div
            className='flex flex-row'>
            <div className='flex flex-col flex-1'>
                <div className='w-full h-6 bg-bordercolor animate-pulse mb-2.5' />
                <div className='w-full h-12 bg-bordercolor animate-pulse mb-2.5' />
                <div className='flex flex-row items-center'>
                    <p className='px-4 py-2.5 rounded-full uppercase bg-bordercolor animate-pulse font-karla font-bold text-xs text-transparent'>topik 1</p>
                    <div className='w-20 h-4 bg-bordercolor animate-pulse ml-4' />
                </div>
            </div>
            <div className='rounded-md h-[80px] md:h-[140px] bg-bordercolor animate-pulse w-[80px] md:w-[140px] ml-8 md:ml-20' />
        </div>
    </div>

    if (!data) return loadingState
    if (!data.data) return loadingState

    return (
        <div className='gap-8 md:gap-12 flex flex-col w-full'>
            {data.data.map((tips) => {
                const date = new Date(tips.created_at);
                const errorImage = <img alt='' src='/img-about-thumbnail.jpg' className='rounded-md h-[80px] md:h-[140px] w-[80px] md:w-[140px] object-cover ml-8 md:ml-20' />
                return <Link key={tips.id} href={`/travel-tips/${tips.id}`}>
                    <a
                        className='flex flex-row'>
                        <div className='flex flex-col flex-1'>
                            <h4 className='font-bold font-montserrat text-dark text-sm md:text-xl mb-2.5 twoline-text '>{tips.title}</h4>
                            <p className='font-karla text-neutral text-xs md:text-base mb-2.5 twoline-text'>{tips.deskripsi}</p>
                            <div className='flex flex-row items-center'>
                                <p className='px-4 py-2.5 rounded-full uppercase bg-[#E4ECF4] font-karla font-bold text-xs text-neutral'>{tips.topik[0]}</p>
                                <p className='font-karla text-neutral text-xs ml-4'>{date.toDateString()}</p>
                            </div>
                        </div>
                        {!tips.travel_tips_files ? errorImage : !tips.travel_tips_files[0] ? errorImage : <img alt='' src={`https://panel.westjavatravel.com/assets/${tips.travel_tips_files[0]}`} className='rounded-md h-[80px] md:h-[140px] w-[80px] md:w-[140px] object-cover ml-8 md:ml-20' />}
                    </a>
                </Link>
            })}
        </div>

    )
}
