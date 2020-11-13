import React, { useState, useEffect, useCallback } from 'react';
import { Card } from './Card';
import update from 'immutability-helper';

const style = {
    width: "30%",
};

export const MovieCardContainer = (props) => 
{
	useEffect(() => {
		setCards(props.cards);
		console.log(props.cards)
	}, [props]);

	const [cards, setCards] = useState(props.cards);
	const moveCard = useCallback((dragIndex, hoverIndex) => {
		const dragCard = props.cards[dragIndex];
		setCards(update(props.cards, {
			$splice: [
			[dragIndex, 1],
			[hoverIndex, 0, dragCard],
		],
	    }));
	}, [props.cards]);
	    
	const renderCard = (card, index) => {
	    return (<Card key={card.id} index={index} id={card.id} text={card.text} moveCard={moveCard}/>);
	};

	return (<>
		    <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
		</>);
};
