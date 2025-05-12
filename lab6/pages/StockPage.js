import { ProductCardComponent } from '../components/ProductCard.js';
import { BackButtonComponent } from '../components/BackButton.js';
import { ajax } from '../modules/ajax.js';
import { stockUrls } from '../modules/stockUrls.js';

export class StockPage {
    constructor(parent, id) {
        this.parent = parent;
        this.id = id;
        this.pageRoot = document.createElement('div');
        this.pageRoot.classList.add('stock-page');
    }

    getHTML() {
        return `
            <div class="stock-container"></div>
        `;
    }

    async getData() {
        try {
            const data = await new Promise((resolve, reject) => {
                ajax.get(stockUrls.getStockById(this.id), (data, status) => {
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

    renderData(item) {
        const container = this.pageRoot.querySelector('.stock-container');
        if (container) {
            const productCard = new ProductCardComponent(container);
            productCard.render(item);
        }
    }

    clickBack() {
        window.location.hash = '';
    }

    async deleteCard(id) {
        try {
            await new Promise((resolve, reject) => {
                ajax.delete(stockUrls.removeStockById(id), (data, status) => {
                    if (status === 200 || status === 204) {
                        resolve(data);
                    } else {
                        reject(new Error(`Ошибка удаления: ${status}`));
                    }
                });
            });
            window.location.hash = '';
        } catch (error) {
            console.error('Ошибка при удалении:', error);
        }
    }

    render() {
        this.parent.innerHTML = '';
        this.parent.appendChild(this.pageRoot);

        const backButton = new BackButtonComponent(this.pageRoot);
        backButton.render(this.clickBack.bind(this));

        const html = this.getHTML();
        this.pageRoot.insertAdjacentHTML('beforeend', html);

        document.addEventListener('deleteCard', (event) => {
            this.deleteCard(event.detail.id);
        });

        this.getData();
    }
} 