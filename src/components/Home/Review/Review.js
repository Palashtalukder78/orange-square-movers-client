import React from 'react';
import Item from './Item';
import Carousel from "react-elastic-carousel";
import useAuth from '../../../hooks/useAuth';
import './Review.css'
import ReactStars from 'react-stars';
const breakPoints = [
    { width: 400, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];
const Review = () => {
    const {allReviews} = useAuth();
    const {reviews} = allReviews;
    return (
        <div className='my-5'>
            <div className='text-center'>
                <h2 className='my-color'>Clients Reviews</h2>
            </div>
            <div class="container ">
                <Carousel breakPoints={breakPoints}>
                {
                    reviews.map(review => (
                        <Item>
                            <div className="single-review text-center text-dark">
                                <div style={{height:"30px"}}>
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