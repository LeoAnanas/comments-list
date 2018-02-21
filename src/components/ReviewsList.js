import React from 'react';
import Review from './Review';

export default ({data}) => {

    let reviews = (!data || data.length == 0) ? 'У этого ресторана пока нет отзывов' :
        data.map((review, i) => <Review info={review} key={`review-${i}`}/>);
    
    return (
        <div className="row reviews">
            <div className="col-md-12">
                {reviews}
            </div>
        </div>
    )
}