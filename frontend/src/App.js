import React from 'react'
import { MovieCardContainer } from './components/MovieCardContainer'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const App = () => 
{
	const cardData = [{id: 1, text:"Movie 1"}, {id:2, text:"Movie 2"}, {id:3, text:"Movie 3"}]
	
	return (
		<div className="App">
			<DndProvider backend={HTML5Backend}>
				<MovieCardContainer cards={cardData} />
			</DndProvider>
		</div>
	)
}

export default App;
