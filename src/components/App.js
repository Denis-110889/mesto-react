import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import React, { useState } from "react";
import { api} from "../utils/API";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [cards, setCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState({});

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

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }
    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }
    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }
    function handleCloseAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard({ isOpen: false });
    }

    function handleCardClick(data) {
        setSelectedCard({
            isOpen: true,
            ...data,
        });
        }

    return (
<body className="body">
    <div className="page">
        <Header />

        <CurrentUserContext.Provider value={currentUser}>
        <Main 
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            cards={cards}
            onCardClick={handleCardClick}/>        
        </CurrentUserContext.Provider>

        <Footer />
        
        <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={handleCloseAllPopups}/>
        <PopupWithForm name="image" title="Новое место"  isOpen={isAddPlacePopupOpen} onClose={handleCloseAllPopups}/>
        <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={handleCloseAllPopups}/>
        <PopupWithForm name="delete" title="Вы уверены?"/>
        <ImagePopup card={selectedCard} onClose={handleCloseAllPopups} />

    </div>
</body>
);
}

export default App;
