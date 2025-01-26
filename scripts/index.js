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
const profile=document.querySelectorAll('.profile');
const profileEditModal=document.querySelector('#edit-modal');
const addImageModal=document.querySelector('#image-modal');
const profileName=document.querySelector('.profile__name');
const profileEditModalForm=profileEditModal.querySelector('.modal__form');
const addImageModalForm=addImageModal.querySelector('.modal__form');
// const modalContainer=document.querySelector('.modal__container');

//Buttons
const editButton=document.querySelector('.profile__edit-button');
const addImageButton=document.querySelector('.profile__add-button');
const editCloseButton=profileEditModal.querySelector('.modal__close-button');
const addImageCloseButton=addImageModal.querySelector('.modal__close-button');
// const likeButtons=document.querySelectorAll('.card__like-button');

//Values
const profileDescription=document.querySelector('.profile__description');
const profileNameInput=document.querySelector('#profile-name-input');
const imageTitleInput=addImageModalForm.querySelector('#title-input');
const profileDescriptionInput=document.querySelector('#profile-description-input');
const imageLinkInput=addImageModalForm.querySelector('#image-link-input');
const cardGallaryElement=document.querySelector('.cards__gallery');
const cardTemplate=document.querySelector('#card-template').content.firstElementChild;

//Functions

//Modal Functioning***

//Open Modal
function closeModal(modal) {
    modal.classList.remove('modal_open');
}

//Close Modal
function openModal(modal) {
    modal.classList.add('modal_open');
}

//Editing Profile & New Cards
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

//Opening Edit Profile Form
editButton.addEventListener('click', ()=> {
    profileNameInput.value=profileName.textContent;
    profileDescriptionInput.value=profileDescription.textContent;

    openModal(profileEditModal);
})
editCloseButton.addEventListener('click', ()=>closeModal(profileEditModal));
profileEditModalForm.addEventListener('submit', editModalSubmit);

//Opening New Card Form
addImageButton.addEventListener('click', ()=>openModal(addImageModal));
addImageCloseButton.addEventListener('click', ()=>closeModal(addImageModal));
addImageModalForm.addEventListener('submit', createCard);

//Functions for Cards***

// Add/remove Card Template & Like Button Function
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

    cardImageElement.src=data.link
    cardImageElement.alt=data.name
    cardTitleElement.textContent=data.name
    return cardElement;
}

//Getting the Cards  
initialCards.forEach((data) => {
    const cardElement=getCardElement(data);
    cardGallaryElement.prepend(cardElement);
})

//Like Button Activating
