export class ProductCardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        return `
            <div class="card" data-id="${data.id}">
                <h3>${data.name}</h3>
                <p>$${data.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                <p>Количество: ${data.quantity.toLocaleString('en-US')} шт.</p>
                ${window.location.hash.startsWith('#/stock/') ? `
                    <button class="delete-button">Удалить</button>
                ` : ''}
            </div>
        `;
    }

    addListeners(data, clickCard) {
        const card = this.parent.querySelector(`[data-id="${data.id}"]`);
        if (card) {
            if (!window.location.hash.startsWith('#/stock/')) {
                card.addEventListener('click', () => clickCard(data));
            }

            const deleteButton = card.querySelector('.delete-button');
            if (deleteButton) {
                deleteButton.addEventListener('click', (event) => {
                    event.stopPropagation();
                    this.deleteCard(data.id);
                });
            }
        }
    }

    deleteCard(id) {
        const event = new CustomEvent('deleteCard', { detail: { id } });
        document.dispatchEvent(event);
    }

    render(data, clickCard) {
        const html = this.getHTML(data);
        this.parent.insertAdjacentHTML('beforeend', html);
        this.addListeners(data, clickCard);
    }
} 