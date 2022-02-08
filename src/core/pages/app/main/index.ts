class MainPage {
  private container: HTMLElement;
  static titlesObi = {
    mainTitle: "Main Page",
  };
  constructor(id: string) {
    this.container = document.createElement("div");
    this.container.id = id;
  }
  private createHeaderTitle(title: string) {
    const headerTitle = document.createElement("h1");
    headerTitle.innerText = title;
    return headerTitle;
  }
  render() {
    const title = this.createHeaderTitle(MainPage.titlesObi.mainTitle);
    this.container.append(title);
    return this.container;
  }
}

export default MainPage;
