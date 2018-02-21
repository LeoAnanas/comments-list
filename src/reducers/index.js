const initialState = {
    reviews: null,
    initialData: null,
    sorted: false,
    derection: false,
    ready: false
  };
  
  export default function reviewstate(state = initialState, action) {
    switch (action.type) {
    
        case 'GET_REVIEWS_SUCCESS':
          return { ...state, initialData: action.reviews, reviews: action.reviews, ready: true }

        case 'GET_FILTERED_REVIEWS':
            const filterType = action.positive; 
            let filtered = state.initialData.filter((review) => review.positive == filterType);
            return { ...state, reviews: filtered }

        case 'RESET':
            return { ...state, reviews: state.initialData}
  

        case 'SORT_BY_DATE': 
            let direction = state.direction ? 1 : -1;
            
            const sortedReviews = state.reviews.sort((a, b) => {
                if (a.date === b.date) { return 0; }
                return a.date < b.date ? direction : direction * -1;
            }); 

        return { ...state, reviews: sortedReviews, sorted: true, derection: !state.direction}

        case 'SEARCH':
            const text = action.text; 
            let searchResult = state.initialData.filter((review) => {
                return review.text.toLowerCase().includes(text);
              });
        return { ...state, reviews: searchResult }

        default:
          return state;
      }
  }