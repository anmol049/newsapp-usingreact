import React, { useEffect, useRef, useState } from 'react'
import News from './News';
import './NewsApp.css'

function NewsApp() {
    const apikey = "e033d721824e444b832c3ac3d9d08f5b"
    const [newslist , setnewslist] = useState([]);
    const [query , setquery] = useState("tesla");
    const inputref = useRef(null);
    const apiurl  = `https://newsapi.org/v2/everything?q=${query}&from=2023-10-30&sortBy=publishedAt&apiKey=${apikey}`

function handleSubmit(event){
    const refvalue = inputref.current.value;
    event.preventDefault();
    setquery(refvalue);
}
 async function fetchapi(){
    try{
        let response = await fetch(apiurl);
        let jsondata = await response.json();
        console.log(jsondata.articles)
        setnewslist(jsondata.articles)
        }catch(e){
        console.log(e, "error occured")
    }
}
useEffect(()=>{
    fetchapi();
},[query]);
return (
    <div className="big-containor">
        <form action="#" onSubmit={handleSubmit} className="form">
        <input type="text" placeholder="search news" ref={inputref} id="search-box" />
        <input type="submit" onClick={handleSubmit} />
    </form>
    <div className='containor'>
        {newslist.map((news,index)=>{
            return <News news={news} key={index}/>
        })}
    </div>
    </div>
)
}

export default NewsApp