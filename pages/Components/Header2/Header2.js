import { Movie } from "@mui/icons-material";
import Link from "next/link";


function Header2(props) {
    return <div>
        <header className='header2'>
        <Link href={"/"} >
            <img className='img1'  src="https://mini-movie-app.netlify.app/static/media/reactMovie_logo.08494abf.png" />
            </Link>
            <img className="img2" src="https://mini-movie-app.netlify.app/static/media/tmdb_logo.30cd724b.svg" />
        </header>
         
            
    </div>;

    
}

export default Header2;

