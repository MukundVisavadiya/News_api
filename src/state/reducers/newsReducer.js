import { FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS, FETCH_NEWS_FAILURE } from "../action/action.type";

const initialState = {
    articles: [],
    loading: true,
    page: 1,
    totalResult: 0,
    error: null,
};

console.log(initialState);

const newsReducer = (state = initialState, action) => {
    console.log("this is reducer action", action);
    switch (action.type) {
        case FETCH_NEWS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_NEWS_SUCCESS:
            return {
                ...state,
                articles: action.payload.articles,
                totalResult: action.payload.totalResult,
                loading: false,
                error: null,
            };
        case FETCH_NEWS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };
        default:
            return state;
    }
};

export default newsReducer;
