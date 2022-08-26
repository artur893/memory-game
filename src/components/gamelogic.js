import { useState, useEffect } from "react";
import './gamelogic.css'

const DisplayCards = (props) => {
    return (
        <div className="cardsContainer">
            <div className="card" onClick={props.onclick}>{props.card0}</div>
            <div className="card" onClick={props.onclick}>{props.card1}</div>
            <div className="card" onClick={props.onclick}>{props.card2}</div>
            <div className="card" onClick={props.onclick}>{props.card3}</div>
        </div>
    )
}

export { DisplayCards }