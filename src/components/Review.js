import React from 'react';

export default ({info, index}) => {
  let reviewClass = info.positive ? 'positive' : 'negative';

  return (
    <div className="row review">
      <div className="col-md-12">
        <div className="review-name">{info.name}</div>
        <div className={reviewClass += " review-text"} ><p>{info.text}</p></div>
        <div className="review-date">{info.date}</div>
        <hr/>
      </div>
    </div>
  );
};