function PopupWithForm({
    name, 
    title, 
    isOpen, 
    button,
    onClose, 
    children,
    onSubmit
}) 
    {
        return (
            
        <section className={`popup popup_type_${name} section ${isOpen && "popup_opened"}`}>            
        <div className="popup__content"> 
            <button 
                className="popup__close popup__close_profile"
                type="reset" 
                onClick={onClose}
                aria-label="Закрыть"
            ></button>
            <h2 className="popup__title">{title}</h2>
            <form 
                className={`popup__form popup__form-${name}`} 
                name={name} 
                onSubmit={onSubmit}
            >
                {children}
                <button 
                    className="popup__save" 
                    type="submit" 
                >{button}</button>
            </form>
        </div>            
        </section>
    );
}

export default PopupWithForm;

