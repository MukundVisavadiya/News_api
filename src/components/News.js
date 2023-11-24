import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

  async updateNews() {
    this.props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(50);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResult: parseData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  static defaultProps = {
    country: 'in',
    pageSize: 12,
    category: 'general',
  }

  static propTypes = {
    name: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apikey: PropTypes.string,
  }

  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResult: 0
    };
    document.title = `${this.capitalize(this.props.category)} - Breaking News`;
  }

  async componentDidMount() {
    this.updateNews();
  }

  handlePrevious = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleNext = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}
    `;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResult: parseData.totalResults,
    });
  };

  render() {
    return (
      <>
        <h2 className="text-center mt-5">Breaking News - Top {this.capitalize(this.props.category)} Headlines</h2>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResult}
          loader={<Spinner />}

        >
          <div className="container">
            <div className="row py-4">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element && element.url}>
                    {console.log(element && element.title)}
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
}

export default News;
