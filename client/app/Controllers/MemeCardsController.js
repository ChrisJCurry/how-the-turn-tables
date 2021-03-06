import { ProxyState } from "../AppState.js";
import { memeCardsService } from "../Services/MemeCardsService.js";

//Private
function _draw() {
  let memeCards = ProxyState.meme;
  let template = ''

  memeCards.forEach(memeCard => template += memeCard.Template )
  document.getElementById("meme-card").innerHTML = template
  //console.log(memeCards);
}

//Public
export default class MemeCardsController {
  constructor() {
    ProxyState.on("meme", _draw);
    _draw()
    this.getAll()
  }

  async getAll(){
    try {
      await memeCardsService.find()
    } catch (error) {
      console.error(error)
    }

  }

  async thumbsUp(id){
    memeCardsService.thumbsUp(id)
  }

}
