export default class MemeCard {
  constructor(data) {
    this.imgUrl = data.imgUrl,
    this.id = data._id || data.id,
    this.quotes = data.quotes
    this.votes = data.vote
    this.comment = data.comments

  }

  get Template() {
      return /*html*/ `<div class="card mt-4">
       <img class ="card-img-top" src="${this.imgUrl}">
       <div class = "row flex justify-content-center text-center">
        <div class= "col-5">
        ${this.Quotes}
        <br>
        ${this.Comments}
        </div>
        <div class="form-group col-12 flex">
        <form onsubmit="app.memeCardsController.comments(event,'${this.id}')">
        <input type="text" name="content" minlength="3" required maxlength="15" placeholder="Comments">
                      <button type="submit">Add Comment</button>
                      <div class="row" id = "comment-${this.id}"></div>
        </form>
        </div>
      </div>`
      }
      get Quotes(){
        let template = ""
        this.quotes.forEach(q => {
          template += /*html*/ `
          <p>"${q.content}"</p><i class="fa fa-thumbs-o-up color" onclick ="app.memeCardsController.thumbsUp('${q.id}', '${this.id}')" aria-hidden="true"></i>
          <p>Votes:${q.vote}</p>
          <br>


          `
        });

        return template
      }

      get Comments(){
        let template = ""
        this.comment.forEach(c => {
          template += /*html*/ `
          <p>"${c.content}"</p>

          <br>
          `
        });
        return template
      }

}
