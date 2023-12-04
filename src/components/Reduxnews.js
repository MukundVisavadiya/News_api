import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchNews } from '../state/action';
import NewsItem from './NewsItem'
import Spinner from './Spinner';

const News = (props) => {
    const [page, setPage] = useState(1);
    const apiData = useSelector((state) => state.news);
    const dispatch = useDispatch()
    console.log("This is api data:", apiData);

    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        document.title = `${capitalize(props.category)} - Breaking News`;
        dispatch(
            fetchNews(
                props.country,
                props.category,
                props.apikey,
                props.pageSize,
                page
            )
        );
    }, []);

    const handlePrevious = () => {
        setPage(page - 1);
        dispatch(
            fetchNews(
                props.country,
                props.category,
                props.apikey,
                props.pageSize,
                page - 1
            )
        );
    };

    const handleNext = () => {
        setPage(page + 1);
        dispatch(
            fetchNews(
                props.country,
                props.category,
                props.apikey,
                props.pageSize,
                page + 1
            )
        );
    };

    return (
        <>
            <h2 className="text-center" style={{ marginTop: '140px' }}>Breaking News - Top {capitalize(props.category)} Headlines</h2>
            {apiData.loading && <Spinner />}
            <div className="container">
                <div className="row py-4">
                    {apiData.articles.map((element) => {
                        return (
                            <div className="col-md-4" key={element && element.url}>
                                <NewsItem
                                    title={element && element.title ? element.title.slice(0, 45) : ""}
                                    description={
                                        element && element.description
                                            ? element.description.slice(0, 88)
                                            : ""
                                    }
                                    imgUrl={element && element.urlToImage}
                                    url={element && element.url}
                                    date={element && element.publishedAt}
                                    source={element && element.source ? element.source.name : ""}
                                />
                            </div>
                        );
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button
                        type="button"
                        disabled={page <= 1}
                        className="btn btn-info text-white"
                        onClick={handlePrevious}
                    >
                        &larr; Previous
                    </button>
                    <button
                        type="button"
                        disabled={
                            page + 1 >
                            Math.ceil(apiData.totalResult / props.pageSize)
                        }
                        className="btn btn-info text-white"
                        onClick={handleNext}
                    >
                        Next &rarr;
                    </button>
                </div>
            </div>
        </>
    )
};


export default News;
