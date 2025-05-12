export class DogCardComponent {
  constructor(parent) {
    this.parent = parent;
  }

  getHTML(data) {
    return `
      <div class="card m-2" style="width: 250px;">
        <img
          class="card-img-top"
          src="${data.src}"
          alt="dog image"
          style="height: 150px; object-fit: cover;"
        />
        <div class="card-body">
          <h5 class="card-title">${data.name}</h5>
          <p class="card-text">${data.text}</p>
          <button
            id="dog-btn-${data.id}"
            data-id="${data.id}"
            class="btn btn-primary"
          >
            забрать к себе))
          </button>
        </div>
      </div>
    `;
  }

  addListeners(data, onClick) {
    document
      .getElementById(`dog-btn-${data.id}`)
      .addEventListener("click", onClick);
  }

  render(data, onClick) {
    const html = this.getHTML(data);
    this.parent.insertAdjacentHTML("beforeend", html);
    this.addListeners(data, onClick);
  }
}
