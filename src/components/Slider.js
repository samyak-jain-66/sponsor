import React from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
// Component
import {Card,Card1,Card2} from './Card';

// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y]);

const Slider = () => {
    const data = [
        {
            title: 'Festival', 
        price: '45.00', 
        heading: 'The Catwalk Event Management 2020', 
        timing: 'Sun, August 30 2020 ,12:00AM',
        location: 'Arvoda , Colorada'
    },
        {
            title: 'Festival', 
        price: '45.00', 
        heading: 'The Catwalk Event Management 2020', 
        timing: 'Sun, August 30 2020 ,12:00AM',
        location: 'Arvoda , Colorada'
    },
        {
            title: 'Festival', 
        price: '45.00', 
        heading: 'The Catwalk Event Management 2020', 
        timing: 'Sun, August 30 2020 ,12:00AM',
        location: 'Arvoda , Colorada'
    },
        {
            title: 'Festival', 
        price: '45.00', 
        heading: 'The Catwalk Event Management 2020', 
        timing: 'Sun, August 30 2020 ,12:00AM',
        location: 'Arvoda , Colorada'
    },
        {
            title: 'Festival', 
        price: '45.00', 
        heading: 'The Catwalk Event Management 2020', 
        timing: 'Sun, August 30 2020 ,12:00AM',
        location: 'Arvoda , Colorada'
    },
    ]

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        {data && data.map((item,index) => (
            <SwiperSlide>
                <Card 
                    title={item.title} 
                    heading={item.heading} 
                    price={item.price} 
                    location={item.location} 
                    timing={item.timing} 
                />
            </SwiperSlide>
        ))}
    </Swiper>
  );
};

const Slider1 =()=>{
    const data1=[
        {
            place: 'Washington',
            event : 1
        },
        {
            place:'Texas',
            event: 2
        },
        {
            place:'California',
            event:1
        },
        {
            place: 'Maldives',
            event:4
        },
        {
            place: 'Brazil',
            events: 3,
        },
        {
            place : 'Mumbai',
            event : 2
        },
        {
            place:'Madrid',
            event:2
        },
    ]
    return(
        <Swiper
        spaceBetween={50}
        slidesPerView={4}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
          {data1 && data1.map((item,index)=>(
               <SwiperSlide>
                   <Card1
                     city={item.place}
                     eventcount={item.event}
                   />
               </SwiperSlide>
          ))}
      </Swiper>
    )
}
const Slider2=()=>{
    const data2=[
        {
            category:'Creative',
            timing:'June 06, 2018',
            heading:'New York Fashion Week',
            description:'Hello Guys explore this new upcoming Fashion week in New York',
        },
        {
            category:'Creative',
            timing:'June 06, 2018',
            heading:'New York Fashion Week',
            description:'Hello Guys explore this new upcoming Fashion week in New York',
        },
        {
            category:'Creative',
            timing:'June 06, 2018',
            heading:'New York Fashion Week',
            description:'Hello Guys explore this new upcoming Fashion week in New York',
        },
        {
            category:'Creative',
            timing:'June 06, 2018',
            heading:'New York Fashion Week',
            description:'Hello Guys explore this new upcoming Fashion week in New York',
        },
        {
            category:'Creative',
            timing:'June 06, 2018',
            heading:'New York Fashion Week',
            description:'Hello Guys explore this new upcoming Fashion week in New York',
        },
    ]
    return(
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
          {data2 && data2.map((item,index)=>(
               <SwiperSlide>
                   <Card2
                     category={item.category}
                     timing={item.timing}
                     heading={item.heading}
                     description={item.description}
                   />
               </SwiperSlide>
          ))}
      </Swiper>
    )
}
export {Slider,Slider1,Slider2};