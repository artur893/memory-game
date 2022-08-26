import { useState, useEffect } from "react";
import './gamelogic.css'

const DisplayCards = (props) => {
    return (
        <div className="cardsContainer">
            <div className="card">{props.card0}</div>
            <div className="card">{props.card1}</div>
            <div className="card">{props.card2}</div>
            <div className="card">{props.card3}</div>
        </div>
    )
}

export { DisplayCards }