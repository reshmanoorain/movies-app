import Header2 from '../Header2/Header2';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from "axios";
import Link from 'next/link';


function Movie() {
    const router = useRouter();
    const [mov, setMov] = React.useState([]);
    const [char, setChar] = React.useState([]);
    const {id} = router.query;
    

    const img_one = "https://image.tmdb.org/t/p/w1280"
    const img_two = "https://image.tmdb.org/t/p/w500"

    const fetch =() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=0122f66b835be1351367d17f60ca287b&language=en-US`)
        .then((result)=>{   
            setMov(result.data)
        }
        )
        .catch((err)=> console.log(err))
    }
    const fetch_one =() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=4eb0f63066123e2dc99ea2a934d543da`)
        .then((result)=>{   
            setChar(result.data.cast)
        }
        )
        .catch((err)=> console.log(err))
    }
    useEffect(()=>{
        fetch(); 
       
    },[])

    useEffect(()=>{
        console.log('mov',mov);
    },[mov])

    useEffect(()=>{
        fetch_one();  
    },[])

    useEffect(()=>{
        
        console.log('char',char);
    },[char])

    const mapchar = () => {
        return char.map((char)=>{
            return(
                <div className="char" key={char.id}>
                    <div className='actors'>
                    <img className='crew' src={img_two + char.profile_path} alt=""/>
                    <h3>{char.name}</h3>
                    <p>{char.character}</p>
                    </div>
                </div>
            )
        })
    }

  return (
      <div>
          <Header2/>
      <div className='head1'>
          <Link href="/"><h1 className='line'>Home</h1></Link>
          <p className='line'>|</p>
          <p className='line'>{mov.title}</p>
      </div>
      
        <img className='back_img' src={img_one + mov.backdrop_path} alt="" />
    
        <div className='backdrop'>
        <div className='backdrop_div'>
        <img className='back_img2' src={img_two + mov.poster_path} alt=''/>
        </div>
        
        <div className='backdrop_div2'>
        <div className='deets'>
        <h1>{mov.title}</h1>
        <h3 className='plot'>PLOT</h3>
        <p className='plot'>{mov.overview}</p>
        <h3 className='plot'>IMDB RATING</h3>
        <p className='rating'>{mov.vote_average}</p>
        </div >
        </div>
        </div>

            
        <div className='crew1'>
        <div className='crew2'>
        <p className='crew3'>Running Time:</p>
        <p className='crew3'>{mov.runtime} minutes</p>
        </div>

        <div className='crew2'>
            <p className='crew3'>Budget:</p>
            <p className='crew3'>${mov.budget}</p>
            </div>

        <div className='crew2'>
       <p className='crew3'>Revenue:</p>
        <p className='crew3'>${mov.revenue}</p>
       </div>
        </div>
        <h1 className='actors_head'>Actors</h1>

        <div className='crew_cards'>
              {mapchar()}
           </div>

        
            
            

       
            
    </div>
  
  )
}

export default Movie;