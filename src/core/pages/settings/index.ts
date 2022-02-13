import Page from "../../templates/page";

class SettingsPage extends Page {
  static titlesObj = {
    mainTitle: "Settings Page",
  };
  constructor(id: string) {
    super(id);
  }

  render() {
    const title = this.createHeaderTitle(SettingsPage.titlesObj.mainTitle);
    this.container.append(title);
    return this.container;
  }
}

export default SettingsPage;
