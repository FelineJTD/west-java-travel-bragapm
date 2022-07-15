import React from 'react'
import { FillDropDownButton } from './custom-component/FieldComponent/FillDropDownButton'
import MemoIcArrowIos from './custom-icons/IcArrowIos'
import MemoIcFacebook from './custom-icons/IcFacebook'
import MemoIcInstagram from './custom-icons/IcInstagram'
import MemoIcTwitter from './custom-icons/IcTwitter'
import MemoIcYoutube from './custom-icons/IcYoutube'

export const Footer = () => {
    return (
        <section className='bg-[#086CB4] flex flex-col px-5 md:px-20 pt-14 pb-8'>
            <div className='flex-col md:flex-row flex md:justify-between md:items-start'>
                <div className='flex flex-col items-center md:items-start md:max-w-[629px]'>
                    <img src='/ic-logo.svg' className='w-[100px] md:w-[126.27px]' />
                    <p className='font-karla text-xs md:text-sm text-[#CBD9EA] mt-8 text-center md:text-left'>This is the official website of the West Java Tourism Department, Indonesia. The content listed on this website is intended for informational rather than commercial purposes. Any sales displayed are intended as a sign of partnership and will always direct you to our partner sites.</p>
                    <div className='mt-8 flex flex-row space-x-3'>
                        <a href='https://www.facebook.com/Smiling-West-Java-104281914974864/' target='_blank'>
                            <div className='w-[33.33px] md:w-[40px] h-[33.33px] md:h-[40px] rounded-full bg-white hover:scale-125 transition-all flex flex-row items-center justify-center'>
                                <MemoIcFacebook className='scale-110 text-[#011F56]' />
                            </div>
                        </a>
                        <a href='https://twitter.com/smilingwestjava' target='_blank'>
                            <div className='w-[33.33px] md:w-[40px] h-[33.33px] md:h-[40px] rounded-full bg-white hover:scale-125 transition-all flex flex-row items-center justify-center'>
                                <MemoIcTwitter className='scale-110 text-[#011F56]' />
                            </div>
                        </a>
                        <a href='https://www.instagram.com/westjava.travel/' target='_blank'>
                            <div className='w-[33.33px] md:w-[40px] h-[33.33px] md:h-[40px] rounded-full bg-white hover:scale-125 transition-all flex flex-row items-center justify-center'>
                                <MemoIcInstagram className='scale-110 text-[#011F56]' />
                            </div>
                        </a>
                        <a href='https://youtube.com/channel/UCFf4Zbap_oELqdAsA4nOjqQ' target='_blank'>
                            <div className='w-[33.33px] md:w-[40px] h-[33.33px] md:h-[40px] rounded-full bg-white hover:scale-125 transition-all flex flex-row items-center justify-center'>
                                <MemoIcYoutube className='scale-110 text-[#011F56]' />
                            </div>
                        </a>
                    </div>
                </div>
                <div className='flex flex-col mt-16 md:mt-0 md:max-h-[330px]'>
                    <p className='text-white font-semibold font-karla uppercase text-sm md:text-lg mb-6'>Ganti Negara dan Bahasa Anda</p>
                    <FillDropDownButton
                        icon={<MemoIcArrowIos className='text-[#FCBD0F]' />}
                        isTop={true}
                        className='bg-white bg-opacity-10 text-white rounded-lg'
                        options={[
                            { label: '🇮🇩 Indonesia' },
                            { label: '🇬🇧 English' },
                            { label: '🇳🇱 Dutch' },
                            { label: '🇸🇦 Arabic' },
                        ]} />
                    <div className='flex flex-row gap-4 justify-center md:justify-start'>
                        <p className='font-karla text-sm md:text-base text-[#CBD9EA] mt-8 text-center md:text-left'>Tentang Kami</p>
                        <p className='font-karla text-sm md:text-base text-[#CBD9EA] mt-8 text-center md:text-left'>•</p>
                        <p className='font-karla text-sm md:text-base text-[#CBD9EA] mt-8 text-center md:text-left'>Kebijakan Privasi</p>
                    </div>
                </div>
            </div>
            <div className='w-full h-px bg-white bg-opacity-10 my-10' />
            <p className='text-white font-montserrat font-medium text-xs md:text-sm text-center'>© 2021 West Java Travel. All Right Reserved</p>
        </section>
    )
}
