import { ProxyState } from "../AppState.js";
import { memeCardsService } from "../Services/MemeCardsService.js";

//Private
function _draw() {
  let memeCards = ProxyState.meme;
  let MemeQuotes = ProxyState.memeQuotes
  let template = ''

  memeCards.forEach(memeCards => template += memeCards.Template )
  document.getElementById("meme-card").innerHTML = template
  console.log(memeCards);
}

//Public
export default class MemeCardsController {
  constructor() {
    ProxyState.on("meme", _draw);
    ProxyState.on('quotes', _draw)
    _draw()
  }

  addMeme() {
    memeCardsService.addMeme()
  }

}
