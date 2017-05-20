import { h, Component } from "preact";
import style from "./style.css";

export default class WorkoutCard extends Component {
  render() {
    const { workoutType, onClick } = this.props;

    return (
      <div
        onClick={() => onClick(this.props.workoutType)}
        class="col-xs-12 col-md-4"
      >
        <article
          class={
            this.props.isSelected
              ? style.workoutCardSelected
              : style.workoutCard
          }
        >
          <h1>{workoutType}</h1>
        </article>
      </div>
    );
  }
}
