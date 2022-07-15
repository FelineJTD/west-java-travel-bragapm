import React from 'react'

export const DestinationDetailHeadSection = ({ destination }) => {

    if (!destination) return (<section>
        <div className='h-[306px] md:h-[500px] w-full bg-bordercolor animate-pulse' />
        <div className='flex flex-col items-start md:items-center px-5 md:px-80'>
            <div className='md:w-[600px] w-full h-8 md:h-16 bg-bordercolor animate-pulse mt-8' />
            <div className='md:w-[800px] w-full h-4 md:h-8 bg-bordercolor animate-pulse mt-4' />
            <div className='w-full h-px bg-bordercolor mt-8 hidden md:block' />
            <div className='flex flex-col md:flex-row md:justify-between mt-6 md:mt-8 w-full items-center'>
                <div className='w-[100px] md:w-[200px] h-4 md:h-8 bg-bordercolor animate-pulse mt-4' />
                <div className='flex flex-row gap-2.5 mt-6 md:mt-0'>
                    <img src='/ic-facebook.svg' alt='facebook icon' className='hover:-translate-y-1 transition-all' />
                    <img src='/ic-twitter.svg' alt='twitter icon' className='hover:-translate-y-1 transition-all' />
                    <img src='/ic-instagram.svg' alt='instagram icon' className='hover:-translate-y-1 transition-all' />
                    <img src='/ic-whatsapp.svg' alt='whatsapp icon' className='hover:-translate-y-1 transition-all' />
                    <img src='/ic-link.svg' alt='link icon' className='hover:-translate-y-1 transition-all' />
                </div>
            </div>
            <div className='w-full h-px bg-bordercolor mt-8 md:hidden' />
        </div>
    </section>);

    return (
        <section>
            <img src={`${destination.images ? destination.images.length > 0 ? `https://panel.westjavatravel.com/assets/${destination.images[0].directus_files_id}` : '/img-about-thumbnail.jpg' : '/img-about-thumbnail.jpg'} `} className='h-[306px] md:h-[500px] w-full object-cover' alt='destination image' />
            <div className='flex flex-col items-start md:items-center px-5 md:px-80'>
                <h2 className='capitalize text-dark font-bold font-montserrat mt-6 text-2xl md:text-5xl text-center !leading-tight twoline-text'>{destination.nama_objek}</h2>
                <p className='mt-4 text-sm md:text-1.5xl text-neutral font-karla md:text-center'>{destination.attraction.join()}</p>
                <div className='w-full h-px bg-bordercolor mt-8 hidden md:block' />
                <div className='flex flex-col md:flex-row md:justify-between mt-6 md:mt-8 w-full'>
                    <div className='flex flex-row space-x-2 flex-none'>
                        <img src='/ic-location.svg' alt='ic-location' />
                        <p className='font-karla text-neutral text-sm md:text-lg flex flex-row flex-none items-center'>{destination.address}</p>
                    </div>
                    <div className='flex flex-row gap-2.5 mt-6 md:mt-0'>
                        <img src='/ic-facebook.svg' alt='facebook icon' className='hover:-translate-y-1 transition-all' />
                        <img src='/ic-twitter.svg' alt='twitter icon' className='hover:-translate-y-1 transition-all' />
                        <img src='/ic-instagram.svg' alt='instagram icon' className='hover:-translate-y-1 transition-all' />
                        <img src='/ic-whatsapp.svg' alt='whatsapp icon' className='hover:-translate-y-1 transition-all' />
                        <img src='/ic-link.svg' alt='link icon' className='hover:-translate-y-1 transition-all' />
                    </div>
                </div>
                <div className='w-full h-px bg-bordercolor mt-8 md:hidden' />
            </div>
        </section>
    )
}
