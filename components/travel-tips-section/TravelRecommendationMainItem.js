import React from 'react'
import Link from 'next/link'


export const TravelRecommendationMainItem = ({ data }) => {

    if (!data) return <div className='flex flex-col mx-5 mb-5 md:ml-20 md:mr-10 md:w-7/12 items-center hover:bg-bordercolor hover:bg-opacity-20 transition-all'>
        <div className='mt-7 md:mt-0 rounded-lg h-[159.75px] md:h-[330px] w-full object-cover bg-bordercolor animate-pulse' />
        <div className='h-16 w-full md:max-w-[589px] mt-5 bg-bordercolor animate-pulse' />
        <div className='h-12 w-full md:max-w-[589px] mt-2.5 md:mt-3 bg-bordercolor animate-pulse' />
    </div>

    const date = new Date(data.created_at);

    const errorImage = <img alt='' src='/img-about-thumbnail.jpg' className='mt-7 md:mt-0 rounded-lg h-[159.75px] md:h-[330px] w-full object-cover' />


    return (
        <Link href={`/travel-tips/${data.id}`}>
            <a className='flex flex-col mx-5 mb-5 md:ml-20 md:mr-10 md:w-7/12 items-center hover:bg-bordercolor hover:bg-opacity-20 transition-all'>
                {!data.travel_tips_files ? errorImage : !data.travel_tips_files[0] ? errorImage : <img alt='' src={`https://panel.westjavatravel.com/assets/${data.travel_tips_files[0]}`} className='mt-7 md:mt-0 rounded-lg h-[159.75px] md:h-[330px] w-full object-cover' />}
                <h3 className='font-bold font-montserrat text-lg md:text-3.5xl md:leading-10 text-dark text-center mt-5 capitalize md:max-w-[589px] twoline-text'>{data.title}</h3>
                <p className='font-karla text-neutral text-sm md:text-base text-center mt-2.5 md:mt-3 md:max-w-[589px] twoline-text'>{data.deskripsi}</p>
                <div className='mt-4 mb-8 flex flex-row items-center justify-center'>
                    <p className='px-4 py-2.5 rounded-full uppercase bg-[#E4ECF4] font-karla font-bold text-xs md:text-sm text-neutral'>{data.topik[0]}</p>
                    <p className='font-karla text-neutral text-xs md:text-sm ml-4'>{date.toDateString()}</p>
                </div>
            </a>
        </Link>
    )
}
