import { useState, useEffect } from "react"
import { DisplayCards } from "./gamelogic"

const Header = (props) => {
    return (
        <div className="header">MEMORY GAME Score:{props.score} Highscore:{props.highScore}</div>
    )
}

const CardsCollection = () => {
    const [cards, setCards] = useState([{ title: "card-0" }, { title: "card-1" }, { title: "card-2" }, { title: "card-3" }])
    const [clickedCards, setClickedCards] = useState([])
    const [score, setScore] = useState(0)
    const [highScore, setHighScore] = useState(0)

    useEffect(() => {
        shuffleCards()
    })

    const shuffleCards = () => {
        setCards(cards.sort(function (a, b) {
            return Math.random() - 0.5;
        }))
    }

    const pickCard = (e) => {
        const pickedTitle = e.target.innerHTML
        if (clickedCards.includes(pickedTitle) === false) {
            setClickedCards([...clickedCards, pickedTitle])
        }
        else (console.log("LOSE!"))
        console.log(clickedCards)
    }

    const updateScore = () => {
        setScore(score + 1)
    }

    return (
        <div>
            <Header score={score} highScore={highScore} />
            <DisplayCards
                card0={cards[0].title}
                card1={cards[1].title}
                card2={cards[2].title}
                card3={cards[3].title}
                onclick={pickCard}
            />
            <button onClick={updateScore}>SCORE!</button>
        </div>
    )
}



export { CardsCollection }