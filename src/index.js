import Notiflix from 'notiflix';
import axios from 'axios';
import fotoOneCard from '../tamplates/fotoOneCard.hbs';
import './sass/main.scss';

const refs = {
    searchForm: document.querySelector('.search-form'),
    gallery: document.querySelector('.gallery'),
    LoadMore: document.querySelector('.load-more'),
}

// const BASE_URL = 'https://pixabay.com/api';

// function fetchPixabay() {
//     return fetch(`${BASE_URL}/?key=25003367-734d14b32e98f9c9fd7c27c2f&q=yellow&image_type=photo&orientation=horizontal&safesearch=true&per_page=40`).then(response => response.json()).then(console.log);

// }

const fetchPixabay = () => {
    return axios.get(`https://pixabay.com/api/?key=25003367-734d14b32e98f9c9fd7c27c2f&q="&image_type=photo&orientation=horizontal&safesearch=true&per_page=40`);
};

fetchPixabay({
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,

}).then(data => console.log(data));;




refs.searchForm.addEventListener('submit', onSearchForm);

function onSearchForm(evt) {
    evt.preventDefault();
    const form = evt.currentTarget.value;
    const value = form.trim();
    console.log(value);
    


}