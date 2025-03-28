const initialCards=[
    {
        name:'Yosemite Valley',
        link:'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg'
    },    
    {
        name:'Lake Louise',
        link:'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg'
    },
    {
        name:'Bald Mountains',
        link:'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg'
    },
    {
        name:'Latemar',
        link:'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg'

    },
    {
        name:'Vanoise National Park',
        link:'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg'
    },
    {
        name:'Lago di Braies',
        link:'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg'
    }
    ]

//Modals&Forms
const profileEditModal = document.querySelector('#edit-modal');
const addImageModal = document.querySelector('#image-modal');
const profileName = document.querySelector('.profile__name');
const profileEditModalForm = profileEditModal.querySelector('.modal__form');
const addImageModalForm = addImageModal.querySelector('.modal__form');
const cardModal=document.querySelector('#card-modal');

//Buttons
const editButton = document.querySelector('.profile__edit-button');
const addImageButton = document.querySelector('.profile__add-button');
const profileCloseButton = profileEditModal.querySelector('.modal__close-button');
const addImageCloseButton = addImageModal.querySelector('.modal__close-button');
const cardModalCloseButton = cardModal.querySelector('.modal__close-button_image');

//Values
const profileDescription = document.querySelector('.profile__description');
const profileNameInput = document.querySelector('#profile-name-input');
const imageTitleInput = addImageModalForm.querySelector('#title-input');
const profileDescriptionInput=document.querySelector('#profile-description-input');
const imageLinkInput=addImageModalForm.querySelector('#image-link-input');
const cardGallaryElement=document.querySelector('.cards__gallery');
const cardTemplate=document.querySelector('#card-template').content.firstElementChild;
const modalImageElement=document.querySelector('.modal__image');
const modalCaptionElement=document.querySelector('.modal__caption');

//Modal Functions
function closeModal(modal) {
    modal.classList.remove('modal_open');
}

function openModal(modal) {
    modal.classList.add('modal_open');
}

//Edit Profile Modal - Add Button Modal - Card Modal
function hanldeProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent=profileNameInput.value;
    profileDescription.textContent=profileDescriptionInput.value;
    closeModal(profileEditModal);
}

function handleAddCardClick(evt) {
    evt.preventDefault();
    
    renderCard({name:imageTitleInput.value, link:imageLinkInput.value,}, cardGallaryElement);
    closeModal(addImageModal);
    evt.target.reset();
}


function handleImageClick(data) {
    modalImageElement.src=data.link
    modalImageElement.alt=data.name
    modalCaptionElement.textContent=data.name

    openModal(cardModal);
}

//Buttons Functions, Edit Profile - Add Image - Card Modal
editButton.addEventListener('click', ()=> {
    profileNameInput.value=profileName.textContent;
    profileDescriptionInput.value=profileDescription.textContent;

    openModal(profileEditModal);
});

profileCloseButton.addEventListener('click', ()=>closeModal(profileEditModal));
profileEditModalForm.addEventListener('submit', hanldeProfileFormSubmit);

addImageButton.addEventListener('click', ()=>openModal(addImageModal));
addImageCloseButton.addEventListener('click', ()=>closeModal(addImageModal));
addImageModalForm.addEventListener('submit', handleAddCardClick);
cardModalCloseButton.addEventListener('click', () => closeModal(cardModal));

//Functions for Cards***

//Add/Remove Card Template & Like/Delete Button Functions - Click Picture for Card View Image Modal
function getCardElement(data) {
    const cardElement=cardTemplate.cloneNode(true);
    const cardImageElement=cardElement.querySelector('.card__image');
    const cardTitleElement=cardElement.querySelector('.card__title');
    const likeButton=cardElement.querySelector('.card__like-button');
    const deleteButton=cardElement.querySelector('.card__delete-button');

    likeButton.addEventListener('click', ()=>{
        likeButton.classList.toggle('active_like-button');
    });
    
    deleteButton.addEventListener('click', ()=>{
        cardElement.remove();
    })

    cardImageElement.addEventListener('click', () => handleImageClick(data));
    
    cardImageElement.src=data.link
    cardImageElement.alt=data.name
    cardTitleElement.textContent=data.name
    return cardElement;
}

//Gathers Data for Cards
function renderCard(data, cardGallaryElement) {
  
    const cardElement = getCardElement(data);
    cardGallaryElement.prepend(cardElement);
  }

//Renedering the Cards  
initialCards.forEach((data) => {
    renderCard(data, cardGallaryElement);
})