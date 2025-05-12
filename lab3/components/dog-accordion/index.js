export class DogAccordionComponent {
    constructor(parent) {
      this.parent = parent;
    }
  
    getHTML(data) {
      return `
        <div class="accordion" id="dogAccordion">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                ${data.name}
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#dogAccordion"
            >
              <div class="accordion-body">
                <img
                  src="${data.src}"
                  alt="dog image"
                  style="width: 100%; max-height: 200px; object-fit: cover;"
                />
              </div>
            </div>
          </div>
  
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Описание
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#dogAccordion"
            >
              <div class="accordion-body">
                ${data.description}
              </div>
            </div>
          </div>
  
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Темперамент
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#dogAccordion"
            >
              <div class="accordion-body">
                ${data.temperament}
              </div>
            </div>
          </div>
  
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Уход
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#dogAccordion"
            >
              <div class="accordion-body">
                ${data.care}
              </div>
            </div>
          </div>
  
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFive">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Дополнительно
              </button>
            </h2>
            <div
              id="collapseFive"
              class="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#dogAccordion"
            >
              <div class="accordion-body">
                ${data.extraInfo}
              </div>
            </div>
          </div>
        </div>
      `;
    }
  
    render(data) {
      const html = this.getHTML(data);
      this.parent.insertAdjacentHTML("beforeend", html);
    }
  }
  