export function Header() {
    /**
    =========================================
    @SELECTORS 
    =========================================
    **/

    const header = document.querySelector('header');
    const catalogLink =  document.querySelector(".sidebar .catalog_link")
    const menuBar = document.querySelector('.menu_bar');
    const sidebar = document.querySelector('aside .sidebar');
    const sideBg = document.querySelector('aside .dark_bg');
    const searchIcon = document.querySelector('.client .search');
    const searchBar = document.querySelector('.search_bar');
    const searchContainer = document.querySelector('.search_container');
    const closeSearchBar = document.querySelector('.close_search_bar');
    const client = document.querySelector('.client');

    /**
    =========================================
    @EVENT_LISTENERS
    =========================================
    **/

    menuBar.addEventListener('click', openAsideModal);
    searchIcon.addEventListener('click', searchBarFunc);
    searchBar.addEventListener('click', searchBarFunc);
    closeSearchBar.addEventListener('click', closeSearchBarFunc);

    /**
    =========================================
    @FUNCTIONS
    =========================================
    **/

    function openAsideModal() {
        sidebar.classList.add('active');
        sideBg.classList.add('active');
    }

    function searchBarFunc() {
        header.classList.add('active');
        searchBar.classList.add('active');
        searchContainer.classList.add('active');
        closeSearchBar.classList.add('show');
        menuBar.classList.add('hidden');
        catalogLink.classList.add("hide");
        client.classList.add('hidden');
    }

    function closeSearchBarFunc() {
        header.classList.remove('active');
        searchBar.classList.remove('active');
        searchContainer.classList.remove('active');
        closeSearchBar.classList.remove('show');
        menuBar.classList.remove('hidden');
        client.classList.remove('hidden');
    }
}