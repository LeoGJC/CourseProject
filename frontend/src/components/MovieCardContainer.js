import React, { useEffect } from "react";
import RLDD from "react-list-drag-and-drop/lib/RLDD";
import { useState } from 'react'
import "./Card.css";

const MovieCardContainer = (props) => {
	const [movies, setMovies] = useState(props.movies);

    useEffect(() => {
		setMovies(props.movies)
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