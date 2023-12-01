import { FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS, FETCH_NEWS_FAILURE } from "./action.type";

export const fetchNews = (country, category, apikey, pageSize, page) => {
    return async (dispatch) => {

        dispatch({
            type: FETCH_NEWS_REQUEST,
        });

        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apikey}&page=${page}&pageSize=${pageSize}`;

        try {
            let data = await fetch(url);
            let parseData = await data.json();
            dispatch({
                type: FETCH_NEWS_SUCCESS,
                payload: parseData,
            });
        } catch (error) {
            dispatch({
                type: FETCH_NEWS_FAILURE,
                payload: {
                    error,
                },
            });
        }
    };
};