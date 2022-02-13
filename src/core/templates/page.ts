abstract class Page {
  protected container: HTMLElement;
  static titlesObj = {};
  constructor(id: string) {
    this.container = document.createElement("div");
    this.container.id = id;
  }
  protected createHeaderTitle(title: string) {
    const headerTitle = document.createElement("h1");
    headerTitle.innerText = title;
    return headerTitle;
  }
  render() {
    return this.container;
  }
}
export default Page;
