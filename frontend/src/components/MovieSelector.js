import MovieCardContainer from './MovieCardContainer'
import { useState } from 'react'
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import './MovieSelector.css';

const MovieSelector = () => {
    const [cardData, setCardData] = useState([]);
    const [movie, setMovie] = useState("");

    const OnKeyDown = (event) => {
        if (event.key == 'Enter')
            OnAddMovie();
    }

    const OnAddMovie = () => {
        var movieData = {
            id: cardData.length + 1,
            title: movie,
            index: cardData.length + 1,
        }

        setCardData(cardData.concat(movieData));
        setMovie("");
    }

    return (
        <div id='movie-selector-container' className='movie-selector-container-w' >
                <InputGroup>
                    <FormControl 
                        placeholder="Enter a Movie"
                        aria-label="Enter a Movie"
                        value={movie}
                        onKeyDown={OnKeyDown}
                        onChange={event=>setMovie(event.target.value)} />
                    <InputGroup.Append>
                        <Button variant="primary" onClick={OnAddMovie}>Add Movie</Button>
                    </InputGroup.Append>
                </InputGroup>
                <MovieCardContainer movies={cardData} />
                <Button disabled={cardData.length < 2} id='result-button'>See Results</Button>
        </div>
    );
}

export default MovieSelector;