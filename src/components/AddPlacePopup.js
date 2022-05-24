import { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
    const [name, setName] = useState("");
    const [link, setLink] = useState("");

    function inputName(e) {
        setName(e.target.value);
    }

    function inputLink(e) {
        setLink(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        onAddPlace({
        name,
        link,
    });
    }

    useEffect(() => {
        setName("");
        setLink("");
    }, [isOpen]);

return (
    <PopupWithForm
        name="image"
        title="Новое место"
        button="Добавить"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
    >
    <input
        id="namePlace"
        className="popup__input popup__input_place_place"
        onChange={inputName}
        name="namePlace"
        type="text"
        value={name}
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
    />
    <span
        id="error-namePlace"
        className="error-message error-message_visible"
    ></span>
    <input
        id="UrlPlace"
        className="popup__input popup__input_place_link"
        onChange={inputLink}
        name="UrlPlace"
        type="url"
        value={link}
        placeholder="Ссылка на картинку"
        required
    />
    <span
        id="error-UrlPlace"
        className="error-message error-message_visible"
    ></span>
    </PopupWithForm>
);
}
