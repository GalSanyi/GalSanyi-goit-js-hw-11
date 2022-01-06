import axios from 'axios';
// const API_KEY = '25003367-734d14b32e98f9c9fd7c27c2f';
// const BASE_URL = 'https://pixabay.com/api';
export default class NewsApiService {
    constructor() {
        //глобальная переманная для поиска
        this.searchQuery = '';
        this.page = 1;
    }
    async fetchArticles() {
            this.incrementPage();
            return axios({
                method: 'get',
                url: 'https://pixabay.com/api/',
                params: {
                    key: '24592652-81dd428b6cc1f580195381066',
                    q: `${this.searchQuery}`,
                    page: `${this.page}`,
                    image_type: 'photo',
                    orientation: 'horizontal',
                    safesearch: 'true',
                    per_page: 40,
                },
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


    // constructor() {
    //     this.page = 1;
    //     this.searchValue = '';
    //   }

    //   incrementPage() {
    //     this.page += 1;
    //   }

    //   resetPage() {
    //     this.page = 1;
    //   }

    //   async fetch() {
    //     this.incrementPage();
    //     return axios({
    //       method: 'get',
    //       url: 'https://pixabay.com/api/',
    //       params: {
    //         key: '24592652-81dd428b6cc1f580195381066',
    //         q: `${this.searchValue}`,
    //         page: `${this.page}`,
    //         image_type: 'photo',
    //         orientation: 'horizontal',
    //         safesearch: 'true',
    //         per_page: 40,
    //       },
    //     });
    //   }
}