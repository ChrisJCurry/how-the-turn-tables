import { ProxyState } from "../AppState.js";
import Memecard from "../Models/MemeCard.js";

class MemeCardsService {

  // constructor(){
  //   this.getMemeCard
  // }

  // async getMemeCard(){
  //   try {
  //     const res = await memeC
  //   } catch (error) {

  //   }
  // }

  addMeme(memeTitle) {
    // ProxyState.memeCards = [...ProxyState.memeCards, new Memecard({ title: Math.random() })]
    let meme = ProxyState.meme.find(i=>i.title == memeTitle)
  }
}

export const memeCardsService = new MemeCardsService();

