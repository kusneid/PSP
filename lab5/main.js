import { MainPage } from './pages/MainPage.js';
import { StockPage } from './pages/StockPage.js';

class App {
    constructor() {
        this.root = document.getElementById('root');
        this.init();
    }

    init() {
        window.addEventListener('hashchange', () => {
            this.handleRoute();
        });
        this.handleRoute();
    }

    handleRoute() {
        const hash = window.location.hash;

        if (hash.startsWith('#/stock/')) {
            const id = hash.slice('#/stock/'.length);
            new StockPage(this.root, id).render();
        } else {
            new MainPage(this.root).render();
        }
    }
}

new App(); 