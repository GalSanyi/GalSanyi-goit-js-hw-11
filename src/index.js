import Notiflix from 'notiflix';
import axios from 'axios';
import fotoOneCard from '../tamplates/fotoOneCard.hbs';
import NewsApiService from './components/news-service';
import './sass/main.scss';


//екземпляр NewsApiService
const newsApiSwrvice = new NewsApiService();

const refs = {
    searchForm: document.querySelector('.search-form'),
    gallery: document.querySelector('.gallery'),
    loadMore: document.querySelector('.load-more'),
}



// let searchQuery = '';

refs.searchForm.addEventListener('submit', onSearchForm);
refs.loadMore.addEventListener('click', onLoadMore);

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