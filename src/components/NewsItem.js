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
            <h5 className="card-title">{title}..<span className="badge rounded-pill bg-danger" style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: 10, top: 10 }}>
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
