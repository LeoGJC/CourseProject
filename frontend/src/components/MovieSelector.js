import { MovieCardContainer } from './MovieCardContainer'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const MovieSelector = () => {
	const cardData = [{id: 1, text:"Movie 1"}, {id:2, text:"Movie 2"}, {id:3, text:"Movie 3"}]

    return (
        <div>
            <DndProvider backend={HTML5Backend}>
                <div>
                    <input type="text" name="add-movie"/>
                    <input type="submit" text="Add Movie" />
                </div>
                <MovieCardContainer cards={cardData} />
            </DndProvider>
        </div>
    );
}

export default MovieSelector;