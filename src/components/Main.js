import React, { useEffect } from "react";
import  { useState } from "react";
import Card from "./Card";
import { api} from "../utils/API";

function Main({
    onEditProfile,
    onAddPlace,
    onEditAvatar,
    onCardClick
}) {

    const [currentUser, setCurrentUser] = useState({});
    const [cards, setCards] = useState([]);
    const { avatar, name, about } = currentUser;

    useEffect(() => {
        api.getProfile()
            .then(res=>{
                setCurrentUser(res);
        })
            .catch((err) => console.log(`Ошибка запроса: ${err}`));

        api.getInitialCards()
            .then(res=>{
                setCards(res);
        })
            .catch((err) => console.log(`Ошибка загрузки карточек: ${err}`));
    }, []);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__container">
                    <button className="profile__avatar-button" onClick={onEditAvatar}>
                        <img className="profile__avatar" alt={name} src={avatar}/>
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
                    key={card._id}
                />
                ))}
            </section>
        </main>
    )
}

export default Main