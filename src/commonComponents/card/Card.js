import React from 'react';
import './CardStyle.css';
import image from '../../assets/Image.png';
export default function Card({ data }) {
    return (
        <div className='cardContainer'>
            <img className='image' src={`${data?.image?.uri?.slice(0, 32)}/resize/250x${data?.image?.uri?.slice(32, data?.image?.uri?.length)}`} />
            <div className='textContainer'>
                <p className='category'>{data?.categories[0]?.name}</p>
                <p className='edgeName'>{data?.name}</p>
                <p className='expertName'>{`${data?.experts[0]?.firstName} ${data?.experts[0]?.lastName}`}</p>
                <p className='title'>{data?.experts[0]?.title}</p>
                <p className='company'>{data?.experts[0]?.company}</p>
            </div>
        </div>
    )
}