import React, { useState } from 'react'

const regionContent = {
    'central west java' : {
        'about' : 'West Java is popular for creativity and urban life. The Capital City of West Java, Bandung, is located in the Central of West Java. Many unique buildings and city parks can be found here, representing the creativity. You can enjoy almost every engaging and fun urban activity here, from art activity, social life of youngsters, night life, shopping, to working at co-working spaces and cafes. Digital nomads can easily find internet and electricity access here. Central West Java consists of lively cities that can fulfill all your desires, from culinary, shopping, business, night life, cafe life, nature based staycation, spectacular destinations, to traditional villages. Modernity has made this area have a variety of language levels, one of those is English. A high tolerance for tourists also makes Central West Java one of the right places to stay when you visit West Java.',
        'access' : 'Since The Capital City of West Java is located in the central area, the transportation is very much accessible. You can go by car, train, bus, or even airplane to get to the central West Java. The airport, Husein Sastranegara International Airport is the main gate for international tourists to enter Central West Java. For traveling around the area, there are many transportation choices you can use. From public transportation like ‘angkot’, bus, taxi, online motorcycle taxi, to rental cars.',
    },
    'western west java' : {
        'about' : 'Western of West Java is famous for its resorts and man-made nature destinations. It is located in the highlands of West Java, so the temperature might be a little colder in this area. There are many kinds of resorts you can find, from budget to luxury resorts. Since the local temperature is lower, hot springs are also a famous destination here.',
        'access' : 'Western areas are easiest to access by car. It is 160km away from Bandung City. You need about a 2 hours ride to get to this area. This area is also close to Jakarta that it became Jakartan’s favorite destination on the weekend. There are many choices for public transportations, but it would be convenient for you to use a private car because the distance from one destination to others is quite far.',
    },
    'northern west java' : {
        'about' : '	North of West Java is surely rich with natural tourism and beautiful scenery, but actually North West Java is familiar with historical areas. Since North of West Java is located on the coast, the weather in this area is hotter than other areas. There is complete accommodation available such as hotels, home stay, and traditional villages.',
        'access' : 'North areas are easiest to access by train, but you can also use private vehicles. You need about 2 to 3 hours to get to this area. For traveling around the area, there are many transportation choices you can use. From public transportation like bus, taxi, and also online transportation, but it would be nice if you use a private vehicle because the distance from one destination to others is quite far.',
    },
    'southern west java' : {
        'about' : 'The southern part of West Java is famous for its interesting and fascinating beaches. In the southern part of West Java, we can enjoy various beaches with various kinds of sands. If you visit there then you will enjoy the roar of the waves and birds that will accompany you to play there. On the other side of this area, it has many beautiful mountains. The South West Java area gives you various kinds of destinations to be an option. There are a wealth of natural destinations that you can enjoy with your loved ones.',
        'access' : 'If you want to visit this area, you will be more comfortable if you use a car or motorbike. Because if the rainy season arrives, a car can be an alternative, but in the summer you can also use a motorbike, so that the natural scenery in the area can be seen without a hitch. You will feel more refreshed and happier when you see the scenery in person. To travel from Bandung to this southern area, you need a travel time of about 3-4 hours. Access to the location if you do not have a private vehicle, you can use public transportation such as bus and mini bus.',
    },
    'eastern west java' : {
        'about' : 'In this area there are many attractions related to water such as lakes, waterfalls, hot springs, lakes and swimming pools. In this area, there are several historical relics, both ancient, royal and colonial. You can get a lot of new knowledge and insights around the east of West Java.',
        'access' : 'There are many access options to get to the eastern part of West Java. First, there is Kertajati International Airport, and you can also use other public facilities such as buses and travel. However, it is more convenient to use a private vehicle because many tourist destinations are quite difficult to reach by public transportation. For those who want to walk around the city area, you can use public transportation, and choose an alternative like online motorcycle taxis.',
    },
}

