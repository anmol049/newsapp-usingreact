import React from 'react'
import "./News.css"

function News({news}) {
  console.log(news);
  return (
    <div className='card'>
        <img src={news.urlToImage} alt={news.title}  style={{width:"400px" , height:"400px"}}/>
        <h2>{news.title}</h2>
        <p>{news.description}</p>
    </div>
  )
}

export default News