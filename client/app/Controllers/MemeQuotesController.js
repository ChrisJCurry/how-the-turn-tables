import {ProxyState} from "../AppState.js"
import { memeQuotes } from "../Services/MemeQuotesServices.js"
function _draw() {
  //let memeCards = ProxyState.meme;
  let MemeQuotes = ProxyState.memeQuotes
  let template = ''

  memeQuotes.forEach(memeQuotes => template += memeQuotes.Template )
  document.getElementById("meme-card").innerHTML = template
  //console.log(memeCards);
}

//Public
export default class MemeCardsController {
  constructor() {
    ProxyState.on('quotes', _draw)
    _draw()
  }

}
