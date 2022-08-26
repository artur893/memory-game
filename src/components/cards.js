import { useState, useEffect } from "react"
import { DisplayCards } from "./gamelogic"

const CardsCollection = () => {
    const [cards, setCards] = useState([{ title: "card-0" }, { title: "card-1" }, { title: "card-2" }, { title: "card-3" }])


    useEffect(() => { console.log(cards) }, [])

    const shuffleCard = () => {
        setCards(cards.sort(function (a, b) {
            return Math.random() - 0.5;
        }))
        console.log(cards)
    }

    return (
        <div>
            <DisplayCards
                card0={cards[0].title}
                card1={cards[1].title}
                card2={cards[2].title}
                card3={cards[3].title} />

            <button onClick={shuffleCard}>Shuffle</button>
        </div>
    )
}

export { CardsCollection }