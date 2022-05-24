import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {

    const currentUser = React.useContext(CurrentUserContext);
    // Определяю, являюсь ли я владельцем карточки
    const isOwn = card.owner._id === currentUser._id;
    // Создаю переменную, которую после задам в `className` для кнопки удаления
    const cardDeleteButtonClassName = isOwn ? "element__trash" : 'element__trash-button';
    // Определяю, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    // Создаю переменную, которую после задам в `className` для кнопки лайка
    const cardLikeButtonClassName = isLiked
    ? "element__button_active"
    : "element__button";

    function handleClick() {
        onCardClick(card);
        }

    function handleLikeClick() {
        onCardLike(card);
        }

    function handleDeleteClick() {
        onCardDelete(card);
        }

    return (
        <article className="template__item">
        <article className="element">
            <button 
                className={cardDeleteButtonClassName} 
                onClick={handleDeleteClick}>
            </button>
            <img 
                className="element__image" 
                src={card.link} 
                alt={card.name} 
                onClick={handleClick}
            />
            <div className="element__mask-group">
                <h2 className="element__title" >{card.name}</h2>
                <div className="element__heart-container">
                <button 
                    className={cardLikeButtonClassName} 
                    onClick={handleLikeClick} 
                    type="button">
                </button>
                <p className="element__heart-value">{card.likes.length}</p>
                </div>
            </div>
        </article>
    </article>
    );
}

export default Card;