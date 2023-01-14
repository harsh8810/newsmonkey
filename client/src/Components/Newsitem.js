import React from 'react';
import "./Navbar.css";

const Newsitem =(props)=>
   {
    let { title, description, imageurl, urlnews, author, date, source } = props;
    return (
      <div className='my-3 center-item'>
        <div className="card border-info mb-3 shadow bg-body rounded center-div" style={{ width: "18rem" }}>
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '248px', zIndex: '1' }}>{source}</span>

          <img src={!imageurl ? "https://c.ndtvimg.com/2022-12/vdrnhhco_nasa-orion_625x300_06_December_22.jpg" : imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-primary">By {author ? author : "Unknown"} on {date}</small></p>

            <a rel="noreferrer" href={urlnews} target={"_blank"} className="btn btn-sm btn-dark ">Read More</a>

          </div>
        </div>
      </div>
    )
  }


export default Newsitem
