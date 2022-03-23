import React, { useEffect, useState } from "react";
import axios from "axios";

function Newsfeed() {

  const [articles, setArticles] = useState([])

  const newArticles = () => {
    var axios = require("axios").default;

    var options = {
      method: "GET",
      url: "https://crypto-news-live3.p.rapidapi.com/news",
      headers: {
        "X-RapidAPI-Host": "crypto-news-live3.p.rapidapi.com",
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setArticles(response.data)
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(()=>{
    newArticles()
  },[])

  const fewArticles = articles?.slice(0,7)
  

  return(
    <div className="news-feed">
      <h1>News Feeds</h1>
      {fewArticles?.map((article, _index)=>(
        <div key={_index}>
        <a href={article.url}>
        <p>{article.title}</p>
        </a>
          
        </div>
      ))}

    </div>

  ) 
}

export default Newsfeed;
