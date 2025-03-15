export class ProductCardComponent {
    constructor(parent) {
      this.parent = parent;
    }
  
    getHTML(data) {
      return `
        <div class="card m-2" style="width: 300px;">
          <img
            class="card-img-top"
            src="${data.src}"
            alt="картинка"
          />
          <div class="card-body">
            <h5 class="card-title">${data.title}</h5>
            <p class="card-text">${data.text}</p>
            <button
              id="click-card-${data.id}"
              data-id="${data.id}"
              class="btn btn-primary"
            >
              Нажми на меня
            </button>
          </div>
        </div>
      `;
    }
  
    addListeners(data, listener) {
      document
        .getElementById(`click-card-${data.id}`)
        .addEventListener("click", listener);
    }
  
    render(data, listener) {
      const html = this.getHTML(data);
      this.parent.insertAdjacentHTML("beforeend", html);
      this.addListeners(data, listener);
    }
  }
  