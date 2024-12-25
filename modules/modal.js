export function Modal() {
    /**
    =========================================
    @SELECTORS 
    =========================================
    **/

    const html = document.querySelector('html');
    const modal = document.querySelector('.modal');
    const openModal = document.querySelector('.category .open_modal');
    const closeModal = document.querySelector('.modal .modal_close');
    const galleryImage = document.querySelector('.modal .photo_gallery_media img');
    const galleryAllImages = document.querySelectorAll('.modal .photo_gallery_list_item');
    const counterItems = document.querySelector('.modal .collection_control .counter');
    const counterText = document.querySelector('.modal .counter_text');
    const collectionBtn = document.querySelector('.modal .collection_cart_button');
    const collapseHead = document.querySelector('.modal .feature .collapse_head');
    const collapseBody = document.querySelector('.modal .feature .collapse_body');
    const collapseIcon = document.querySelector('.modal .feature .fa-chevron-down');
    const descriptionHead = document.querySelector('.modal .description .collapse_head');
    const descriptionBody = document.querySelector('.modal .description .collapse_body');
    const descriptionIcon = document.querySelector('.modal .description .fa-chevron-down');
    let countItems = 0;

    /**
    =========================================
    @EVENT_LISTENERS
    =========================================
    **/

    openModal.addEventListener('click', openModalFunc);
    closeModal.addEventListener('click', closeModalFunc);
    collectionBtn.addEventListener('click', handlerCollectionBtn);
    counterItems.addEventListener('click', handlerCounterBtns);
    collapseHead.addEventListener('click', handlerCallapse);
    descriptionHead.addEventListener('click', handlerDescription);

    galleryAllImages.forEach(item => {
        item.addEventListener('click', handlerImage);
    })

    /**
    =========================================
    @FUNCTIONS
    =========================================
    **/

    function openModalFunc() {
        html.classList.add('hide_scroll');
        modal.classList.add('active');
    }

    function closeModalFunc() {
        html.classList.remove('hide_scroll');
        modal.classList.remove('active');
    }

    function handlerImage(event) {
        if (event.target.nodeName === 'IMG') {
            galleryImage.src = event.target.src;
            document.querySelector('.modal .photo_gallery_list_item.active').classList.remove('active');
            event.target.parentElement.classList.add('active');
        }
    }

    function handlerCollectionBtn(event) {
        event.target.innerHTML = 'В корзине <br> перейти';
        counterItems.classList.add('active');
        ++countItems;
    }

    function handlerCounterBtns(event) {
        if (event.target.classList.contains('counter_button_icon_plus')) {
            ++countItems;
            counterText.innerText = countItems;
        } else if (event.target.classList.contains('counter_button_icon_minus')) {
            --countItems;

            if (countItems === 0) {
                counterItems.classList.remove('active');
                collectionBtn.textContent = 'Добавить в корзину';
            } else {
                counterText.innerText = countItems;
            }
        }
    }

    function handlerCallapse() {
        collapseBody.classList.toggle('active');

        if (collapseIcon.classList[1] === 'fa-chevron-down') {
            collapseIcon.classList.remove('fa-chevron-down');
            collapseIcon.classList.add('fa-chevron-up');
        } else {
            collapseIcon.classList.add('fa-chevron-down');
            collapseIcon.classList.remove('fa-chevron-up');            
        }
    }

    function handlerDescription() {
        descriptionBody.classList.toggle('active');

        if (descriptionIcon.classList[1] === 'fa-chevron-down') {
            descriptionIcon.classList.remove('fa-chevron-down');
            descriptionIcon.classList.add('fa-chevron-up');
        } else {
            descriptionIcon.classList.add('fa-chevron-down');
            descriptionIcon.classList.remove('fa-chevron-up');            
        }
    }
}