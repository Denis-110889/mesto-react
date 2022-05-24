import { useState, useEffect } from "react"; 
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { api} from "../utils/API";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});
    const [currentUser, setCurrentUser] = useState({});
    const [cards, setCards] = useState([]);

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

    function handleCardLike(card) {
        const isLiked = card.likes.some((i) => i._id === currentUser._id);
        api
            .changeLikeCardStatus(card._id, !isLiked)
            .then((newCard) => {
        setCards((state) =>
            state.map((item) => (item._id === card._id ? newCard : item))
        );
        })
            .catch((err) => console.log(`Ошибка.....: ${err}`));
        }

    function handleCardDelete(card) {
        api
            .deleteCard(card._id)
            .then(() => {
        setCards((state) => state.filter((item) => item._id !== card._id));
        })
            .catch((err) => console.log(`Ошибка.....: ${err}`));
        }

        function handleUpdateUser({ name, about }) {
        api
            .editProfile(name, about)
            .then((res) => {
                setCurrentUser(res);
                handleCloseAllPopups();
        })
            .catch((err) => console.log(`Ошибка....: ${err}`));
        }

        function handleUpdateAvatar({ avatar }) {
            api
                .editUserAvatar(avatar)
                .then((res) => {
                setCurrentUser(res);
                handleCloseAllPopups();
            })
                .catch((err) => console.log(`Ошибка загрузки аватара: ${err}`));
        }

        
        function handleAddPlaceSubmit({ name, link }) {
            api
                .addCard(name, link)
                .then((newCard) => {
                setCards([newCard, ...cards]);
                handleCloseAllPopups();
            })
                .catch((err) => console.log(`Ошибка добавления карточки: ${err}`));
        }

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
        <CurrentUserContext.Provider value={currentUser}>
            <Main 
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
                onCardLike={handleCardLike}
                cards={cards}
                onCardDelete={handleCardDelete}/>        
            <Footer />
            <EditProfilePopup
                isOpen={isEditProfilePopupOpen}
                onClose={handleCloseAllPopups}
                onUpdateUser={handleUpdateUser}/>
            <AddPlacePopup
                isOpen={isAddPlacePopupOpen}
                onClose={handleCloseAllPopups}
                onAddPlace={handleAddPlaceSubmit}/>
            <EditAvatarPopup
                isOpen={isEditAvatarPopupOpen}
                onClose={handleCloseAllPopups}
                onUpdateAvatar={handleUpdateAvatar}/>

            <PopupWithForm 
                name="delete" 
                title="Вы уверены?" 
                button="Да"
            ></PopupWithForm>

            <ImagePopup 
                card={selectedCard} 
                onClose={handleCloseAllPopups} 
            ></ImagePopup>
        </CurrentUserContext.Provider>
    </div>
);
}

export default App;