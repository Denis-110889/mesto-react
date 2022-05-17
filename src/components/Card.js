import React from "react";


function Card({ card, onCardClick }) {

    function handleClick() {
        onCardClick(card);
        }

    return (
        <article className="template__item">
        <article className="element">
            <button className="element__trash"></button>
            <img className="element__image" src={card.link} alt={card.name} onClick={handleClick}/>
            <div className="element__mask-group">
                <h2 className="element__title" > {card.name} </h2>
                <div className="element__heart-container">
                <button className="element__button" type="button"></button>
                <p className="element__heart-value">{card.likes.length} </p>
                </div>
            </div>
        </article>
    </article>
    );
}

export default Card;