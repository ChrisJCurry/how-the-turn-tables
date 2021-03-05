import {ProxyState} from "../AppState.js"
class MemeQuotes{
addMeme(memeTitle) {
  // ProxyState.memeCards = [...ProxyState.memeCards, new Memecard({ title: Math.random() })]
  let meme = ProxyState.meme.find(i=>i.title == memeTitle)
}
}

export const memeQuotes = new MemeQuotes();
