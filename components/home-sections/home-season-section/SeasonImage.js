import React, { useState } from 'react'

export const SeasonImage = ({ image }) => {

    const [isError, setisError] = useState(false);

    const errorImage = <div className={`w-full h-full flex flex-col bg-bordercolor items-center group-hover:scale-110 transition duration-500 bg-opacity-50`}>
        <img alt='' src='/img-placeholder.png' className='m-auto object-cover' />
    </div>;

    if (!image) return errorImage;

    if (!image[0].directus_files_id) return errorImage;

    if (isError) return errorImage;

    return (
        <img alt='' onError={(e) => {
            setisError(true);
        }} src={`https://panel.westjavatravel.com/assets/${image[0].directus_files_id}?key=season-thumbnail`} className='w-full h-full object-cover object-center group-hover:scale-110 transition duration-500' />
    )
}
