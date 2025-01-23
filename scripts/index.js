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

const profile=document.querySelectorAll('.profile');
const editButton=document.querySelector('.profile__edit-button');
const addImageButton=document.querySelector('.profile__add-button');
const profileEditModal=document.querySelector('#edit-modal');
const addImageModal=document.querySelector('#image-modal');
const modalContainer=document.querySelector('.modal__container');
const editCloseButton=profileEditModal.querySelector('.modal__close-button');
const addImageCloseButton=addImageModal.querySelector('.modal__close-button');
const profileName=document.querySelector('.profile__name');
const imageTitle=document.querySelector('.card__title');
const profileDescription=document.querySelector('.profile__description');
const imageLink=document.querySelector('.card__image');
const profileNameInput=document.querySelector('#profile-name-input');
const imageTitleInput=document.querySelector('#title-input');
const profileDescriptionInput=document.querySelector('#profile-description-input');
const imageLinkInput=document.querySelector('#image-link-input');
const profileEditModalForm=profileEditModal.querySelector('.modal__form');
const cardGallaryElement=document.querySelector('.cards__gallery');
const cardTemplate=document.querySelector('#card-template').content.firstElementChild;

//  function editProfile() {
    // profileNameInput.value=profileName.textContent;
    // profileDescriptionInput.value=profileDescription.textContent;

//     profileEditModal.classList.add('modal_open');
// }

// function addImage() {
//     imageTitleInput.value=imageTitle.textContent;
//     imageLinkInput.value=imageLink.src;

//     addImageModal.classList.add('modal_open');
// }

function closeModal(modal) {
    modal.classList.remove('modal_open');
}

function openModal(modal) {
    modal.classList.add('modal_open');
}

function getCardElement(data) {
const cardElement=cardTemplate.cloneNode(true);
const cardImageElement=cardElement.querySelector('.card__image');
const cardTitleElement=cardElement.querySelector('.card__title');
cardImageElement.src=data.link
cardImageElement.alt=data.name
cardTitleElement.textContent=data.name
return cardElement;
}

editButton.addEventListener('click', ()=> {
    profileNameInput.value=profileName.textContent;
    profileDescriptionInput.value=profileDescription.textContent;

    openModal(profileEditModal);
})
editCloseButton.addEventListener('click', ()=>closeModal(profileEditModal));
profileEditModalForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    profileName.textContent=profileNameInput.value;
    profileDescription.textContent=profileDescriptionInput.value;
    closeModal(profileEditModal);
})

addImageButton.addEventListener('click', ()=>openModal(addImageModal));
addImageCloseButton.addEventListener('click', ()=>closeModal(addImageModal));
addImageModal.addEventListener('submit', (evt) => {
    evt.preventDefault();
    imageTitle.textContent=imageTitleInput.value;
    imageLink.src=imageLinkInput.value;
    closeModal(addImageModal);
})

initialCards.forEach((data) => {
    const cardElement=getCardElement(data);
    cardGallaryElement.prepend(cardElement);
})