import React, { useEffect } from "react";
import RLDD from "react-list-drag-and-drop/lib/RLDD";
import { useState } from 'react'
import "./Card.css";

const MovieCardContainer = (props) => {
	const [movies, setMovies] = useState(props.movies);

    useEffect(() => {
		let newMovies = Array.from(movies);

		for (let i = 0; i < props.movies.length; i++) {
			var isMovieAlreadyInList = false;
			for (let j = 0; j < movies.length; j++) {
				if (props.movies[i].id == movies[j].id) {
					isMovieAlreadyInList = true;
					break;
				}
			}

			if (!isMovieAlreadyInList)
				newMovies.push(props.movies[i]);
		}

		setMovies(newMovies);
	}, [props.movies])

  const itemRenderer = (item, index) => {
    return (
      <div className="item">
        <p className="title">{item.title}</p>
        <p className="body">{item.body}</p>
        <div className="small">
          item.id: {item.id} - index: {index}
        </div>
      </div>
    );
  }

    return (
      <div>
        <RLDD
          cssClasses="example"
          items={movies}
          itemRenderer={itemRenderer}
          onChange={setMovies}
        />
      </div>
    );
}

export default MovieCardContainer;