import MovieCardContainer from './MovieCardContainer'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useState } from 'react'
import { Row, Button, Col, InputGroup, FormControl } from 'react-bootstrap';

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
        <Row>
            <Col md={1} sm={0}/>
            <Col md={10} sm={12}>
            <InputGroup>
                <FormControl 
                    placeholder="Enter a Movie"
                    aria-label="Enter a Movie"
                    onChange={event=>setMovie(event.target.value)} />
                <InputGroup.Append>
                    <Button variant="primary" onClick={OnAddMovie}>Add Movie</Button>
                </InputGroup.Append>
            </InputGroup>
            <MovieCardContainer movies={cardData} />
            </Col>
        </Row>
    );
}

export default MovieSelector;