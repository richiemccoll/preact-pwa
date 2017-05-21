import { h, Component } from "preact";
import { Link } from "preact-router/match";
import style from "./style";
import home from "./home.svg";
import dashboard from "./dashboard.svg";

export default class BottomNav extends Component {
  render() {
    return (
      <div class={style.BottomNavContainer}>
        <nav>
          <ul class={style.BottomNavItems}>
            <li><img src={home} alt="User Home" /><span>Home</span></li>
            <li><img src={dashboard} alt="User Dashboard"/><span>Dashboard</span></li>
            <li>Current</li>
          </ul>
        </nav>
      </div>
    );
  }
}
