import { h, Component } from "preact";
import { Link } from "preact-router/match";
import style from "./style";
import home from "./home.svg";
import dashboard from "./dashboard.svg";

export default class BottomNav extends Component {

  render() {
    const items = [
      {
        itemUrl: "/",
        imageSrc: home,
        imageAlt: "User Home",
        spanText: "Home"
      },
      {
        itemUrl: "/dashboard",
        imageSrc: dashboard,
        imageAlt: "User Dashboard",
        spanText: "Dashboard"
      }
    ];

    const navItems = items.map(i => {
      return (
        <NavItem
          setActive={this.setActive}
          itemUrl={i.itemUrl}
          imageSrc={i.imageSrc}
          imageAlt={i.imageAlt}
          spanText={i.spanText}
        />
      );
    });

    return (
      <div class={style.BottomNavContainer}>
        <nav>
          <ul class={style.BottomNavItems}>
            {navItems}
          </ul>
        </nav>
      </div>
    );
  }
}

const NavItem = ({ itemUrl, imageSrc, imageAlt, spanText }) => {
  return (
    <Link href={itemUrl}>
      <li>
        <img src={imageSrc} alt={imageAlt} /><span>{spanText}</span>
      </li>
    </Link>
  );
};
