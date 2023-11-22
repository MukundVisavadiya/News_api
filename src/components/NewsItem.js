import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, url } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
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
            <h5 className="card-title">{title}..</h5>
            <p className="card-text">{description}..</p>
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
