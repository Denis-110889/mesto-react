

function App() {
return (
    <div className="page">

        <header className="header">
            <img src="./images/header-logo.svg" className="header__logo" alt="Логотип mestro"/>
        </header>

        <main className="content">
            <section className="profile">
                <div className="profile__container">
                    <button className="profile__avatar-button">
                        <img className="profile__avatar" src="#" alt="Фото аватара"/>
                    </button>
                    <div className="profile__info">
                        <div className="profile__name">  
                            <h1 className="profile__title">Загружаю...</h1>
                            <button className="profile__edit-button" type="button"></button>
                        </div> 
                        <p className="profile__subtitle">Загружаю...</p>
                    </div>
                </div>
                <button className="profile__add-button" type="button"></button>
            </section>
            <section className="elements">
            </section>
        </main>

        <footer className="footer">
            <p className="footer__copyring">© 2020 Mesto Russia</p>
        </footer>

        <div className="popup popup_type_profile section">            
            <div className="popup__content"> 
                <button className="popup__close popup__close_profile" type="button"></button>
                <h2 className="popup__title">Редактировать профиль</h2>
                <form className="popup__form popup__form-profile" name="formProfile" novalidate>
                    <input id="nameProfile" className="popup__input popup__input_place_name" name="nameProfile" type="text" placeholder="Имя" minlength="2" maxlength="40" required/>
                    <span id="error-nameProfile"  className="error-message error-message_visible"></span>
                    <input id="aboutProfile" className="popup__input popup__input_place_about" name="aboutProfile" type="text" placeholder="Расскажите о себе" minlength="2" maxlength="200" required/>
                    <span id="error-aboutProfile"  className="error-message error-message_visible"></span>
                    <button className="popup__save" type="submit" >Сохранить</button>
                </form>
            </div>            
        </div>

        <section className="popup popup_type_add-card section">            
            <div className="popup__content"> 
                <button className="popup__close popup__close_image" type="button"></button>
                <h2 className="popup__title">Новое место</h2>
                <form className="popup__form popup__form-image" name="formPlace" novalidate>
                    <input id="namePlace" className="popup__input popup__input_place_place" name="namePlace" type="text" placeholder="Название" minlength="2" maxlength="30" required/>
                    <span id="error-namePlace"  className="error-message error-message_visible"></span>
                    <input id="UrlPlace" className="popup__input popup__input_place_link" name="UrlPlace" type="url" placeholder="Ссылка на картинку" required/>
                    <span id="error-UrlPlace"  className="error-message error-message_visible"></span>
                    <button className="popup__save" type="submit" >Создать</button>
                </form>
            </div>            
        </section>

        <section className="popup popup_type_figure" >
            <figure className="popup__figure">
                <button className="popup__close popup__close_figure" type="button"></button>
                <img className="popup__image" src="http://risovach.ru/upload/2014/10/mem/a-teper-predstav_63375073_orig_.jpeg" alt="подпись к картинке"/>
                <figcaption className="popup__figcaption">Здесь подпись к картинке</figcaption>
            </figure>
        </section>

        <section className="popup popup_type_avatar section">            
            <div className="popup__content"> 
                <button className="popup__close popup__close_image" type="button"></button>
                <h3 className="popup__title">Обновить аватар</h3>
                <form className="popup__form popup__form-avatar"  name="avatarForm" novalidate>
                    <input id="avatar" className="popup__input popup__input_place_avatar" name="avatar" type="url" placeholder="Ссылка на аватар" minlength="2" required/>
                    <span id="error-avatar"  className="error-message error-message_visible"></span>
                    <button className="popup__save" type="submit" >Сохранить</button>
                </form>
            </div>            
        </section>

        <section className="popup popup_type_delete section">            
            <div className="popup__content"> 
                <button className="popup__close popup__close_image" type="button"></button>
                <h3 className="popup__titleDelete">Вы уверены?</h3>    
                <button className="popup__saveDelete popup__save delete-button">Да</button>    
            </div>            
        </section>

        <template className="template__item">
            <article className="element">
                <button className="element__trash"></button>
                <img className="element__image" alt=""/>
                <div className="element__mask-group">
                    <h2 className="element__title"> </h2>
                    <div className="element__heart-container">
                    <button className="element__button" type="button"></button>
                    <p className="element__heart-value"></p>
                    </div>
                </div>
            </article>
        </template>
    </div>
);
}

export default App;
