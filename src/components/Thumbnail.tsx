import Image from 'next/image'
import React from 'react'
import {Movie} from '../types/Movie'

interface ThumbnailProps {
  movie: Movie
}

const Thumbnail: React.FC<ThumbnailProps> = ({movie}) => {
  return (
    <div
      className={`relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105`}
      onClick={() => {
        // setCurrentMovie(movie)
        // setShowModal(true)
      }}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="object-cover rounded-sm md:rounded"
        layout="fill"
      />
    </div>
  )
}

export default Thumbnail
