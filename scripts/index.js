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
// const modal = document.querySelectorAll('.modal');
const profile = document.querySelectorAll('.profile');
const profileEditModal = document.querySelector('#edit-modal');
const addImageModal = document.querySelector('#image-modal');
const profileName = document.querySelector('.profile__name');
const profileEditModalForm = profileEditModal.querySelector('.modal__form');
const addImageModalForm = addImageModal.querySelector('.modal__form');
// const modalContainer=document.querySelector('.modal__container');

//Buttons
const editButton = document.querySelector('.profile__edit-button');
const addImageButton = document.querySelector('.profile__add-button');
const editCloseButton = profileEditModal.querySelector('.modal__close-button');
const addImageCloseButton = addImageModal.querySelector('.modal__close-button');
// const likeButton=cardElement.querySelector('.card__like-button'); - defined only in getCardElement function
// const deleteButton=cardElement.querySelector('.card__delete-button'); - defined only in getCardElement function

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
const cardModal=document.querySelector('#card-modal');

//Modal Functions
function closeModal(modal) {
    modal.classList.remove('modal_open');
}

function openModal(modal) {
    modal.classList.add('modal_open');
}

//Edit Profile Modal - Add Button Modal - Card Modal
function editModalSubmit(evt) {
    evt.preventDefault();
    profileName.textContent=profileNameInput.value;
    profileDescription.textContent=profileDescriptionInput.value;
    closeModal(profileEditModal);
}

function createCard(evt) {
    evt.preventDefault();
    const name=imageTitleInput.value;
    const link=imageLinkInput.value;
    const cardElement = getCardElement({
        name, link
    });

    cardGallaryElement.prepend(cardElement);
    closeModal(addImageModal);
}


function handleImageClick(data) {
    const cardElement=cardTemplate.cloneNode(true);
    const cardTitleElement=cardElement.querySelector('.card__title');

    modalImageElement.src=data.link
    modalImageElement.alt=data.name
    cardTitleElement.textContent=data.name
    modalCaptionElement.textContent=data.name
    openModal(cardModal);
}

// cardImageElement.addEventListener('click', () => handleImageClick(data));

//Buttons Functions, Edit Profile - Add Image
editButton.addEventListener('click', ()=> {
    profileNameInput.value=profileName.textContent;
    profileDescriptionInput.value=profileDescription.textContent;

    openModal(profileEditModal);
});
editCloseButton.addEventListener('click', ()=>closeModal(profileEditModal));
profileEditModalForm.addEventListener('submit', editModalSubmit);

addImageButton.addEventListener('click', ()=>openModal(addImageModal));
addImageCloseButton.addEventListener('click', ()=>closeModal(addImageModal));
addImageModalForm.addEventListener('submit', createCard);

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
        cardElement.remove('card');
    })

    cardImageElement.addEventListener('click', handleImageClick(data));
    
    cardImageElement.src=data.link
    cardImageElement.alt=data.name
    cardTitleElement.textContent=data.name
    return cardElement;
}

//Renedering the Cards  
initialCards.forEach((data) => {
    const cardElement=getCardElement(data);
    cardGallaryElement.prepend(cardElement);
})