const API_KEY = '25003367-734d14b32e98f9c9fd7c27c2f';
const BASE_URL = 'https://pixabay.com/api';
export default class NewsApiService {
    constructor() {
        //глобальная переманная для поиска
        this.searchQuery = '';
        this.page = 1;
    }
    fetchArticles() {
            console.log(this);


            return fetch(`${BASE_URL}/?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`)
                .then(response => response.json())
                .then(({ hits }) => {
                    console.log(hits);
                    //если результат успешный страницу увеличиваем на 1
                    this.incrementPage();

                    return hits;
                });

        }
        //метод увеличения страницы
    incrementPage() {
            this.page += 1
        }
        //метод сброса страницы
    resetPage() {
        this.page = 1;
    }
    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}