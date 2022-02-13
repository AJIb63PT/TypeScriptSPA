import Component from "../../templates/components";
import { PageIds } from "../app";

const buttons = [
  {
    id: PageIds.MainPage,
    text: "Main Page",
  },
  {
    id: PageIds.SettingsPage,
    text: "Settings Page",
  },
  {
    id: PageIds.StatisticsPage,
    text: "Statistics Page",
  },
];
class Header extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }
  renderPageButtons() {
    const PageButtons = document.createElement("div");
    buttons.forEach((button) => {
      const buttonHTML = document.createElement("a");
      buttonHTML.href = `#${button.id}`;
      buttonHTML.innerText = button.text;
      PageButtons.append(buttonHTML);
    });
    this.container.append(PageButtons);
  }
  render() {
    this.renderPageButtons();
    return this.container;
  }
}
export default Header;
