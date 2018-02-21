export function filterPositive(positive) {
  return {
    type: 'GET_FILTERED_REVIEWS',
    positive
  };
}

export function sortByDate(direction) {
    return {
      type: 'SORT_BY_DATE'
    };
}


export function reset() {
  return {
    type: 'RESET'
  };
}

export function searchText(text) {
  return {
    type: 'SEARCH',
    text
  };
}

function getReviewsPending() {
  return {type: 'GET_REVIEWS_PENDING'}
}

function getReviewsRejected(error) {
  return {type: 'GET_REVIEWS_REJECTED', error}
}

function getReviewsSuccess(reviews) {
  return {
    type: 'GET_REVIEWS_SUCCESS',
    reviews
  };
}

export function fetchReviews(store) {
  return (dispatch) => {
    dispatch(getReviewsPending());
    fetch('https://arh.chibbistest.ru/api/reviews')
      .then((data) => {
        if (data.status >= 200 && data.status < 300) {
          return data.json()
        } else {
          let error = new Error(data.statusText)
          error.response = data
          throw error}
        })
      .then((data) => {
            let reviews = [];
            for (let key in data) {reviews.push(data[key]);}
            dispatch(getReviewsSuccess(reviews));
        })
      .catch( e => dispatch(getReviewsRejected(e)));
  };
}