export default class LoadMoreBtn {
    constructor({ selector, hidden = false }) {
        this.refs = this.getRefs(selector);

        hidden && this.refs();

    }

    getRefs(selector) {
        const refs = {};
        refs.button = document.querySelector(selector);
        refs.lable = refs.button.querySelector('lable');
        refs.spinner = refs.button.querySelector('spinner');


        return refs;
    }

    enable() {
        this.refs.button.disabled = false;
        this.refs.lable.textContent = 'Load more';
        this.refs.spinner.classlist.add('is-hidden');

    }

    
}