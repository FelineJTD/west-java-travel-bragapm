import React from 'react'

export const WhereToGoDestinationImage = ({ image }) => {

    const errorImage = <div className='w-[80px] md:w-[160px] h-[70px] md:h-[144px] rounded-md md:rounded-2lg overflow-hidden flex-none'>
        <img alt='' src='/img-placeholder.png' className='w-full h-full object-cover rounded-md md:rounded-2lg hover:scale-110 transition duration-300' />
    </div>;

    if (!image) return errorImage;

    if (!image[0].directus_files_id) return errorImage;

    return (
        <div className='w-[80px] md:w-[160px] h-[70px] md:h-[144px] rounded-md md:rounded-2lg overflow-hidden flex-none'>
            <img alt='' src={`https://panel.westjavatravel.com/assets/${image[0].directus_files_id}?key=season-thumbnail`} className='w-full h-full object-cover rounded-md md:rounded-2lg hover:scale-110 transition duration-300' />
        </div>
    )
}
