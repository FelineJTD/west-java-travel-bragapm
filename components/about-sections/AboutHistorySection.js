import React, { useState } from 'react'

export const AboutHistorySection = ({ historySectionRef }) => {
    const [isShowAllContent, setisShowAllContent] = useState(false);

    return (
        <section className='flex flex-col items-center'>
            <div className={`md:pt-16 pt-8 md:ml-9 ${isShowAllContent ? 'max-h-full' : 'max-h-72'} md:max-h-full overflow-hidden relative`} ref={historySectionRef} id='history-section'>
                <div className={`w-full h-32 bg-gradient-to-t from-white to-transparent absolute -bottom-2 md:hidden ${isShowAllContent ? 'hidden' : ''}`} />
                <h4 className='font-montserrat font-bold text-dark text-xl md:text-2xl'>History</h4>
                <p className='pt-5 text-neutral font-karla text-sm md:text-lg text-justify'>Spices, history of trade, and the rise and fall of powerful kingdoms are the main story that you may hear when people talk about West Java.
                    This province has its own unique culture and language, both called Sundanese that is also used to call its people. The ancient kingdoms of Tarumanegara, Pajajaran, and Cirebon would make interesting studies for the student of archaeology.
                    A little history of how West Java province was formed started in the 5th century. West Java was a part of Tarumanegara Kingdom where Royal Relic inscriptions of the Kingdom can be found scattered throughout the region. There are seven inscriptions written in Wengi letters (used in Palawa India period) and Sanskrit in which most of them tell about the Kings of Tarumanegara.
                    After the Tarumanegara Kingdom collapsed, the authority in the West of Java Island from Ujung Kulon to Serayu River was continued by Sunda Kingdom. One of the royal inscriptions from Sunda Kingdom was Kebon Kopi II inscription of year 932. The capital city of Sunda Kingdom was in Pakuan Padjadjaran (which is now called Bogor).
                    In the 16th century, Demak Sultanate became an economic and political competitor of Sunda Kingdom. Cerbon Harbour (which is now known as Cirebon) was liberated from Sunda Kingdom because of the influence of Demak Sultanate. This harbour then grew to be Cirebon Sultanate that stood on its own (separating itself from Sunda Kingdom).
                    Through VOC, The Netherlands started to enter Jayakarta and became more dominant in West Java. Dutch East Indies (or Netherlands East Indies) formed West Java province. The formation was the implementation of Bestuurshervormingwet in 1922, which separated Dutch East Indies into units of provinces. On August 17th 1945, West Java became part of The Republic of Indonesia.
                    The Preparatory Committee for Indonesian Independence (PPKI) council proclaimed West Java as one of eight provinces in Indonesia. Then, through law No. 26 of 2010 on the Anniversary of the Government of West Java Province, set 19th August as the anniversary of the Government of West Java Province.
                    On August 27th 1945, West Java became Pasundan State, one of the states in the Unitary State of The Republic of Indonesia. But later on,  West Java re-joined The Republic of Indonesia in 1950.</p>
                {/* <img alt='' src='/img-about-history.png' className='pt-5 w-full rounded-2lg' /> */}
                <h4 className='pt-5 font-montserrat font-bold text-dark text-xl md:text-2xl'>Language</h4>
                <p className='pt-5 text-neutral font-karla text-sm md:text-lg text-justify'>Indonesia is blessed with enchanting natures, culture diversity, and different languages. One of the legendary lands that is known for its culture richness is West Java. West Java has many unique cultures and languages. The one that many people may already know is Sundanese. Sundanese language is the most commonly used in West Java area. Starting from dances, art, songs, and poetry here use Sundanese language to convey ideas that are full of meaning.
                    Sundanese culture, but three language zones influence west java:
                    1.       Priangan zone with sundanese language,
                    2.       There is a glimpse of javanese mix with sundanese called cirebon zone with java-cirebon language, and
                    3.       A pinch of betawis mixtures with our sundanese authentic culture in the bekasi-depok with the betawi language.
                    These language zones prove that differentiation can lead to harmony in each breath of life through sound, movement, stories, and the future. Culture is something related to a community's creation, taste, intelligence, and works.</p>
                {/* <h4 className='pt-5 font-montserrat font-bold text-dark text-xl md:text-2xl'>Tradition</h4> */}
                <p className='pt-5 text-neutral font-karla text-sm md:text-lg'>Cari tahu berita terkini seputar wisata di Jawa Barat.
                    Find out the latest news about West Java’s tourism. </p>
                {/* <img alt='' src='/img-about-tradition.png' className='pt-5 w-full rounded-2lg' /> */}
                {/* <p className='font-karla text-neutral text-xs md:text-base text-center pt-2.5 pb-5'>Ini adalah caption gambar</p> */}
            </div>
            <a
                href='#history-section'
                onClick={() => {
                    setisShowAllContent(!isShowAllContent);
                }}
                className={`flex flex-row items-center py-4 px-6 border border-bordercolor rounded-full mt-3 md:hidden ${isShowAllContent ? 'bg-[#E4ECF4]' : 'bg-white'}`}
            >
                <span className='uppercase text-sm text-dark font-karla font-bold mr-2'>{isShowAllContent ? 'tampilkan sedikit' : 'tampilkan lebih banyak'}</span>
                <img src='/ic-dropdown-arrow.svg' alt='dropdown arrow' className={`${isShowAllContent ? 'rotate-180' : ''}`} />
            </a>
        </section>
    )
}
