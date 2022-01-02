import Notiflix from 'notiflix';
import axios from 'axios';
import fotoOneCard from '../tamplates/fotoOneCard.hbs';
import NewsApiService from './components/news-service';
import LoadMoreBtn from './components/load-more-btn';

import './sass/main.scss';



const refs = {
    searchForm: document.querySelector('.search-form'),
    gallery: document.querySelector('.gallery'),
    // loadMore: document.querySelector('.load-more'),
}

//екземпляр NewsApiService
const newsApiSwrvice = new NewsApiService();
const loadMoreBtn = new LoadMoreBtn({
    selector: '[data-action="load-more"]',
    hidden: true,
});
console.log(loadMoreBtn);
// loadMoreBtn.show();
// loadMoreBtn.disable();
// let searchQuery = '';

refs.searchForm.addEventListener('submit', onSearchForm);
loadMoreBtn.refs.button.addEventListener('click', onLoadMore);

function onSearchForm(evt) {

    evt.preventDefault();
    clearHits();
    //находит запрос
    newsApiSwrvice.query = evt.currentTarget.elements.searchQuery.value;
    if (newsApiSwrvice.query === '') {
        return Notiflix.Notify.info('Sorry, there are no images matching your search query. Please try again.');

    }


    //вызов метода сброса страницы
    newsApiSwrvice.resetPage();
    //идет запрос на fetch
    newsApiSwrvice.fetchArticles().then(appendHitsMarkup);
}


function onLoadMore() {
    //предается fetch
    newsApiSwrvice.fetchArticles().then(appendHitsMarkup);

}

function appendHitsMarkup(hits) {
    refs.gallery.insertAdjacentHTML('beforeend', fotoOneCard(hits))

}
//чистка контейнера
function clearHits() {
    refs.gallery.innerHTML = '';

}