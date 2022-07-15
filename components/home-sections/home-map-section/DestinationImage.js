import React from 'react'

export const DestinationImage = ({ image }) => {

    const errorImage = <img src='/img-placeholder.png' alt='img-destination' className='w-[90px] h-[72px] md:w-[100px] md:h-[90px] rounded-md md:rounded-2lg flex-none' />

    if (!image) return errorImage;

    if (!image[0].directus_files_id) return errorImage;

    return (
        <img alt='' onError={(e) => {
            e.target.src = '/img-placeholder.png'
        }} src={`https://panel.westjavatravel.com/assets/${image[0].directus_files_id}?key=small`} className='w-[90px] h-[72px] md:w-[100px] md:h-[90px] rounded-md md:rounded-2lg flex-none' />
    )
}
