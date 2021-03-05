import { AuthController } from "./Controllers/AuthController.js";
import MemeCardsController from "./Controllers/MemeCardsController.js";

class App {
  authController = new AuthController();
  memeCardsController = new MemeCardsController();
}

window["app"] = new App();
