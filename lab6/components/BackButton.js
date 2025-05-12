export class BackButtonComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML() {
        return `
            <button class="back-button">
                ← Назад к списку
            </button>
        `;
    }

    addListeners(callback) {
        const button = this.parent.querySelector('.back-button');
        if (button) {
            button.addEventListener('click', callback);
        }
    }

    render(callback) {
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);
        this.addListeners(callback);
    }
} 