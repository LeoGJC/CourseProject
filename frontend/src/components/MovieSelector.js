import MovieCardContainer from './MovieCardContainer'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useState } from 'react'

const MovieSelector = () => {
    const [cardData, setCardData] = useState([{id: 1, title:"Movie 1", index: 1}, {id:2, title:"Movie 2", index: 2}, {id:3, title:"Movie 3", index:1}]);
    const [movie, setMovie] = useState("");

    const OnAddMovie = () => {
        var movieData = {
            id: cardData.length + 1,
            title: movie,
            index: cardData.length + 1,
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
                <MovieCardContainer movies={cardData} />
            </DndProvider>
        </div>
    );
}

export default MovieSelector;