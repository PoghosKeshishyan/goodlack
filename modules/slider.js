import { sliderData } from "../database/index.js";

export function Slider() {
    /**
    =========================================
    @SELECTORS 
    =========================================
    **/

    const slider = document.querySelector('.home .slider');
    const btnPrevSlide = document.querySelector('.home .slider .slider_btns .btn_slide.prev');
    const btnNextSlide = document.querySelector('.home .slider .slider_btns .btn_slide.next');
    let currentSlide = 1;


    /**
    =========================================
    @EVENT_LISTENERS
    =========================================
    **/

    document.addEventListener('DOMContentLoaded', onLoadDom);
    btnPrevSlide.addEventListener('click', prevSlideFunc);
    btnNextSlide.addEventListener('click', nextSlideFunc);

    /**
    =========================================
    @FUNCTIONS
    =========================================
    **/

    setInterval(() => {
        nextSlideFunc();
    }, 7000);

    function onLoadDom() {
        // Add slider data to DOM
        sliderData.forEach((obj, index) => {
            const slide = createSlide(obj, index);
            slider.appendChild(slide);
        });

        updateSliderControls();
    }

    function createSlide(obj, index) {
        const slide = document.createElement('div');
        slide.className = currentSlide === (index + 1) ? 'slide active' : 'slide';

        const content = document.createElement('div');
        content.className = 'content';

        const title = document.createElement('h3');
        title.className = 'title';
        title.innerHTML = obj.title;
        content.appendChild(title);

        const sub_title = document.createElement('p');
        sub_title.className = 'sub_title';
        sub_title.innerText = obj.sub_title;
        content.appendChild(sub_title);

        const btn = document.createElement('button');
        btn.className = 'btn';
        btn.innerText = obj.btn_text;
        btn.innerHTML += '<i class="fa-solid fa-arrow-right"></i>';
        content.appendChild(btn);

        const image = document.createElement('div');
        image.className = 'image';

        const img = document.createElement('img');
        img.src = obj.image_src;
        image.appendChild(img);

        slide.appendChild(content);
        slide.appendChild(image);

        return slide;
    };

    function updateSlider() {
        const slides = document.querySelectorAll('.slide');

        slides.forEach((slide, index) => {
            slide.className = currentSlide === (index + 1) ? 'slide active' : 'slide';
        });

        updateSliderControls(); // Call the function to update circles based on the current slide
    };

    function nextSlideFunc() {
        if (currentSlide !== sliderData.length) {
            currentSlide += 1;
        } else {
            currentSlide = 1;
        }

        updateSlider();
    };

    function prevSlideFunc() {
        if (currentSlide !== 1) {
            currentSlide -= 1;
        } else {
            currentSlide = sliderData.length;
        }

        updateSlider();
    };

    function updateSliderControls() {
        const sliderControls = document.querySelector('.slider_controls');
        sliderControls.innerHTML = ''; // Clear existing circles

        sliderData.forEach((obj, index) => {
            const control = document.createElement('div');
            control.className = currentSlide === (index + 1) ? 'control active' : 'control';
            control.addEventListener('click', () => moveCircle(index + 1));
            sliderControls.appendChild(control);
        });
    }

    function moveCircle(index) {
        currentSlide = index;
        updateSlider();
    }
}
