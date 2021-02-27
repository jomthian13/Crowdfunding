const bookmark = document.querySelector('.bookmark-btn');

bookmark.addEventListener('click', book);

function book(e) {
    const button = e.target;
    const circle = bookmark.querySelector('circle')
if (bookmark.classList.contains('active')) {
    bookmark.classList.remove('active')
    bookmark.querySelector('circle').style.fill ="grey"
    bookmark.querySelector('div').innerText = "Bookmark"
} else {
    bookmark.classList.add('active')
    bookmark.querySelector('circle').style.fill ="hsl(176, 72%, 28%)"
    bookmark.querySelector('div').innerText = "Bookmarked"
}
}

//-----------------------------------Modal Section---------------------------//
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-btn]')
const continueButtons = document.querySelectorAll('[data-con-btn]')
const body = document.querySelector('body')
const bg = document.getElementById('bg-modal')
const selectModal = document.querySelector('.modal-select')


//Modal Open

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal)
    })
})

function openModal(modal) {
    modal.classList.add('modal-active');
    bg.classList.add('bg-active')
    body.classList.add('no-scroll')
}
//Modal continue
continueButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector('.modal-thank')
        continueModal(modal)
    })
})
function continueModal(modal) {
    modal.classList.add('modal-active');
    selectModal.classList.remove('modal-active');
}

//Modal Close

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.parentNode;
        removeModal(modal)
    })
})

function removeModal(modal) {
    modal.classList.remove('modal-active');
    bg.classList.remove('bg-active')
    body.classList.remove('no-scroll')
}
