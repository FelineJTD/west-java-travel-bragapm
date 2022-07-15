import React from 'react'
import Link from 'next/link';


export const TravelRecommendationItem = ({ data }) => {

    if (!data) return <a
        className='flex flex-col md:flex-row-reverse flex-none w-[254px] md:w-full md:justify-between hover:bg-bordercolor hover:bg-opacity-20 transition-all md:p-2'>
        <div className='rounded-md h-[160px] md:h-[80px] w-full md:w-[80px] bg-bordercolor animate-pulse object-cover mb-4 md:ml-20' />
        <div className='flex flex-col'>
            <div className='w-full h-6 bg-bordercolor animate-pulse mb-2.5 md:mb-3' />
            <div className='w-full h-12 bg-bordercolor animate-pulse mb-2.5 md:mb-3' />
            <div className='flex flex-row items-center justify-center'>
                <p className='px-4 py-2.5 rounded-full uppercase bg-bordercolor animate-pulse font-karla font-bold text-xs text-transparent'>topik 1</p>
                <div className='w-20 h-4 bg-bordercolor animate-pulse ml-4' />
            </div>
        </div>
    </a>

    const date = new Date(data.created_at);

    const errorImage = <img alt='' src='/img-about-thumbnail.jpg' className='rounded-md h-[160px] md:h-[80px] w-full md:w-[80px] object-cover mb-4 md:ml-20' />

    return (
        <Link href={`/travel-tips/${data.id}`}>
            <a
                className='flex flex-col md:flex-row-reverse flex-none max-w-[254px] md:max-w-full md:justify-between hover:bg-bordercolor hover:bg-opacity-20 transition-all md:p-2'>
                {!data.travel_tips_files ? errorImage : !data.travel_tips_files[0] ? errorImage : <img alt='' src={`https://panel.westjavatravel.com/assets/${data.travel_tips_files[0]}`} className='rounded-md h-[160px] md:h-[80px] w-full md:w-[80px] object-cover mb-4 md:ml-20' />}
                <div className='flex flex-col'>
                    <h4 className='font-bold font-montserrat text-dark text-sm md:text-base mb-2.5 md:mb-3 twoline-text'>{data.title}</h4>
                    <p className='font-karla text-neutral text-xs md:text-sm mb-2.5 md:mb-3 twoline-text'>{data.deskripsi}</p>
                    <div className='flex flex-row items-center'>
                        <p className='px-4 py-2.5 rounded-full uppercase bg-[#E4ECF4] font-karla font-bold text-xs text-neutral'>{data.topik[0]}</p>
                        <p className='font-karla text-neutral text-xs ml-4'>{date.toDateString()}</p>
                    </div>
                </div>
            </a>
        </Link>
    )
}
