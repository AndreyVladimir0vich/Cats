const cardsContainer = document.querySelector('.cards');
const btnOpenPopupForm = document.querySelector('#add');
const formAddCat = document.querySelector('#popup-form-cat');

const popupAddCat = new Popup('popup-add-cats');
popupAddCat.setEventListener();

function handleFormAddCat(params) {
    params.preventDefault();
    const elementsFormCat = [...formAddCat.elements];
    const dataFormForm = serializeForm(elementsFormCat);
    api.addNewCat(dataFormForm);
    createCat(dataFormForm);
    popupAddCat.close();

    return dataFormForm;
}

cats.forEach((cat) => {
    createCat(cat);
});

btnOpenPopupForm.addEventListener('click', () => popupAddCat.open());
formAddCat.addEventListener('submit', handleFormAddCat);

api
.getAllCats()
.then((data) => data.forEach((cat) => {
    createCat(cat);
}));