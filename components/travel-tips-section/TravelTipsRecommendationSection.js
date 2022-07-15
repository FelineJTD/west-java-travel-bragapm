import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import { animate } from "motion"
import { TravelRecommendationMainItem } from './TravelRecommendationMainItem';
import { TravelRecommendationItem } from './TravelRecommendationItem';

export const TravelTipsRecommendationSection = () => {

    const { data, error } = useSWR(`https://panel.westjavatravel.com/items/travel_tips?limit=4&fields=*,travel_tips_files.directus_files_id`);

    const [activeRecommendationItem, setactiveRecommendationItem] = useState(0);

    useEffect(() => {
        animate(
            '.recommendation-item',
            { x: activeRecommendationItem * -270 },
            {
                duration: 0.5,
                easing: "ease-in-out"
            }
        );


    }, [activeRecommendationItem])

    return (
        <section className='pt-20 md:pt-36'>
            <div className='flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-bordercolor'>
                <TravelRecommendationMainItem data={error ? null : !data ? null : !data.data ? null : !data.data[0] ? null : data.data[0]} />
                <div className='flex flex-col pt-8 md:pt-0 md:w-5/12 md:h-[600px]'>
                    <h3 className='font-bold text-dark text-xl md:text-2xl font-montserrat mb-5 md:mb-8 ml-5 md:ml-12'>Rekomendasi Tips</h3>
                    <div className='recommendation-item flex flex-row md:flex-col gap-4 px-5 md:pr-20 md:pl-10 md:h-full md:justify-between md:pb-20'>
                        <TravelRecommendationItem data={error ? null : !data ? null : !data.data ? null : !data.data[1] ? null : data.data[1]} />
                        <TravelRecommendationItem data={error ? null : !data ? null : !data.data ? null : !data.data[2] ? null : data.data[2]} />
                        <TravelRecommendationItem data={error ? null : !data ? null : !data.data ? null : !data.data[3] ? null : data.data[3]} />
                    </div>
                    <div className='flex md:hidden flex-row justify-end mx-5 space-x-2.5 my-8'>
                        <button
                            onClick={() => {
                                if (activeRecommendationItem > 0) {
                                    setactiveRecommendationItem(activeRecommendationItem - 1);
                                }
                            }}
                            className='w-[33.33px] md:w-[41.67px] h-[33.33px] md:h-[41.67px] rounded-full'
                        >
                            <img alt='' src='/ic-arrow-rounded.svg' />
                        </button>
                        <button
                            onClick={() => {
                                if (activeRecommendationItem < 2) {
                                    setactiveRecommendationItem(activeRecommendationItem + 1);
                                }
                            }}
                            className='w-[33.33px] md:w-[41.67px] h-[33.33px] md:h-[41.67px] rounded-full'
                        >
                            <img alt='' src='/ic-arrow-rounded.svg' className='transform rotate-180' />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
