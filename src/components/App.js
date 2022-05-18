import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import React, { useState } from "react";

function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});

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
        <div className="page">
        <Header />

        <Main 
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}/>        

        <Footer />
        
        <PopupWithForm 
            title="Редактировать профиль" 
            button="Сохранить" 
            isOpen={isEditProfilePopupOpen} 
            onClose={handleCloseAllPopups}
            name="profile" 
        >
            <input 
                id="nameProfile" 
                class="popup__input popup__input_place_name" 
                name="nameProfile" 
                type="text" 
                placeholder="Имя" 
                minlength="2" 
                maxlength="40" 
                required
            />
            <span 
                id="error-nameProfile"  
                class="error-message error-message_visible">
            </span>
            <input 
                id="aboutProfile" 
                class="popup__input popup__input_place_about" 
                name="aboutProfile" 
                type="text" 
                placeholder="Расскажите о себе"
                minlength="2" 
                maxlength="200" 
                required>
            </input>
            <span
                id="error-aboutProfile"  
                class="error-message error-message_visible">
            </span>
        </PopupWithForm>

        <PopupWithForm 
            name="image" 
            title="Новое место"  
            button="Добавить" 
            isOpen={isAddPlacePopupOpen} 
            onClose={handleCloseAllPopups}
        >
            <input 
                id="namePlace" 
                class="popup__input popup__input_place_place" 
                name="namePlace" 
                type="text" 
                placeholder="Название" 
                minlength="2"
                maxlength="30" 
                required
            />
            <span 
                id="error-namePlace" 
                class="error-message error-message_visible">
            </span>
            <input 
                id="UrlPlace" 
                class="popup__input popup__input_place_link" 
                name="UrlPlace"
                type="url" 
                placeholder="Ссылка на картинку" 
                required
            />
            <span 
                id="error-UrlPlace" 
                class="error-message error-message_visible">
            </span>
        </PopupWithForm>

        <PopupWithForm 
            name="avatar" 
            title="Обновить аватар" 
            button="Обновить" 
            isOpen={isEditAvatarPopupOpen} 
            onClose={handleCloseAllPopups}
        >
            <input 
                id="avatar" 
                class="popup__input popup__input_place_avatar" 
                name="avatar" 
                type="url" 
                placeholder="Ссылка на аватар"
                minlength="2" 
                required
            />
            <span 
                id="error-avatar"  
                class="error-message error-message_visible">
            </span>
        </PopupWithForm>

        <PopupWithForm 
            name="delete" 
            title="Вы уверены?" 
            button="Да"
        ></PopupWithForm>

        <ImagePopup 
            card={selectedCard} 
            onClose={handleCloseAllPopups} 
        ></ImagePopup>
        
    </div>
);
}

export default App;
