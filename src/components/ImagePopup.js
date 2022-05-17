function ImagePopup({ card, onClose }) {
    return (
        <section className={`popup popup_type_figure ${card.isOpen && "popup_opened"}`} >
        <figure className="popup__figure">
            <button className="popup__close popup__close_figure" onClick={onClose} type="reset" aria-label="Закрыть"></button>
            <img className="popup__image" src={card.link} alt={card.name}/>
            <figcaption className="popup__figcaption">{card.name}</figcaption>
        </figure>
    </section>
    );
}

export default ImagePopup;