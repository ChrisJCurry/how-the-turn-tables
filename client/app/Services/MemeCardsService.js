import { ProxyState } from "../AppState.js";
import MemeCard from "../Models/MemeCard.js";
import { api } from "./AxiosService.js";

class MemeCardsService {
  async thumbsUp(quoteId, memeId) {
    let meme = ProxyState.meme.find(m => m.id === memeId)
    //meme.quotes[id].votes += 1
    let quote = meme.quotes.find(q=>q.id === quoteId)
    quote.vote++
    try {
      const res = await api.put('api/memes/'+ memeId+ '/quotes', meme)
      ProxyState.meme = ProxyState.meme
    } catch (error) {
      console.error(error)
    }
  }
  constructor(){
    //this.postMemes()
  }
  async find(query = {}) {
    let res = await api.get("api/memes")
    console.log(res)
    ProxyState.meme = res.data.map(m=> new MemeCard(m))

  }
  // async postMemes(){
  //   try {
  //     const res = await api.post("meme", )
  //     ProxyState.meme = [...ProxyState.meme, new MemeCard(res.data)]
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  // addMeme(memeTitle) {
  //   // ProxyState.memeCards = [...ProxyState.memeCards, new Memecard({ title: Math.random() })]
  //   let meme = ProxyState.meme.find(i=>i.title == memeTitle)
  // }
}

export const memeCardsService = new MemeCardsService();

