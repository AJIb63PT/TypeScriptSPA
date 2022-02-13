import Page from "../../templates/page";

class MainPage extends Page {
  static titlesObj = {
    mainTitle: "Main Page",
  };
  constructor(id: string) {
    super(id);
  }

  render() {
    const title = this.createHeaderTitle(MainPage.titlesObj.mainTitle);
    this.container.append(title);
    return this.container;
  }
}

export default MainPage;
