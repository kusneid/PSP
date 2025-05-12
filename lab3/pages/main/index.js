import { DogCardComponent } from "../../components/dog-card/index.js";
import { ProductPage } from "../product/index.js";

export class MainPage {
  constructor(parent) {
    this.parent = parent;
  }

  getHTML() {
    return `
      <div id="dogs-carousel" class="carousel slide" data-bs-ride="carousel" style="width: 90vw; height: 80vh;">
        <div class="carousel-inner" style="height: 100%; position: relative;"></div>
        <button class="carousel-control-prev" type="button" data-bs-target="#dogs-carousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#dogs-carousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    `;
  }

  getData() {
    return [
      {
        id: 1,
        src: "https://i.pinimg.com/736x/14/ae/db/14aedb7e7f0d0ca2d0a6eb78c17c17d7.jpg",
        name: "два крутых чувака",
        text: "путешественники лютые"
      },
      {
        id: 2,
        src: "https://i.pinimg.com/736x/2e/87/87/2e878713d9a34f84faaa628f58bef441.jpg",
        name: "поедатель яблок",
        text: "ест много яблок, заберите его пожалуйста"
      },
      {
        id: 3,
        src: "https://icdn.lenta.ru/images/2017/05/03/16/20170503163051993/detail_e0be879c4bc8e390e20dec720ebb9e41.jpg",
        name: "Хаски",
        text: "хороший был репер"
      }
    ];
  }

  render() {
    this.parent.innerHTML = "";
    this.parent.insertAdjacentHTML("beforeend", this.getHTML());

    const carouselInner = this.parent.querySelector("#dogs-carousel .carousel-inner");
    const data = this.getData();

    data.forEach((dog, index) => {
      const item = document.createElement("div");
      item.className = `carousel-item ${index === 0 ? "active" : ""}`;
      item.style.cssText = "height: 100%; position: relative;";

      const card = new DogCardComponent(item);
      item.innerHTML = card.getHTML(dog);

      const cardElement = item.firstElementChild;
      if (cardElement) {
        cardElement.style.position = "absolute";
        cardElement.style.top = "50%";
        cardElement.style.left = "50%";
        cardElement.style.transform = "translate(-50%, -50%)";
      }

      carouselInner.appendChild(item);
      card.addListeners(dog, (e) => this.onDogClicked(e));
    });
  }

  onDogClicked(e) {
    const dogId = e.target.dataset.id;
    const productPage = new ProductPage(this.parent, dogId);
    productPage.render();
  }
}
