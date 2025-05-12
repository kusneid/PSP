import { ProductCardComponent } from '../components/ProductCard.js';
import { SearchComponent } from '../components/Search.js';
import { ajax } from '../modules/ajax.js';
import { stockUrls } from '../modules/stockUrls.js';

export class MainPage {
    constructor(parent) {
        this.parent = parent;
        this.pageRoot = document.createElement('div');
        this.pageRoot.classList.add('main-page');
    }

    getHTML() {
        return `
            <div class="search-container"></div>
            <div class="cards"></div>
        `;
    }

    async getData(query = '') {
        try {
            const data = await new Promise((resolve, reject) => {
                ajax.get(stockUrls.getStocks(query), (data, status) => {
                    if (status === 200) {
                        resolve(data);
                    } else {
                        reject(new Error(`Ошибка получения данных: ${status}`));
                    }
                });
            });
            this.renderData(data);
        } catch (error) {
            console.error('Ошибка при получении данных:', error);
        }
    }

    renderData(items) {
        const cardsContainer = this.pageRoot.querySelector('.cards');
        if (cardsContainer) {
            cardsContainer.innerHTML = '';
            items.forEach((item) => {
                const productCard = new ProductCardComponent(cardsContainer);
                productCard.render(item, this.clickCard.bind(this));
            });
        }
    }

    clickCard(data) {
        window.location.hash = `#/stock/${data.id}`;
    }

    onSearch(query) {
        this.getData(query);
    }

    render() {
        this.parent.innerHTML = '';
        this.parent.appendChild(this.pageRoot);
        
        const html = this.getHTML();
        this.pageRoot.insertAdjacentHTML('beforeend', html);

        const searchContainer = this.pageRoot.querySelector('.search-container');
        const search = new SearchComponent(searchContainer);
        search.render(this.onSearch.bind(this));

        this.getData();
    }
} 