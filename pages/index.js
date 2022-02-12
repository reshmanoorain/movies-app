import React, { useState, useEffect} from "react";
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Cards from './Components/Cards/Cards';
import Movies from './Components/Movies/Movies';
import {Search} from "@mui/icons-material";
import Link from "next/link";


export default function index(props) {
const [data, setData] = useState([]);
const [searchParam, setSearchParam] = useState("")
const [Visible, setVisible] = useState(5);
const loadmore = () => {
  setVisible((Visible) => Visible+5)
}

const img1 =  "https://image.tmdb.org/t/p/w500" ;

useEffect(() => {
  newPromise();
}, []);

const newPromise = () => {
  fetch("https://api.themoviedb.org/3/movie/popular?api_key=0122f66b835be1351367d17f60ca287b&language=en-US&page=1")
    .then((response) => response.json())
    .then((recievedData) => setData(recievedData.results));
};


const result = () => {
  if(searchParam) {
      const myResult = data.filter((data) => {
          return data.title.toLowerCase().includes(searchParam.toLowerCase())
      });
      return myResult ? (
          myResult.map((data) =>
          
          <div key={data.id} className="cards">
              {/* <h1>{data.title}</h1> */}
              <img className="cards1" src={img1 + data.poster_path} />
          </div>
          )
      ):(
          <h1>No Data Found</h1>
      )
  } else {
      return data.slice(0,Visible).map((data) => (
      <Link href={`/Components/data/${data.id}`} key={data.id}>
       <div className="cards" >
           {/* <h1>{data.title}</h1> */}
           <img className="cards1" src={img1 + data.poster_path} />
      </div>
      </Link>


      ))


  }
}

console.log(data);


  return (
    <div> 
    <Header/>
    <Banner/>
    {/* <Input /> */}
    <div className='search'>
            <Search className="btn"/>
                <input className='input' type="text" placeholder='Search Movie and Click E' onChange={(e) => setSearchParam(e.target.value)}/>
         </div>
    <Movies/>
    <Cards/>
    <div className="movie-map">
    {result()}
    </div>
    <div className="btn-container">
      <button onClick={loadmore} className="btn2">Load More</button>
    </div>
  </div>
  )
}


