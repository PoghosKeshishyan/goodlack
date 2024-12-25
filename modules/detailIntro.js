import { firstSlider, secondSlider, subNavData } from '../database/index.js';

export function DetailIntro() {
    /**
    =========================================
    @SELECTORS 
    =========================================
    **/

    // controls category
    const allTitles = document.querySelectorAll('.controls_category .control_item .title');
    const subItems = document.querySelectorAll('.controls_category .control_sub_item');
    const priceItems = document.querySelectorAll('.control_sub_item .price_item');
    const priceInput1 = document.querySelector('.control_sub_item .price_input_1');
    const priceInput2 = document.querySelector('.control_sub_item .price_input_2');
    const allInners = document.querySelectorAll('.control_sub_item.last .inner');
    const allRusults = document.querySelectorAll('.control_sub_item.last .result');

    // kastor
    const kastor = document.querySelector(".kastor_navbar");
    const firstImageBtn = document.querySelector(".image_container .main-image")
    const firstImageContainer = document.querySelector(".image_container");
    const firstImageBox = document.querySelector(".image_container .image-box");
    const firstSliderContainer = document.querySelector(".image_container .image-box .image");
    const imageBtn1 = document.querySelector(".imagebtn1");
    const imageBtn2 = document.querySelector(".imagebtn2");
    const imageBtn3 = document.querySelector(".imagebtn3");

    let currentIndex = 0;
    const slideWidth = 100;
    const totalSlides = firstSlider.length;


    /**
    =========================================
    @EVENT_LISTENERS
    =========================================
    **/

    allTitles.forEach((title, index) => {
        title.addEventListener('click', function (event) {
            // Close all items
            allTitles.forEach((otherTitle, otherIndex) => {
                if (otherIndex !== index) {
                    otherTitle.classList.remove('active');
                    subItems[otherIndex].classList.remove('active');
                    otherTitle.children[1].classList.add('fa-chevron-down');
                    otherTitle.children[1].classList.remove('fa-chevron-up');
                }
            });

            // Toggle the clicked item
            title.classList.toggle('active');
            subItems[index].classList.toggle('active');

            // Icon on handler
            let icon;

            if (event.target.classList.contains('title')) {
                icon = event.target.children[1];
            } else if (event.target.nodeName === 'H4') {
                icon = event.target.parentElement.children[1];
            } else if (event.target.nodeName === 'I') {
                icon = event.target;
            }

            if (icon.classList.contains('fa-chevron-down')) {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        })
    })

    priceItems.forEach(price => {
        price.addEventListener('click', function () {
            let a = price.innerText.split('-');
            priceInput1.value = a[0];
            priceInput2.value = a[1];
        })
    })

    allInners.forEach((inner, index) => {
        inner.addEventListener('click', function (event) {
            allRusults[index].classList.toggle('active');

            // Icon on handler
            let icon = event.target.children[1];

            if (!event.target.classList.contains('inner')) {
                icon = event.target.parentElement.children[1];
            }

            if (icon.classList.contains('fa-chevron-down')) {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        })
    })

    document.addEventListener('DOMContentLoaded', onLoadDom)
    imageBtn1.addEventListener("click", removeBorderFirstImage)
    imageBtn2.addEventListener("click", removeborderFirst)
    imageBtn3.addEventListener("click", removesecondborder)


    /**
    =========================================
    @FUNCTIONS
    =========================================
    **/

    function onLoadDom() {
        renderSubNav(subNavData);
    }

    function renderSubNav(data) {
        const div = document.createElement("div");
        div.className = "sub_nav";
        kastor.appendChild(div);

        const nav = data.map((el) => `<a href="/">${el.nav_item}</a> /`).join('');
        div.innerHTML = nav;
    }

    function hideImageSlider() {
        imageBtn2.classList.remove("border");
        imageBtn3.classList.remove("border");
        imageBtn1.classList.add("border");
        firstImageBtn.classList.remove("active");
        firstSliderContainer.innerHTML = "";
    }

    function hideFirstSlider() {
        firstSliderContainer.innerHTML = "";
        createSlider(secondSlider)
    }

    function createSlider(data) {
        firstImageBtn.classList.add("active");
        const slider = data.map((el, index) => `<img src=${el.image} alt="nkar" class=${index === 0 ? "left" : ""}/>`);
        firstSliderContainer.innerHTML = slider;
        createSliderBtn();
    }

    function removeBorderFirstImage() {
        imageBtn2.classList.remove("border");
        imageBtn3.classList.remove("border");
        hideImageSlider();
    }

    function removeborderFirst() {
        imageBtn1.classList.remove("border");
        imageBtn2.classList.add("border");
        imageBtn3.classList.remove("border");
        createSlider(firstSlider);
    }

    function removesecondborder() {
        imageBtn2.classList.remove("border");
        imageBtn1.classList.remove("border");
        firstImageBtn.classList.add("active");
        imageBtn3.classList.add("border");
        hideFirstSlider();
    }

    function createSliderBtn() {
        const div = document.createElement("div");
        div.className = "slideButton";
        imageBtn1.addEventListener("click", () => {
            div.style.display = "none"
        })
        const leftBtn = document.createElement("button");
        leftBtn.innerHTML = "<i class='fa-solid fa-angle-left'></i>";
        leftBtn.className = "left_btn";
        leftBtn.addEventListener("click", prevSlide);

        const rightBtn = document.createElement("button");
        rightBtn.innerHTML = "<i class='fa-solid fa-angle-right'></i>";
        rightBtn.className = "right_btn";
        rightBtn.addEventListener("click", nextSlide);

        div.appendChild(leftBtn);
        div.appendChild(rightBtn);
        firstImageContainer.appendChild(div);
    }

    function updateSlider() {
        firstImageBox.style.transform = `translateX(${-currentIndex * slideWidth}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
    }
}

