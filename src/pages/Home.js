import React, { useEffect, useState} from "react";
import axios from 'axios'
import Appmovie from "../components/Appmovie";
import styles from './Home.module.scss';

const Home = () => {
  const [isLoading, setloading] = useState(true);
  const [appMovie, setappMovie] = useState([]);

  const getMovies = async () => {
    const Movie = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=4ed08358326bfbef17487ba953a86239&language=ko-KR&region=KR"
    );

    setappMovie(Movie.data.results);
    setloading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  console.log(appMovie);
  return (
    <div>
      {isLoading ? (<div><span className="load">Loading...</span></div>) : (

        <div className={styles.appWrap}>
          {appMovie.map((movie) => (
            <Appmovie id={movie.id} title={movie.title} posterPath={movie.poster_path} data={movie.release_date}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
