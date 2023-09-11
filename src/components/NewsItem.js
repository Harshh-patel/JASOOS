import React/* , { Component } */ from "react";

const NewsItem=(props)=> {
  
    let { title, description, imageUrl, newsUrl, author, date, source } =
      props;
    return (
      <div className='my-3'>
        <div className='card' style={{ height: "520px" }}>
          <div>
            <span
              className='position-absolute top-0 translate-middle badge rounded-pill bg-danger'
              style={{ left: "90%", zIndex: "1" }}>
              {source}
            </span>
          </div>
          <img
            src={
              !imageUrl
                ? "https://scx2.b-cdn.net/gfx/news/hires/2023/indias-moon-rover-comp.jpg"
                : imageUrl
            }
            className='card-img-top'
            alt='...'
          />
          <div className='card-body'>
            <h5 className='card-title'>{title.slice(0, 35)}</h5>
            <p className='card-text'>{description.slice(0, 70)}...</p>
            <div className='card-footer'>
              <small className='text-body-secondary'>
                by:{!author ? "unknown" : author} on{" "}
                {new Date(date).toUTCString()}
              </small>
            </div>
            <center>
              <a
                href={newsUrl}
                target='_blank'
                rel='noreferrer'
                className='btn btn-sm btn-primary '>
                Read More
              </a>
            </center>
          </div>
        </div>
      </div>
    );
  }

export default NewsItem;
