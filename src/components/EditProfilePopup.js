import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");
    const currentUser = React.useContext(CurrentUserContext);

    function inputName(e) {
        setName(e.target.value);
    }
    
    function inputDescription(e) {
        setDescription(e.target.value);
    }
    
    function handleSubmit(e) {
        e.preventDefault();
            onUpdateUser({
            name,
            about: description,
        });
    }
    
    React.useEffect(() => {
        setName(currentUser.name || "");
        setDescription(currentUser.about || "");
    }, [currentUser, isOpen]);

    return (
    <PopupWithForm 
        title="Редактировать профиль" 
        button="Сохранить" 
        isOpen={isOpen}
        onClose={onClose}
        name="profile" 
        onSubmit={handleSubmit}
    >
        <input 
            onChange={inputName}
            id="nameProfile" 
            className="popup__input popup__input_place_name" 
            name="nameProfile" 
            type="text" 
            placeholder="Имя" 
            minLength="2" 
            maxLength="40" 
            required
        />
        <span 
            id="error-nameProfile"  
            className="error-message error-message_visible">
        </span>
        <input 
            onChange={inputDescription}
            id="aboutProfile" 
            className="popup__input popup__input_place_about" 
            name="aboutProfile" 
            type="text" 
            placeholder="Расскажите о себе"
            minLength="2" 
            maxLength="200" 
            required>
        </input>
        <span
            id="error-aboutProfile"  
            className="error-message error-message_visible">
        </span>
    </PopupWithForm>
    );
}