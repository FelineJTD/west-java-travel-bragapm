import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

export const DetailTravelTipsContentSection = ({ data }) => {
    const [isShowAllContent, setisShowAllContent] = useState(false);

    return (
        <section className='flex flex-col items-center px-5 md:px-80' id='content-section'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.1.0/github-markdown-light.min.css" integrity="sha512-zb2pp+R+czM7GAemdSUQt6jFmr3qCo6ikvBgVU6F5GvwEDR0C2sefFiPEJ9QUpmAKdD5EqDUdNRtbOYnbF/eyQ==" crossOrigin="anonymous" referrerpolicy="no-referrer" />
            <div className={`md:pt-20 pt-8 ${isShowAllContent ? 'max-h-full' : 'max-h-72'} md:max-h-full overflow-hidden relative`} >
                <div className={`w-full h-32 bg-gradient-to-t from-white to-transparent absolute -bottom-2 md:hidden ${isShowAllContent ? 'hidden' : ''}`} />
                <h4 className='font-karla font-semibold mb-5 text-neutral text-xl md:text-2xl'>Headline</h4>
                {/* <p className='pt-5 text-neutral font-karla text-sm md:text-lg'>Bandung memiliki sejuta pesona yang selalu membuat wisatawan terpana. Bagaimana tidak? Mulai dari tempat wisata berbasis alam, destinasi rekreasi kekinian, hingga kuliner dan tren fesyen bisa Sobat Pesona temui semua di Ibu Kota Jawa Barat ini. Saking idealnya, Bandung seringkali menjadi destinasi tujuan rekreasi singkat di hari libur maupun akhir pekan. Baik bersama teman, keluarga, atau sendirian, selalu ada tempat seru dan menyenangkan yang bisa ditelusuri di Kota Bandung.</p> */}
                <article className='markdown-body !text-neutral !font-karla !text-sm md:!text-lg'>
                    <ReactMarkdown >{data.deskripsi}</ReactMarkdown>
                </article>
                {/* <img alt='' src='/img-about-history.png' className='pt-5 w-full rounded-2lg' />
                <p className='font-karla text-neutral text-xs md:text-base text-center pt-2.5 pb-5'>Ini adalah caption gambar</p>
                <p className='pt-5 text-neutral font-karla text-sm md:text-lg'>Suasana sejuk dan pemandangan hijau di berbagai sudut dataran tinggi di Bandung sangat cocok jadi tempat rileksasi pikiran. Sobat Pesona bisa mencoba berkunjung ke kebun teh asri di kawasan Ciwidey dan menikmati udara segar dengan bebas. Kalau mau destinasi yang lebih hits, menelusuri setiap sisi hutan pinus di Cikole yang cantik nan instagenic adalah jawabannya, Sobat Pesona! Selain itu, ada pula glamping seru dengan pilihan panorama alam yang menakjubkan, seperti di Lakeside Rancabali, The Lodge Maribaya, dan Trizara Resort. </p>
                <p className='pt-5 text-neutral font-karla text-sm md:text-lg'>Yang tak boleh ketinggalan, apalagi kalau bukan wisata alam ke Gunung Tangkuban Perahu. Ya! Sobat Pesona harus menyaksikan keindahan kawah yang erat kaitannya dengan cerita rakyat Jawa Barat berjudul Sangkuriang itu. Menurut alkisah, bentuk Gunung Tangkuban perahu yang terlihat seperti gunung terbalik ini berasal dari perahu buatan Sangkuriang yang menjadi syarat untuk bisa menikahi gadis tercantik yang ternyata adalah sang ibunda, Dayang Sumbi. Namun syarat itu gagal terpenuhi hingga Sangkuriang menendang perahu tersebut hingga terbalik dan menurut cerita itu lah awal terciptanya Gunung Tangkuban Perahu.</p>
                <h4 className='pt-5 font-montserrat font-bold text-dark text-xl md:text-2xl'>Headline</h4>
                <p className='pt-5 text-neutral font-karla text-sm md:text-lg'>Kalau Sobat Pesona yang ingin mencari spot foto yang manis dan penuh warna pastel yang kekinian, kunjungi saja Rabbit Town! Selain itu ada pula Bandung Amazing Art World yang menyediakan latar foto instagrammable dengan efek 3D hingga wahana Dunia Terbalik nan unik. </p>
                <h4 className='pt-5 font-montserrat font-bold text-dark text-xl md:text-2xl'>Headline</h4>
                <p className='pt-5 text-neutral font-karla text-sm md:text-lg'>Kalau Sobat Pesona yang ingin mencari spot foto yang manis dan penuh warna pastel yang kekinian, kunjungi saja Rabbit Town! Selain itu ada pula Bandung Amazing Art World yang menyediakan latar foto instagrammable dengan efek 3D hingga wahana Dunia Terbalik nan unik. </p>
                <img alt='' src='/img-about-tradition.png' className='pt-5 w-full rounded-2lg' />
                <p className='font-karla text-neutral text-xs md:text-base text-center pt-2.5 pb-5'>Ini adalah caption gambar</p> */}
            </div>
            <a
                href='#content-section'
                onClick={() => {
                    setisShowAllContent(!isShowAllContent);
                }}
                className={`flex flex-row items-center py-4 px-6 border border-bordercolor rounded-full mt-3 md:hidden ${isShowAllContent ? 'bg-[#E4ECF4]' : 'bg-white'}`}
            >
                <span className='uppercase text-sm text-dark font-karla font-bold mr-2'>{isShowAllContent ? 'tampilkan sedikit' : 'tampilkan lebih banyak'}</span>
                <img alt='' src='/ic-dropdown-arrow.svg' className={`${isShowAllContent ? 'rotate-180' : ''}`} />
            </a>
        </section>
    )
}
