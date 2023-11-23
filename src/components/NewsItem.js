import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, url, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            className="card-img-top"
            src={
              !imgUrl
                ? "https://www.livemint.com/lm-img/img/2023/11/19/1600x900/Narendra_Modi_Stadium_1700394893087_1700394903499.jpg"
                : imgUrl
            }
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{title}..<span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '80%', zIndex: 1, margin: '23px 0px 0px 0px' }}>
              {source}
            </span></h5>
            <p className="card-text">{description}..</p>
            <p className="card-text"><small className="text-primary ">Last update {new Date(date).toGMTString()}</small></p>
            <a
              rel="noreferrer"
              href={url}
              className="btn btn-sm btn-primary"
              target="_blank"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
