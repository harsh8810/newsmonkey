const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");

app.get("/",(req,res)=>{
  res.send("hi i am live bro");
});



app.get("/news",cors(),(req, res) => {
  const category = req.query.category;
  const pageSize = Number(req.query.pageSize);
  const pageNumber = Number(req.query.pageNumber);

  fs.readFile("news.json", (err, data) => {
    if (err) {
      throw err;
    }

    const news = JSON.parse(data);
    let articles = news.articles;
    if (category) {
      articles = articles.filter((article) => article.category === category);
    }
  const articlelength = articles.length;
    // Calculate the starting index and ending index based on pageSize and pageNumber
    const startIndex = pageSize * (pageNumber - 1);
    const endIndex = startIndex + pageSize;

    // Slice the array to get the articles for the current page
    articles = articles.slice(startIndex, endIndex);

    // Create the response object with totalResults and articles properties
    const response = {
      totalResults: articlelength,
      articles: articles,
    };

    res.send(response);
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});




