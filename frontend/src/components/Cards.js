import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router";

function CardsIndex(data) {

	const navigate = useNavigate()
    navigate('/')
	
	const [cards, setCards] = useState([])

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const response = await fetch(``)
	// 		const resData = await response.json()
	// 		setCards(resData)
	// 	}
	// 	fetchData()
	// }, [])

	let cardsFormatted = cards.map((card) => {
		return (
			<div className="col-sm-6" key={card.cardId}>
				<h2>
					<a href="#" onClick={() => navigate.push(`/cards/${cards.cardsId}`)} >
						{card.name}
					</a>
				</h2>
				<p className="text-center">
					{card.cuisines}
				</p>
				<img style={{ maxWidth: 200 }} src={card.pic} alt={card.name} />
				<p className="text-center">
					Located in {card.city}, {card.state}
				</p>
			</div>
		)
	})
	return (
		<main>
			<div className="row">
				{cardsFormatted}
			</div>
		</main>
	)
}

export default CardsIndex