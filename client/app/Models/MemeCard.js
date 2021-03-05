export default class MemeCard {
  constructor(data) {
    this.imgUrl = data.imgUrl,
    //this.title = data.title
    //this.id = data._id
    this.quotes = data.content
  }

  get Template() {
      return /*html*/ `<div class="card">
       <img class ="card-img-top" src="${this.imgUrl}">
       <li>
        <ol> ${this.quotes}</ol>
        <ol> ${this.quotes}</ol>
        <ol> ${this.quotes}</ol>
        <ol> ${this.quotes}</ol>
       </li>
      </div>`
  }


}
