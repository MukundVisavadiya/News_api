import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResult, setTotalResult] = useState(0);

  const updateNews = async () => {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(50);
    let parseData = await data.json();
    setArticles(parseData.articles);
    setTotalResult(parseData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    document.title = `${capitalize(props.category)} - Breaking News`
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}&pageSize=${props.pageSize}
    `;
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles));
    setTotalResult(parseData.totalResults)
  };

  return (
    <>
      <h2 className="text-center" style={{ marginTop: '140px' }}>Breaking News - Top {capitalize(props.category)} Headlines</h2>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResult}
        loader={<Spinner />}

      >
        <div className="container">
          <div className="row py-4">
            {articles.map((element) => {
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
      </InfiniteScroll>
    </>
  );
}

News.defaultProps = {
  country: 'in',
  pageSize: 12,
  category: 'general',
}

News.propTypes = {
  name: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}
export default News;
