import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Appmovie.module.scss'
const Appmovie = ({id,title, posterPath,data}) => {
  return (
    <div>
         <div key={id} className={styles.movie}>
            <Link to={`/about/${id}`}>
                  <h2 className={styles.title}>{title}</h2>
                  <img className={styles.img}
                    src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
                    alt={title}
                  />
                  <div className={styles.data}>{data}</div>
            </Link>
            </div>
    </div>
  )
}

export default Appmovie