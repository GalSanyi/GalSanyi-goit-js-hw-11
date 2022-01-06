import Notiflix from 'notiflix';
import fotoOneCard from '../tamplates/fotoOneCard.hbs';
import NewsApiService from './components/axios-news-service';
import LoadMoreBtn from './components/load-more-btn';

import './sass/main.scss';



const refs = {
    searchForm: document.querySelector('.search-form'),
    gallery: document.querySelector('.gallery'),
    // loadMore: document.querySelector('.load-more'),
}

//екземпляр NewsApiService
const newsApiService = new NewsApiService();
const loadMoreBtn = new LoadMoreBtn({
    selector: '[data-action="load-more"]',
    hidden: true,
});
console.log(loadMoreBtn);
// let searchQuery = '';

refs.searchForm.addEventListener('submit', onSearchForm);
loadMoreBtn.refs.button.addEventListener('click', onLoadMore);

function onSearchForm(evt) {

    evt.preventDefault();

    //находит запрос
    newsApiService.query = evt.currentTarget.elements.searchQuery.value;
    if (newsApiService.query === '') {
        return Notiflix.Notify.info('Sorry, there are no images matching your search query. Please try again.');

    }





    //покузываем
    loadMoreBtn.show();
    //вызов метода сброса страницы
    newsApiService.resetPage();
    clearHits();

    fetchArticles();


}


function onLoadMore() {
    fetchArticles();

}

//управление load more  button
function fetchArticles() {
    //выключаем сразу
    // loadMoreBtn.disable();
    //идет запрос на fetch
    newsApiService.fetchArticles().then(hits => {
        appendHitsMarkup(hits);
        loadMoreBtn.enable();
    });


}

function appendHitsMarkup(hits) {
    // loadMoreBtn.disable();
    refs.gallery.insertAdjacentHTML('beforeend', fotoOneCard(hits))
    if (hits.length === 0) {
        Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.");
        loadMoreBtn.hide()
    }
}
//чистка контейнера
function clearHits() {
    refs.gallery.innerHTML = '';

}