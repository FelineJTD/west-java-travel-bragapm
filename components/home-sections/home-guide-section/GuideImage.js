import React from 'react'

export const GuideImage = ({ guide }) => {

    const errorImage = <div className='overflow-hidden flex-none md:w-full w-[80px] h-[80px] md:h-[216px] rounded-md md:rounded-2lg'>
        <img alt='' src='/img-placeholder.png' className='w-full h-full object-cover' />
    </div>

    if (!guide) return errorImage;
    if (!guide.thumbnail) return errorImage;

    return (
        <div className='overflow-hidden flex-none md:w-full w-[80px] h-[80px] md:h-[216px] rounded-md md:rounded-2lg'>
            <img alt='' src={`https://panel.westjavatravel.com/assets/${guide.thumbnail}`} className='w-full h-full object-cover' />
        </div>
    )
}
