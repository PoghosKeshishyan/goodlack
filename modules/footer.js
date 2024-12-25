import { footerData } from "../database/index.js";

export function Footer() {
    /**
    =========================================
    @SELECTORS 
    =========================================
    **/

    const footer = document.querySelector('footer .box_container');
    const scrollTop = document.querySelector('footer .scroll_top');

    /**
    =========================================
    @EVENT_LISTENERS
    =========================================
    **/

    document.addEventListener('DOMContentLoaded', onLoadDom);
    footer.addEventListener('click', onHandlerFooter);
    scrollTop.addEventListener('click', scrollTopFunc);

    /**
    =========================================
    @FUNCTIONS
    =========================================
    **/

    function onLoadDom() {
        createFooter();
    }

    function createFooter() {
        footerData.forEach(function (data) {
            const box = document.createElement('div');
            box.className = 'box';

            const title = document.createElement('h3');
            title.className = 'title';
            title.textContent = data.title;
            title.innerHTML += '<i class="fa-solid fa-chevron-down"></i>';

            const subBox = document.createElement('div');
            subBox.className = 'sub_box';

            if (data.items) {
                data.items.forEach(function (itemText) {
                    const item = document.createElement('div');
                    item.className = 'item';

                    const link = document.createElement('a');
                    link.href = '#';
                    link.textContent = itemText;
                    item.appendChild(link);
                    subBox.appendChild(item);
                });
            }

            box.appendChild(title);
            box.appendChild(subBox);
            footer.appendChild(box);
        });
    }

    function onHandlerFooter(e) {
        const event = e.target;

        if (event.classList[1] === 'fa-chevron-down' || event.classList[1] === 'fa-chevron-up') {
            const subBox = event.parentElement.parentElement.children[1];
            subBox.classList.toggle('active');

            if (event.classList.contains('fa-chevron-down')) {
                event.classList.remove('fa-chevron-down');
                event.classList.add('fa-chevron-up');
            } else {
                event.classList.remove('fa-chevron-up');
                event.classList.add('fa-chevron-down');
            }
        }
    }

    function scrollTopFunc() {
        window.scrollTo(0, 0);
    }
}
