const initialCards=[
    {
        name:'Dripping Springs',
        link:'\Users\amond\Projects\se_project_aroundtheus\images\jpeg-optimizer_dripping-springs.jpg'
    },    
    {
        name:'Fairfield',
        link:'\Users\amond\Projects\se_project_aroundtheus\images\jpeg-optimizer_fairfield-star-house.jpg'
    },
    {
        name:'Mammoth Lakes',
        link:'\Users\amond\Projects\se_project_aroundtheus\images\jpeg-optimizer_mammoth-lakes.jpg'
    },
    {
        name:'Olympic Peninsula',
        link:'\Users\amond\Projects\se_project_aroundtheus\images\jpeg-optimizer_olympic-peninsula-washington.jpg'
    },
    {
        name:'Solheimasandur Plane Wreck',
        link:'\Users\amond\Projects\se_project_aroundtheus\images\jpeg-optimizer_solheimasandur-plane-wreck-iceland.jpg'
    },
    {
        name:'Yosemite Valley',
        link:'\Users\amond\Projects\se_project_aroundtheus\images\jpeg-optimizer_yosemite-valley.jpg'
    }
]

const profile=document.querySelectorAll('.profile');
const editButton=document.querySelector('.profile__edit-button');
const profileEditModal=document.querySelector('.modal');
const modalContainer=document.querySelector('.modal__container');
const editCloseButton=document.querySelector('.modal__close-button');

function editProfile() {
    profileEditModal.classList.add('modal__open');
}

function closeEditProfile() {
    profileEditModal.classList.remove('modal__open');
}

editButton.addEventListener('click', editProfile);
editCloseButton.addEventListener('click', closeEditProfile);