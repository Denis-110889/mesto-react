import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import React from "react";

function Main({
    onEditProfile,
    onAddPlace,
    onEditAvatar,
    onCardClick,
    onCardLike,
    onCardDelete,
    cards
}) {

    const currentUser = React.useContext(CurrentUserContext);
    const { avatar, name, about } = currentUser;

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__container">
                    <button 
                        className="profile__avatar-button"
                        onClick={onEditAvatar}>
                            <img 
                                className="profile__avatar" 
                                alt={name} 
                                src={avatar}/>
                    </button>
                    <div className="profile__info">
                        <div className="profile__name">  
                            <h1 className="profile__title">{name}</h1>
                            <button 
                                className="profile__edit-button" 
                                type="button" 
                                onClick={onEditProfile}>
                            </button>
                        </div> 
                        <p className="profile__subtitle">{about}</p>
                    </div>
                </div>
                <button 
                    className="profile__add-button" 
                    type="button" 
                    onClick={onAddPlace}>
                </button>
            </section>

            <section className="elements" aria-label="Карточки">
                {cards.map((card) => (
                <Card
                    card={card}
                    onCardClick={onCardClick}
                    key={card._id}
                    onCardLike={onCardLike}
                    onCardDelete={onCardDelete}
                />
                ))}
            </section>
        </main>
    )
}

export default Main