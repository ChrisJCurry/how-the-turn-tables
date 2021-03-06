export default class MemeCard {
  constructor(data) {
    this.imgUrl = data.imgUrl,
    this.id = data._id || data.id,
    this.quotes = data.quotes
  }

  get Template() {
      return /*html*/ `<div class="card mt-4">
       <img class ="card-img-top" src="${this.imgUrl}">
       <div class = "row justify-content-center text-center">
        <div class= "col-5">
        ${this.Quotes}
        <br>
        </div>
      </div>`
      }
      get Quotes(){
        let template = ""
        this.quotes.forEach(q => {
          template += /*html*/ `
          <p>"${q.content}"</p><i class="fa fa-thumbs-o-up color" onclick ="app.memeCardsController.thumbsUp('${this.id}')" aria-hidden="true"></i>
          <br>
          `
        });

        return template
      }

}
