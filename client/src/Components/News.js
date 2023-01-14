import React, { useEffect } from "react";
import Newsitem from "./Newsitem";
import Load from "./Load";
import PropTypes from "prop-types";
import { useState } from "react";

const News = (props) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  let [page, setPage] = useState(1);
  
  const [totalResults, setTotalResults] = useState(0);

  const updatenews = async () => {
    props.setProgress(10);
    const url = `https://smoggy-khakis-fox.cyclic.app/news?category=${props.category}&pageSize=${props.pageSize}&pageNumber=${page}`;
    // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ce6044476be34f6cba091e513434dc57&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    console.log(`page no. ${page}`);

    let data = await fetch(url);
    props.setProgress(30);
    let parsedata = await data.json();
    props.setProgress(70);
    console.log(parsedata);
    setArticles(parsedata.articles);
    setTotalResults(parsedata.totalResults);
    setLoading(false);

    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `NewsHub-${capitalizeFirstLetter(props.category)}`;
    updatenews();
    setPage(1);
    // eslint-disable-next-line
  }, []);

  const nextclick = () => {
    console.log(`page no before clicking next button -- ${page}`);

    setPage((page = page + 1));
    console.log(`page no after clicking next button -- ${page}`);

    updatenews();
  };

  const previousclick = () => {
    console.log(`page no before clicking previous button -- ${page}`);

    setPage((page = page - 1));

    console.log(`page no after clicking previous button -- ${page}`);

    updatenews();
  };

  return (
    <>
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "70px 0px 20px 0px" }}>
          News Hub Top-Headlines from {capitalizeFirstLetter(props.category)}
        </h1>
        <div
          className="container"
          style={{ position: "relative", top: "200px" }}
        >
          {loading && <Load />}
        </div>

        <div className="row">
          {!loading &&
            articles.map((elem) => {
              return (
                <div className="col-md-4" key={elem.url}>
                  <Newsitem
                    title={elem.title ? elem.title.slice(0, 45) : ""}
                    description={
                      elem.description ? elem.description.slice(0, 88) : ""
                    }
                    imageurl={elem.urlToImage}
                    urlnews={elem.url}
                    author={elem.author}
                    date={elem.publishedAt}
                    source={elem.source.name}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          {!loading &&
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={previousclick}
          >
            &larr;Previous
          </button>
          }
           {!loading &&
          <button
            disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
            type="button"
            className="btn btn-dark "
            onClick={nextclick}
            style={{ width: "102px" }}
          >
            {" "}
            Next &rarr;
          </button>
            }
        </div>
      </div>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
