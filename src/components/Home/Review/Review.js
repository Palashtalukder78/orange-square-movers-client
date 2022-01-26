import React, { useEffect } from 'react';
import Item from './Item';
import Carousel from "react-elastic-carousel";
import useAuth from '../../../hooks/useAuth';
import './Review.css'
import ReactStars from 'react-stars';
import AOS from 'aos';
import 'aos/dist/aos.css';
const breakPoints = [
    { width: 400, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];
const Review = () => {
    const {allReviews} = useAuth();
    const {reviews} = allReviews;
    useEffect(() =>{
        AOS.init();
    },[]);
    return (
        <div className='mt-5' data-aos="fade-down" data-aos-delay="500">
            <div className='text-center'>
                <h2 className='my-heading'>Clients Reviews</h2>
            </div>
            <div class="container py-2" >
                <Carousel breakPoints={breakPoints} >
                {
                    reviews.map(review => (
                        <Item>
                            <div className="single-review text-center text-dark">
                                <div style={{height:"28px"}}>
                                    <img className="img-fluid home-category-photo" src={review.photo} alt="" />
                                </div>
                                <div className='rating' >
                                    <ReactStars
                                        className='text-center'
                                        count={5}
                                        value={review?.rating}
                                        size={24}
                                        color2={'#fd703c'} />
                                </div>
                                <h6 style={{color:"#fd703c"}}>{review?.name}</h6>
                                <h6>{review?.comments.slice(0,90)}...</h6>
                            </div>
                        </Item>
                    ))
                }
                </Carousel>
            </div>
        </div>
    );
};

export default Review;