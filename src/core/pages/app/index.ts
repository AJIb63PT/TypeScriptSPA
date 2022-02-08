import MainPage from "./main";

class App {
  private container: HTMLElement;
  constructor() {
    this.container = document.body;
  }

  run() {
    this.container.innerText = "Single Page App";
  }
}
export default App;
