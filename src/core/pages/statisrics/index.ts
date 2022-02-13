import Page from "../../templates/page";

class StatisticsPage extends Page {
  static titlesObj = {
    mainTitle: "Statistics Page",
  };
  constructor(id: string) {
    super(id);
  }

  render() {
    const title = this.createHeaderTitle(StatisticsPage.titlesObj.mainTitle);
    this.container.append(title);
    return this.container;
  }
}

export default StatisticsPage;
