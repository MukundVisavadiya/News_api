import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchNews } from '../state/action';
import NewsItem, { NewsItem1 } from './NewsItem'
import Spinner from './Spinner';

const News = (props) => {
    const [page, setPage] = useState(1);
    const apiData = useSelector((state) => state.news);
    const dispatch = useDispatch()
    console.log(apiData);

    useEffect(() => {
        dispatch(
            fetchNews(props.country, props.category, props.apikey, props.pageSize, page)
        );
    }, []);


    // 

    // const capitalize = (string) => {
    //     if (string && typeof string === 'string') {
    //         return string.charAt(0).toUpperCase() + string.slice(1);
    //     }
    //     return '';
    // }

    // useEffect(() => {
    //     document.title = `${capitalize(props.category)} - Breaking News`;

    //     props.fetchNews(props.country, props.category, props.apikey, props.pageSize, page);
    // }, [props.category, props.country, props.apikey, props.pageSize, page]);
    return (
        <>
            <NewsItem1 />
            {apiData.loading && 'LYou do not need to include values from ownProps in the object returned from mapStateToProps. connect will automatically merge those different prop sources into a final set of props Return LYou do not need to include values from ownProps in the object returned from mapStateToProps. connect will automatically merge those different prop sources into a final set of props ReturnLYou do not need to include values from ownProps in the object returned from mapStateToProps. connect will automatically merge those different prop sources into a final set of props Return LYou do not need to include values from ownProps in the object returned from mapStateToProps. connect will automatically merge those different prop sources into a final set of props ReturnLYou do not need to include values from ownProps in the object returned from mapStateToProps. connect will automatically merge those different prop sources into a final set of props ReturnLYou do not need to include values from ownProps in the object returned from mapStateToProps. connect will automatically merge those different prop sources into a final set of props ReturnLYou do not need to include values from ownProps in the object returned from mapStateToProps. connect will automatically merge those different prop sources into a final set of props ReturnLYou do not need to include values from ownProps in the object returned from mapStateToProps. connect will automatically merge those different prop sources into a final set of props ReturnLYou do not need to include values from ownProps in the object returned from mapStateToProps. connect will automatically merge those different prop sources into a final set of props ReturnLYou do not need to include values from ownProps in the object returned from mapStateToProps. connect will automatically merge those different prop sources into a final set of props ReturnLYou do not need to include values from ownProps in the object returned from mapStateToProps. connect will automatically merge those different prop sources into a final set of props ReturnLYou do not need to include values from ownProps in the object returned from mapStateToProps. connect will automatically merge those different prop sources into a final set of props ReturnLYou do not need to include values from ownProps in the object returned from mapStateToProps. connect will automatically merge those different prop sources into a final set of props Return'}
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
            </div>

            <NewsItem1 />

        </>
    )




};


export default News;
