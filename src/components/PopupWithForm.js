function PopupWithForm({name, isOpen, title, onClose}) {
    return (
        <section className={`popup popup_type_${name} section ${isOpen && "popup_opened"}`}>            
        <div className="popup__content"> 
            <button className="popup__close popup__close_profile" type="button" onClick={onClose}></button>
            <h2 className="popup__title">{title}</h2>
            <form className={`popup__form popup__form-${name}`} name="formProfile" novalidate>
                <input id="nameProfile" className="popup__input popup__input_place_name" name="nameProfile" type="text" placeholder="Имя" minlength="2" maxlength="40" required/>
                <span id="error-nameProfile"  className="error-message error-message_visible"></span>
                <input id="aboutProfile" className="popup__input popup__input_place_about" name="aboutProfile" type="text" placeholder="Расскажите о себе" minlength="2" maxlength="200" required/>
                <span id="error-aboutProfile"  className="error-message error-message_visible"></span>
                <button className="popup__save" type="submit" >Сохранить</button>
            </form>
        </div>            
        </section>
    );
}

export default PopupWithForm;