const cardsContainer = document.querySelector('.cards');
const btnOpenPopupForm = document.querySelector('#add');
const formAddCat = document.querySelector('#popup-form-cat');

const popupAddCat = new Popup('popup-add-cats');

cats.forEach((cat) => {
  const cardInstance = new Card(cat, '#card-template');
  const newCardElement = cardInstance.getElement();
  cardsContainer.append(newCardElement);
});

popupAddCat.setEventListener();
btnOpenPopupForm.addEventListener('click', ()=> popupAddCat.open());

function handleFormAddCat(params) {
    params.preventDefault();
    popupAddCat.close();
}

formAddCat.addEventListener('submit', handleFormAddCat);