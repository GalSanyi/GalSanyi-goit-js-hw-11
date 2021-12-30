import Notiflix from 'notiflix';
import axios from 'axios';
import fotoOneCard from '../tamplates/fotoOneCard.hbs';
import './sass/main.scss';

//
let searchQuery = '';
const refs = {
    searchForm: document.querySelector('.search-form'),
    gallery: document.querySelector('.gallery'),
    loadMore: document.querySelector('.load-more'),
}
refs.searchForm.addEventListener('submit', onSearchForm);
refs.loadMore.addEventListener('click', onLoadMore);

function onSearchForm(evt) {
    evt.preventDefault();
    searchQuery = evt.currentTarget.elements.searchQuery.value;
    fetch(`https://pixabay.com/api/?key=25003367-734d14b32e98f9c9fd7c27c2f&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=1`).then(res => res.json()).then(console.log);

}


function onLoadMore() {
    fetch(`https://pixabay.com/api/?key=25003367-734d14b32e98f9c9fd7c27c2f&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=1`).then(res => res.json()).then(console.log);


}