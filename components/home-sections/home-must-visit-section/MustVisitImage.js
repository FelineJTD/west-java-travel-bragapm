import React, { useState } from 'react'

export const MustVisitImage = ({ image }) => {
    const [isError, setisError] = useState(false);

    const errorImage = <div className='w-[80px] md:w-[284px] h-[70px] md:h-[177px] rounded-md md:rounded-2lg overflow-hidden flex-none bg-bordercolor/50 items-center justify-center flex'>
        <img alt='' src='/img-placeholder.png' className='object-cover rounded-md md:rounded-2lg hover:scale-110 transition duration-300' />
    </div>

    if (!image) return errorImage;

    if (!image[0].directus_files_id) return errorImage;

    if (isError) return errorImage;

    return (
        <div className='w-[80px] md:w-[284px] h-[70px] md:h-[177px] rounded-md md:rounded-2lg overflow-hidden flex-none'>
            <img alt='' onError={(e) => {
                setisError(true);
            }} src={`https://panel.westjavatravel.com/assets/${image[0].directus_files_id}?key=season-thumbnail`} className='w-full h-full object-cover rounded-md md:rounded-2lg hover:scale-110 transition duration-300' />
        </div>
    )
}
