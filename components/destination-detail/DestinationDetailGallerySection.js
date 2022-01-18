import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export const DestinationDetailGallerySection = ({ destination }) => {

    const [isOpen, setIsOpen] = useState(false)
    const [openedImageUrl, setopenedImageUrl] = useState(null)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal(imageUrl) {
        setIsOpen(true)
        setopenedImageUrl(imageUrl);
    }

    if (!destination) return <div className='h-20'></div>
    if (!destination.images) return <div className='h-20'></div>
    if (destination.images.length == 0) return <div className='h-20'></div>

    return (
        <>
            <section className='flex flex-col z-10 px-5 md:px-20 mb-20 md:mb-40 md:items-center'>
                {/* <div className={`w-screen h-[300vh] bg-black bg-opacity-25 sticky z-40 top-0 left-0 ${isOpen ? 'block' : 'hidden'}`} /> */}
                <div className='w-full h-px bg-bordercolor mt-16 hidden md:block' />
                <h4 className='capitalize font-montserrat font-bold text-dark text-lg md:text-2.5xl z-10 md:mb-16 mt-16 mb-6'>Galeri Kawah Putih</h4>
                <div className='flex flex-col md:flex-col-reverse items-center md:items-end'>
                    <div className='grid grid-cols-6 z-10 gap-2.5 md:gap-3.5 w-full'>
                        <button
                            onClick={() => {
                                if (destination.images[0] != null) {
                                    openModal(`https://panel.westjavatravel.com/assets/${destination.images[0].directus_files_id}?key=inframe`)
                                }
                            }}
                            className='rounded-md overflow-hidden relative col-span-2 md:col-span-1 md:row-span-1'>
                            <img onError={(e) => {
                                e.target.src = '/img-placeholder.png'
                            }} src={destination.images[0] == null ? '/img-placeholder.png' : `https://panel.westjavatravel.com/assets/${destination.images[0].directus_files_id}?key=inframe`} className='w-full h-full object-cover' />
                        </button>
                        <button
                            onClick={() => {
                                if (destination.images[1] != null) {
                                    openModal(`https://panel.westjavatravel.com/assets/${destination.images[1].directus_files_id}?key=inframe`)
                                }
                            }}
                            className='rounded-md overflow-hidden relative col-span-2 md:row-span-2'>
                            <img onError={(e) => {
                                e.target.src = '/img-placeholder.png'
                            }} src={destination.images[1] == null ? '/img-placeholder.png' : `https://panel.westjavatravel.com/assets/${destination.images[1].directus_files_id}?key=inframe`} className='w-full h-full object-cover' />
                        </button>
                        <button
                            onClick={() => {
                                if (destination.images[2] != null) {
                                    openModal(`https://panel.westjavatravel.com/assets/${destination.images[2].directus_files_id}?key=inframe`)
                                }
                            }}
                            className='rounded-md overflow-hidden relative col-span-2 md:col-span-1'>
                            <img onError={(e) => {
                                e.target.src = '/img-placeholder.png'
                            }} src={destination.images[2] == null ? '/img-placeholder.png' : `https://panel.westjavatravel.com/assets/${destination.images[2].directus_files_id}?key=inframe`} className='w-full h-full object-cover' />
                        </button>
                        <button
                            onClick={() => {
                                if (destination.images[3] != null) {
                                    openModal(`https://panel.westjavatravel.com/assets/${destination.images[3].directus_files_id}?key=inframe`)
                                }
                            }}
                            className='rounded-md overflow-hidden relative col-span-6 md:md:col-span-1'>
                            <img onError={(e) => {
                                e.target.src = '/img-placeholder.png'
                            }} src={destination.images[3] == null ? '/img-placeholder.png' : `https://panel.westjavatravel.com/assets/${destination.images[3].directus_files_id}?key=inframe`} className='w-full h-full object-cover' />
                        </button>
                        <button
                            onClick={() => {
                                if (destination.images[4] != null) {
                                    openModal(`https://panel.westjavatravel.com/assets/${destination.images[4].directus_files_id}?key=inframe`)
                                }
                            }}
                            className='rounded-md overflow-hidden relative col-span-2 md:md:col-span-1'>
                            <img onError={(e) => {
                                e.target.src = '/img-placeholder.png'
                            }} src={destination.images[4] == null ? '/img-placeholder.png' : `https://panel.westjavatravel.com/assets/${destination.images[4].directus_files_id}?key=inframe`} className='w-full h-full object-cover' />
                        </button>
                        <button
                            onClick={() => {
                                if (destination.images[5] != null) {
                                    openModal(`https://panel.westjavatravel.com/assets/${destination.images[5].directus_files_id}?key=inframe`)
                                }
                            }}
                            className='rounded-md overflow-hidden relative col-span-2 md:md:col-span-1'>
                            <img onError={(e) => {
                                e.target.src = '/img-placeholder.png'
                            }} src={destination.images[5] == null ? '/img-placeholder.png' : `https://panel.westjavatravel.com/assets/${destination.images[5].directus_files_id}?key=inframe`} className='w-full h-full object-cover' />
                        </button>
                        <button
                            onClick={() => {
                                if (destination.images[6] != null) {
                                    openModal(`https://panel.westjavatravel.com/assets/${destination.images[6].directus_files_id}?key=inframe`)
                                }
                            }}
                            className='rounded-md overflow-hidden relative col-span-2 md:md:col-span-1'>
                            <img onError={(e) => {
                                e.target.src = '/img-placeholder.png'
                            }} src={destination.images[6] == null ? '/img-placeholder.png' : `https://panel.westjavatravel.com/assets/${destination.images[6].directus_files_id}?key=inframe`} className='w-full h-full object-cover' />
                        </button>
                        <button
                            onClick={() => {
                                if (destination.images[7] != null) {
                                    openModal(`https://panel.westjavatravel.com/assets/${destination.images[7].directus_files_id}?key=inframe`)
                                }
                            }}
                            className='rounded-md overflow-hidden relative col-span-3 md:md:col-span-2 md:row-span-2'>
                            <img onError={(e) => {
                                e.target.src = '/img-placeholder.png'
                            }} src={destination.images[7] == null ? '/img-placeholder.png' : `https://panel.westjavatravel.com/assets/${destination.images[7].directus_files_id}?key=inframe`} className='w-full h-full object-cover' />
                        </button>
                        <button
                            onClick={() => {
                                if (destination.images[8] != null) {
                                    openModal(`https://panel.westjavatravel.com/assets/${destination.images[8].directus_files_id}?key=inframe`)
                                }
                            }}
                            className='rounded-md overflow-hidden relative col-span-3 md:md:col-span-1'>
                            <img onError={(e) => {
                                e.target.src = '/img-placeholder.png'
                            }} src={destination.images[8] == null ? '/img-placeholder.png' : `https://panel.westjavatravel.com/assets/${destination.images[8].directus_files_id}?key=inframe`} className='w-full h-full object-cover' />
                        </button>
                        <button
                            onClick={() => {
                                if (destination.images[9] != null) {
                                    openModal(`https://panel.westjavatravel.com/assets/${destination.images[9].directus_files_id}?key=inframe`)
                                }
                            }}
                            className='rounded-md overflow-hidden relative col-span-2 md:md:col-span-1'>
                            <img onError={(e) => {
                                e.target.src = '/img-placeholder.png'
                            }} src={destination.images[9] == null ? '/img-placeholder.png' : `https://panel.westjavatravel.com/assets/${destination.images[9].directus_files_id}?key=inframe`} className='w-full h-full object-cover' />
                        </button>
                        <button
                            onClick={() => {
                                if (destination.images[10] != null) {
                                    openModal(`https://panel.westjavatravel.com/assets/${destination.images[10].directus_files_id}?key=inframe`)
                                }
                            }}
                            className='rounded-md overflow-hidden relative col-span-2 md:md:col-span-1'>
                            <img onError={(e) => {
                                e.target.src = '/img-placeholder.png'
                            }} src={destination.images[10] == null ? '/img-placeholder.png' : `https://panel.westjavatravel.com/assets/${destination.images[10].directus_files_id}?key=inframe`} className='w-full h-full object-cover' />
                        </button>
                        <button
                            onClick={() => {
                                if (destination.images[11] != null) {
                                    openModal(`https://panel.westjavatravel.com/assets/${destination.images[11].directus_files_id}?key=inframe`)
                                }
                            }}
                            className='rounded-md overflow-hidden relative col-span-2 md:md:col-span-1'>
                            <img onError={(e) => {
                                e.target.src = '/img-placeholder.png'
                            }} src={destination.images[11] == null ? '/img-placeholder.png' : `https://panel.westjavatravel.com/assets/${destination.images[11].directus_files_id}?key=inframe`} className='w-full h-full object-cover' />
                        </button>
                    </div>
                </div>
            </section>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-50 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <img onError={(e) => {
                                    e.target.src = '/img-placeholder.png'
                                }} src={openedImageUrl} className='w-full h-full object-cover rounded-xl' />
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
