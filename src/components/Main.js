import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Card from "./Card";

function Main({
    onEditProfile,
    onAddPlace,
    onEditAvatar,
    cards,
    onCardClick
}) {

    const currentUser = React.useContext(CurrentUserContext);
    const { avatar, name, about } = currentUser;

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__container">
                    <button className="profile__avatar-button" onClick={onEditAvatar}>
                        <img className="profile__avatar" alt='' src={avatar}/>
                    </button>
                    <div className="profile__info">
                        <div className="profile__name">  
                            <h1 className="profile__title">{name}</h1>
                            <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
                        </div> 
                        <p className="profile__subtitle">{about}</p>
                    </div>
                </div>
                <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
            </section>

            <section className="elements" aria-label="Карточки">
                {cards.map((card) => (
                <Card
                    card={card}
                    onCardClick={onCardClick}
                />
                ))}
            </section>
        </main>
    )
}

export default Main