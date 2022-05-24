import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
    const inputRef = React.useRef(null);

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({
            avatar: inputRef.current.value,
    });
}

React.useEffect(() => {
    inputRef.current.value = '';
}, [isOpen]);

return (
    <PopupWithForm 
        name="avatar" 
        title="Обновить аватар" 
        button="Обновить" 
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
    >
        <input 
            id="avatar" 
            className="popup__input popup__input_place_avatar" 
            name="avatar" 
            type="url" 
            ref={inputRef}
            placeholder="Ссылка на аватар"
            minLength="2" 
            required
        />
        <span 
            id="error-avatar"  
            className="error-message error-message_visible">
        </span>
    </PopupWithForm>
);
}