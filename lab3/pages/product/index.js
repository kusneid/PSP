import { DogAccordionComponent } from "../../components/dog-accordion/index.js";
import { BackButtonComponent } from "../../components/back-button/index.js";
import { MainPage } from "../main/index.js";

export class ProductPage {
  constructor(parent, dogId) {
    this.parent = parent;
    this.dogId = dogId;
  }

  get pageRoot() {
    return document.getElementById("dog-product-page");
  }

  getData() {
    return {
      id: this.dogId,
      src: "https://i.pinimg.com/736x/8e/c7/98/8ec798c3cabcee2c864f98bc258dea1d.jpg",
      name: `Собака #${this.dogId}`,
      description: "классный песик",
      temperament: "Спокойный, дружелюбный",
      care: "Требует ухода",
      extraInfo: "хорошо ладит с детьми"
    };
  }

  getHTML() {
    return `
      <div id="dog-product-page" class="container mt-3">
      </div>
    `;
  }

  render() {
    this.parent.innerHTML = "";
    const html = this.getHTML();
    this.parent.insertAdjacentHTML("beforeend", html);

    const backBtn = new BackButtonComponent(this.pageRoot);
    backBtn.render(this.onBackClicked.bind(this));

    const data = this.getData();
    const accordion = new DogAccordionComponent(this.pageRoot);
    accordion.render(data);
  }

  onBackClicked() {
    const mainPage = new MainPage(this.parent);
    mainPage.render();
  }
}