export const WhereToGoDemografiSection = ({ demografiSectionRef, region }) => {
    const [isShowAllContent, setisShowAllContent] = useState(false);

    return (
        <section className='flex flex-col items-center' >
            <div className={`md:pt-16 pt-8 md:ml-9 ${isShowAllContent ? 'max-h-full' : 'max-h-72'} transition-all md:max-h-full overflow-hidden relative`}ref={demografiSectionRef} id='demografi-section'>
                <div className={`w-full h-32 bg-gradient-to-t from-white to-transparent absolute -bottom-2 md:hidden ${isShowAllContent ? 'hidden' : ''}`} />
                <h4 className='font-montserrat font-bold text-dark text-xl md:text-2xl'>About</h4>
                <p className='pt-5 text-neutral font-karla text-sm md:text-lg'>{regionContent[region].about}</p>
                {/* <p className='pt-5 text-neutral font-karla text-sm md:text-lg'>Untuk lokasi untuk berswafoto yang unik, maka kota ini cocok jadi tempat yang sangat tepat! Untuk Sobat Pesona wajib banget mengunjungi Tebing Keraton atau The Royal (Palace) Cliff, Puncak Bukit Moko, Eurad Highland Lembang, atau Stone Garden Citatah. Nah, di Lembang juga ada pula atraksi tematis yang menarik dijelajahi tepatnya di Farm House, dan De Ranch yang hadir dengan nuansa koboi.</p> */}
                {/* <img alt='' src='/img-about-history.png' className='pt-5 w-full rounded-2lg' /> */}
                {/* <p className='font-karla text-neutral text-xs md:text-base text-center pt-2.5 pb-5'>Ini adalah caption gambar</p> */}
                {/* <p className='pt-5 text-neutral font-karla text-sm md:text-lg'>Suasana sejuk dan pemandangan hijau di berbagai sudut dataran tinggi di Bandung sangat cocok jadi tempat rileksasi pikiran. Sobat Pesona bisa mencoba berkunjung ke kebun teh asri di kawasan Ciwidey dan menikmati udara segar dengan bebas. Kalau mau destinasi yang lebih hits, menelusuri setiap sisi hutan pinus di Cikole yang cantik nan instagenic adalah jawabannya, Sobat Pesona! Selain itu, ada pula glamping seru dengan pilihan panorama alam yang menakjubkan, seperti di Lakeside Rancabali, The Lodge Maribaya, dan Trizara Resort. </p>
                <p className='pt-5 text-neutral font-karla text-sm md:text-lg'>Yang tak boleh ketinggalan, apalagi kalau bukan wisata alam ke Gunung Tangkuban Perahu. Ya! Sobat Pesona harus menyaksikan keindahan kawah yang erat kaitannya dengan cerita rakyat Jawa Barat berjudul Sangkuriang itu. Menurut alkisah, bentuk Gunung Tangkuban perahu yang terlihat seperti gunung terbalik ini berasal dari perahu buatan Sangkuriang yang menjadi syarat untuk bisa menikahi gadis tercantik yang ternyata adalah sang ibunda, Dayang Sumbi. Namun syarat itu gagal terpenuhi hingga Sangkuriang menendang perahu tersebut hingga terbalik dan menurut cerita itu lah awal terciptanya Gunung Tangkuban Perahu.</p>
                <h4 className='pt-5 font-montserrat font-bold text-dark text-xl md:text-2xl capitalize'>Pusat wisata, kuliner dan fesyen yang tiada duanya</h4>
                <p className='pt-5 text-neutral font-karla text-sm md:text-lg'>Kalau Sobat Pesona yang ingin mencari spot foto yang manis dan penuh warna pastel yang kekinian, kunjungi saja Rabbit Town! Selain itu ada pula Bandung Amazing Art World yang menyediakan latar foto instagrammable dengan efek 3D hingga wahana Dunia Terbalik nan unik. </p> */}
                <h4 className='pt-5 font-montserrat font-bold text-dark text-xl md:text-2xl capitalize'>Akses Masuk Ke {region}</h4>
                <p className='pt-5 text-neutral font-karla text-sm md:text-lg'>{regionContent[region].access}</p>
                {/* <img alt='' src='/img-about-tradition.png' className='pt-5 w-full rounded-2lg' /> */}
                {/* <p className='font-karla text-neutral text-xs md:text-base text-center pt-2.5 pb-5'>Ini adalah caption gambar</p> */}
            </div>
            <a
                href='#demografi-section'
                onClick={() => {
                    setisShowAllContent(!isShowAllContent);
                }}
                className={`flex flex-row items-center py-4 px-6 border border-bordercolor rounded-full mt-3 md:hidden ${isShowAllContent ? 'bg-[#E4ECF4]' : 'bg-white'}`}
            >
                <span className='uppercase text-sm text-dark font-karla font-bold mr-2'>{isShowAllContent ? 'tampilkan sedikit' : 'tampilkan lebih banyak'}</span>
                <img alt='' src='/ic-dropdown-arrow.svg' className={`${isShowAllContent ? 'rotate-180' : ''}`}/>
            </a>
        </section>
    )
}
