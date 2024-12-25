import { sidebarData } from "../database/index.js";

export function Sidebar() {
  /**
    =========================================
    @SELECTORS 
    =========================================
    **/

  const sidebar = document.querySelector("aside .sidebar");
  const sideBg = document.querySelector("aside .dark_bg");
  const closeAsideBar = document.querySelector("aside .fa-times");
  const catalogProd = document.querySelector(".catalog_prod");
  const arrowLeft = document.querySelector(".catalog_prod span");
  const link = document.querySelector(".catalog .catalog_link");
  const allLinks = document.querySelectorAll(".catalog .catalog_link a");
  const items = document.querySelector(".sidebar_links .catalog_items");
  const info = document.querySelector(".sidebar_links .info");


  /**
    =========================================
    @EVENT_LISTENERS
    =========================================
    **/

  sideBg.addEventListener("click", closeAsideModal);
  catalogProd.addEventListener("click", catalogProdFunc);
  arrowLeft.addEventListener("click", arrowLeftHandler);
  closeAsideBar.addEventListener("click", closeAsideModal);


  allLinks.forEach((link) => {
    link.addEventListener("click", function () {
      let data = link.dataset.product;
      renderCatalogTab(sidebarData[data]);
    });
  });

  /**
    =========================================
    @FUNCTIONS
    =========================================
    **/
  const renderCatalogTab = (data) => {
    link.classList.toggle("hide");
    catalogProd.classList.remove("catalog_prod");
    catalogProd.classList.add("hide");
    items.innerHTML = "";

    const heading = document.createElement("h2");

    // Create the arrow-left icon element
    const arrowLeftIcon = document.createElement("i");
    arrowLeftIcon.classList.add("fa-solid", "fa-arrow-left-long");
    heading.innerHTML = `${arrowLeftIcon.outerHTML}${data[0].title || data[0].item
      }`;
    heading.classList.add("catalog_prod");
    items.appendChild(heading);

    document.body.addEventListener("click", handleleft);

    items.innerHTML += data
      .slice(1)
      .map((item) => `<a href="./pages/category.html">${item.item}</a>`)
      .join("");
  };

  function handleleft(event) {
    if (event.target.classList.contains("fa-solid", "fa-arrow-left-long")) {
      items.innerHTML = "";
      link.classList.toggle("hide");
      catalogProd.classList.add("catalog_prod");
    }
  }

  function closeAsideModal() {
    console.log(1);
    sidebar.classList.remove("active");
    sideBg.classList.remove("active");
  }



  function catalogProdFunc() {
    link.classList.toggle("hide");;
    info.classList.toggle("hide");
  }

  function arrowLeftHandler() {

    link.classList.add("hide");
  }

}
