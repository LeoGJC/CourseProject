import { MovieCardContainer } from './MovieCardContainer'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useState } from 'react'

const MovieSelector = () => {
    const [cardData, setCardData] = useState([{id: 1, text:"Movie 1"}, {id:2, text:"Movie 2"}, {id:3, text:"Movie 3"}]);
    const [movie, setMovie] = useState("");

    const OnAddMovie = () => {
        var movieData = {
            id: cardData.length + 1,
            text: movie,
        }

        setCardData(cardData.concat(movieData));
    }

    return (
        <div>
            <DndProvider backend={HTML5Backend}>
                <div>
                    <input type="text" name="add-movie" onChange={event => setMovie(event.target.value)}/>
                    <input type="submit" text="Add Movie" onClick={OnAddMovie} />
                </div>
                <MovieCardContainer cards={cardData} />
            </DndProvider>
        </div>
    );
}

export default MovieSelector;