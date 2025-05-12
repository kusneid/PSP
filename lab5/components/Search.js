export class SearchComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML() {
        return `
            <div class="search">
                <input type="text" placeholder="Поиск по названию...">
            </div>
        `;
    }

    addListeners(callback) {
        const input = this.parent.querySelector('.search input');
        if (input) {
            input.addEventListener('input', (event) => {
                callback(event.target.value);
            });
        }
    }

    render(callback) {
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);
        this.addListeners(callback);
    }
} 